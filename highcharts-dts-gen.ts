#!/usr/bin/env node
import { fetchHighchartsApiJson, capitalize, writeTextFile, apiUrl, unique, resolveDefPath } from "./utils";
import { applyPatchToDefs } from "./highcharts-patch";

// Options used by `Highcharts.setOptions()` as opposed to `Highcharts.chart()`
const setOptionsNames = ["global", "lang"];

main();

async function main() {
  try {
    await generateTypeDefs("highcharts");
    // await generateTypeDefs("highstock");
    // await generateTypeDefs("highmaps");
  } catch (error) {
    console.error("Error".bgRed, error)
  }
}

async function generateTypeDefs(product: Product) {
  const schema = await fetchHighchartsApiJson(product);
  // TODO: need to split up the product defintions in some way
  const output = outputSchemaDeclarationFile(schema, product);
  writeTextFile(`${product}.d.ts`, output);
}

function outputSchemaDeclarationFile(schema: Schema, product: Product): string {
  const schemaDefs = {};
  const header = outputSchemaHeader(schema._meta, product);
  const defs = outputNamespaceDeclaration(capitalize(product), outputSchemaDefs(schema));
  return (
    `${header}

${defs}`
  );
}

function outputSchemaHeader(meta: SchemaMeta, product: Product): string {
  return (
    `// Type definitions for Highcharts ${meta.version} (${meta.branch} commit ${meta.commit} on ${meta.date})
// Project: http://www.highcharts.com/
// Definitions generated from ${apiUrl(product)} on ${new Date()}
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6`
  );
}

function outputNamespaceDeclaration(name: string, content: string): string {
  const indentedContent = content.replace(/^/gm, "  ")
  return (
    `declare namespace ${name} {
${indentedContent}
}`
  )
}

function outputSchemaDefs(schema: Schema): string {
  const options: Defs = { ...schema }
  delete options._meta;
  // TODO: remove `setOptionsNames` and process those separately
  const optionsDef = { children: options } as Def;
  writeTextFile("defs.before.json", JSON.stringify(optionsDef, null, 2))
  applyPatchToDefs(optionsDef);
  reduceDefTree(optionsDef, [], optionsDef);
  reduceExtendsPaths(optionsDef, optionsDef);
  writeTextFile("defs.after.json", JSON.stringify(optionsDef, null, 2))
  return outputObjectDefAndChildren("Options", optionsDef, [], true);
}

/**
 * Reduce redundant defs in the tree by eliminating property defs that are already
 * being merged with other property defs with good type info. This eliminates 100
 * objects and hundreds of properties that would otherwise muddy the type-defs.
 * (Such defs seem to exist in the tree just to add documentation, not type info.)
 * 
 * See `defs.before.json` and `defs.after.json` for how the def tree is changed.
 */
function reduceDefTree(currentDef: Def, path: string[], rootDef: Def, indent = "") {
  // console.log(indent, `reduceDefTree [${path}]`.green)

  hasExclude(currentDef) && !hasExtends(currentDef) && console.log(`Object [${path}] doesn't extend but excludes [${currentDef.doclet.exclude}]`.bgYellow)

  if (!isObjectDef(currentDef)) {
    // console.log(indent, `Resolve non-object def [${path}]`.gray)

    const defsAtPath = resolveDefsAtPath(path, rootDef, indent);
    if (!defsAtPath.length) throw new Error(`No defs at path [${path}]`)
    // console.log(indent, `Defs at path [${path}]: ${defsAtPath.length}`.cyan);

    const otherDefsToKeep = defsAtPath.filter(d => d != currentDef && hasTypeInfo(d));
    if (otherDefsToKeep.length) {
      console.log(`Type already exists for [${path}] at [${otherDefsToKeep.map(d => d.meta && d.meta.fullname)}] of {${otherDefsToKeep.map(d => [hasType(d) && d.doclet.type.names, d.doclet.values])}}, removing own def with type {${currentDef.doclet && currentDef.doclet.type && currentDef.doclet.type.names}}`.red)
      deleteDef(path, rootDef);
    }
  }
  else if (hasChildren(currentDef)) {
    // console.log(indent, `Inspecting children at [${path}]`.gray)
    Object.keys(currentDef.children).filter(key => !!key).forEach(key => {
      reduceDefTree(currentDef.children[key], [...path, key], rootDef, `${indent}  `);
    });
    // if (!hasTypeInfo(currentDef)) {
    if (!hasChildren(currentDef) && !hasExtends(currentDef)) { // TODO: need to deal with objects that only have "exclude" of merged props -- switch to emit interfaces, add explicit "extends"?
      console.log(`Removed all children of [${path}] and no type information is left, removing def`.bgRed)
      deleteDef(path, rootDef);
      if (!resolveDefsAtPath(path, rootDef).length) throw new Error(`No defs left at [${path}]`)
    }
  } else {
    // console.log(indent, `No children at [${path}]`.gray)
    // hasExtends(currentDef) && console.log(indent, `But extends ${currentDef.doclet.extends}`.bgMagenta)
    // hasExclude(currentDef) && console.log(indent, `But excludes ${currentDef.doclet.exclude}`.bgMagenta)
    const defsAtPath = resolveDefsAtPath(path, rootDef, `${indent}  `);
    if (!defsAtPath.length) throw new Error(`No defs at path [${path}]`)
    // console.log(indent, `Resolved objects at path [${path}]: ${defsAtPath.length}`.bgCyan);
  }

  function hasTypeInfo(def: Def): boolean {
    return hasType(def) || hasValues(def) || isObjectDef(def);
  }

  function deleteDef(path: string[], rootDef: Def) {
    const parentDef = resolveDefPath(rootDef, path.slice(0, -1));
    const key = path[path.length - 1];
    delete parentDef.children[key];
  }
}

/**
 * Sometimes an "extends" field refers to a path that doesn't have a direct def, the def
 * only exists as a merged def from an inherited parent. This reduces such "extends" to
 * refer to the nearest concrete def path which will be emitted as a type def, so that emit
 * later on can trust that the extends path actually exists as a type def.
 */
function reduceExtendsPaths(currentDef: Def, rootDef: Def) {
  if (isObjectDef(currentDef)) {
    Object.keys(currentDef.children).forEach(key => reduceExtendsPaths(currentDef.children[key], rootDef));
  }
  if (hasExtends(currentDef)) {
    const extendsPaths = parseExtendsObjectPaths(currentDef.doclet.extends);
    currentDef.doclet.extends = extendsPaths.map(extendsPath => {
      const defs = resolveDefsAtPath(extendsPath, rootDef);
      if (!defs.length) throw new Error(`Object [${currentDef.meta.fullname}] extends [${extendsPath}] but no def resolves to that path`)
      const resolvedPath = defs[defs.length - 1].meta.fullname;
      resolvedPath != extendsPath.join(".") && console.log(`Resolved extends path [${extendsPath}] to [${resolvedPath}] from [${defs.map(d => d.meta.fullname)}]`.magenta)
      return resolvedPath;
    }).join(",");
  }
}

/**
 * Given any path like ["plotOptions", "line", "states", "hover"] this will resolve all
 * the defs that merge at that path, which may include a direct def at that path, defs
 * that are extended at that path, defs that are matching named children of defs extended 
 * in a parent of the path, and so on recursively through the extension hierarchy. 
 * 
 * This also adds the appropriate `meta.fullname` path to all visited defs, since it's sometimes missing.
 */
function resolveDefsAtPath(path: string[], rootDef: Def, indent = ""): Def[] {
  // console.log(indent, `resolveDefsAtPath ${path}`.gray)
  let current = rootDef;
  let resolved: Def[] = [];
  for (let i = 0; i < path.length; i++) {
    const key = path[i];
    current = current.children && current.children[key];
    if (current) {
      current.meta = { ...current.meta || {}, fullname: path.slice(0, i + 1).join(".") } // While we're here ensure the fullname is populated which is used to know what the path is from a def object
      if (current.doclet && current.doclet.extends) {
        parseExtendsObjectPaths(current.doclet.extends).forEach(extendsPath => {
          // console.log(indent, `[${path.slice(0, i + 1)}] extends [${extendsPath}]`.red)
          resolved.push(...resolveDefsAtPath([...extendsPath, ...path.slice(i + 1)], rootDef, `${indent}  `));
        });
      }
      if (i == path.length - 1) {
        // console.log(indent, `Resolved [${path}] to ${current}`)
        resolved.push(current);
      }
    } else {
      // console.log(indent, `Couldn't resolve [${path}] at "${key}"`.gray);
      break;
    }
  }
  return resolved;
}

function outputObjectDefAndChildren(key: string, def: Def, chain: string[], topLevel = false): string {
  const fullDefChain = [...chain, key];
  const nestedObjectChain = topLevel ? [] : fullDefChain;
  const childObjectDefs = outputChildObjectDefs(def.children, nestedObjectChain);
  const objectDef = outputObjectDef(def, fullDefChain, nestedObjectChain);
  return [...childObjectDefs, objectDef].join("\n");
}

function outputChildObjectDefs(defs: Defs, chain: string[]): string[] {
  const childObjectDefs = filterDefsToChildObjectDefs(defs);
  return Object.keys(childObjectDefs).map(key => outputObjectDefAndChildren(key, childObjectDefs[key], chain));
}

function outputFullName(...path: string[]): string {
  return path.map(capitalize).join("");
}

function filterDefsToChildObjectDefs(defs: Defs): Defs {
  return Object.keys(defs)
    .reduce((filteredDefs: Defs, key: string) => !!key && isObjectDef(defs[key]) /*&& !isObjectAlias(defs[key])*/ ? { ...filteredDefs, [key]: defs[key] } : filteredDefs, {});
}

function isObjectDef(def: Def): boolean {
  // TODO: need to deal with objects that only have "exclude" of merged props
  return hasChildren(def) || hasExtends(def); //|| hasExclude(def); 
}

function isObjectAlias(def: Def): boolean {
  return !hasChildren(def) && hasExtends(def) && !hasExclude(def);
}

function hasChildren(def: Def): boolean {
  return !!(def.children && Object.keys(def.children).length);
}

function hasExtends(def: Def): boolean {
  return !!(def.doclet && def.doclet.extends);
}

function hasExclude(def: Def): boolean {
  return !!(def.doclet && def.doclet.exclude && def.doclet.exclude.length);
}

function hasType(def: Def): boolean {
  return !!(def.doclet && def.doclet.type && def.doclet.type.names && def.doclet.type.names.length);
}

function hasValues(def: Def): boolean {
  return !!(def.doclet && def.doclet.values);
}

function outputObjectDef(def: Def, fullNameChain: string[], propChain: string[]): string {
  const extendedNames = hasExtends(def) ? outputDefExtendedObjectNames(def) : [];
  const props = outputDefProps(def, propChain);
  const body = props.length ? (
    `{
  ${props.join("\n  ")}
}`
  ) : null;
  const exclude = hasExclude(def) ? `\n/** Exclude: ${def.doclet.exclude} */` : "";
  return (
    `// ${[...fullNameChain].join(".")}${exclude}
type ${outputFullName(...fullNameChain)} = ${extendedNames.concat(body || []).join(" & ")};`
  );
  // TODO: output interface if there's no extends?
  //   return (
  // `// ${[...fullNameChain].join(".")}${exclude}
  // interface ${outputFullName(...fullNameChain)}${extendedNames.length ? ` extends ${[...extendedNames].join(", ")}` : ""} ${body || "{}"}`
  //   );
}

function outputDefExtendedObjectNames(def: Def): string[] {
  return parseExtendsObjectPaths(def.doclet.extends).map(objectPath => outputFullName(...objectPath))
}

function outputDefProps(def: Def, chain: string[]): string[] {
  return def.children
    ? Object.keys(def.children)
      .sort()
      .filter(key => !!key)
      .map(prop => outputDefProp(prop, def.children[prop], chain))
    : [];
}

function outputDefProp(propName: string, propDef: Def, chain: string[]): string {
  const propType = outputDefPropType(propName, propDef, chain);
  const defaultValue = outputDefDefaultValue(propDef);
  const defaultComment = defaultValue ? ` // Default: ${defaultValue.replace(/\n|\r/g, "\\n")}` : "";
  const excludeComment = hasExclude(propDef) ? ` // Exclude: ${propDef.doclet.exclude}` : ""
  return `${propName}: ${propType};${defaultComment}${excludeComment}`
}

function outputDefDefaultValue(def: Def): string | undefined {
  if (def.meta && def.meta.default != undefined) return JSON.stringify(def.meta.default);
  // if (def.doclet && def.doclet.default && def.doclet.default.value) return JSON.stringify(def.doclet.default.value);
  if (def.doclet && def.doclet.defaultvalue) return `"${def.doclet.defaultvalue}"`;
}

function outputDefPropType(propName: string, propDef: Def, chain: string[]): string {
  // console.log(propName.bgRed, propDef)
  return isObjectDef(propDef)
    ? outputObjectType(propName, propDef, chain)
    : outputPrimitiveType(propName, propDef, chain);
}

function outputObjectType(propName: string, propDef: Def, chain: string[]): string {
  return outputFullName(...chain, propName);
  // return isObjectAlias(propDef)
  //   ? parseExtendsObjectPaths(propDef.doclet.extends).map(objectPath => outputFullName(...objectPath)).join(" & ")
  //   : outputFullName(...chain, propName);
}

function outputPrimitiveType(propName: string, propDef: Def, chain: string[]): string {
  if (propDef.doclet && propDef.doclet.type && propDef.doclet.type.names) {
    // console.log(`Type of "${[...chain, propName].join(".").bold}" is {${propDef.doclet.type.names.join("|").bold}}`)
    return outputType(propDef.doclet.type, propDef.doclet.values);
  }
  if (propDef.doclet && propDef.doclet.values) {
    const values = parseLiteralValues(propDef.doclet.values);
    if (values) {
      console.log(`Using literal values ${JSON.stringify(values).bold} as type for "${[...chain, propName].join(".").bold}"`.cyan)
      return values.map(outputLiteralValue).join(" | ");
    }
  }
  if (propDef.meta && propDef.meta.default != undefined) {
    console.log(`Inferred type of "${[...chain, propName].join(".").bold}" as {${(typeof propDef.meta.default).bold}} from default value {${JSON.stringify(propDef.meta.default).bold}}`.yellow)
    return typeof propDef.meta.default;
  }
  console.warn(`Unable to determine type for "${[...chain, propName].join(".").bold}" (no doclet.type, doclet.values, or meta.default)`.red)
  return "any";
}

function outputType(type: Type, values?: string): string {
  return replacePrimitiveTypesWithLiteralValues(outputTypeNames(type.names), parseLiteralValues(values)).join(" | ");
}

function replacePrimitiveTypesWithLiteralValues(types: string[], values: any[] = []): string[] {
  values.forEach(value => {
    const primitiveTypeOfLiteral = typeof value;
    types = types.filter(type => type != primitiveTypeOfLiteral);
  });
  return [...types, ...values.map(outputLiteralValue)];
}

function outputLiteralValue(value: any): string {
  return JSON.stringify(value);
}

function outputTypeNames(typeNames: Type["names"]): string[] {
  return typeNames.map(type => {
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
      case "Object":
      case "undefined":
      case "null":
        return type.toLowerCase();
      case "function":
        // TODO: emit function signatures
        return "Function";
      case "plotOptions.series.states":
        throw new Error(`Did not expect "${type}" here, this should be handled as an object type`)
      case "Color":
      case "HTMLElement":
      case "Mixed": // TODO: figure out what this is
        return type;
      case "CSSObject":
        return "CSSStyleDeclaration"; // TODO: is this right?
      case "Array.<String>":
      case "Array.<Number>":
      case "Array.<Object>": // TODO: what kind of object?
      case "Array.<Color>":
      case "Array.<Array>":
      case "Array.<(String|Number)>":
      case "Array.<(Object|Number)>": // TODO: what kind of object?
      case "Array.<(Object|Array)>": // TODO: what kind of object? what kind of inner array?
      case "Array.<(Object|Array|Number)>": // TODO: what kind of object? what kind of inner array?
      // case "Array.<Array.<Mixed>>":
        const arrayTypeNames = parseArrayTypeNames(type);
        const arrayType = outputType({ names: arrayTypeNames });
        return arrayTypeNames.length == 1
          ? `${arrayType}[]`
          : `(${arrayType})[]`
      case "Array.<Array.<Mixed>>":
        // TODO: figure out what type of array these are
        return `Mixed[][]`;
      case "Array":
        // TODO: figure out what type of array these are
        return `any[]`;

      default:
        const _exaustive: never = type;
        throw new Error(`Unexpected type name ${type}`);
    }
  });
}

function parseArrayTypeNames(type: string): Type["names"] {
  const arrayTypeNamesPattern = /<\(?([a-z|]+)\)?>/i;
  return type.match(arrayTypeNamesPattern)![1].split("|") as Type["names"];
}

function parseExtendsObjectPaths(extendsValue: string): string[][] {
  return extendsValue
    .split(",") // ex: "series,plotOptions.ad" -> ["series", "plotOptions.ad"]
    .map(name => name
      .replace(/^\{(.+)\}$/, "$1") // ex "{plotOptions.sma}" -> "plotOptions.sma"
      .split(".") // ex: "plotOptions.sma" -> ["plotOptions", "sma"}]
    ); // ex: ["series", "plotOptions.ad"] -> [["series"], ["plotOptions", "ad"]]
}

function parseLiteralValues(values?: string): any[] | undefined {
  // values && console.log(`parseDefValues ${values}`.gray)
  try {
    return values && JSON.parse(values.replace(/'/g, `"`).replace(/undefined/g, "null"));
  } catch (error) {
    console.error(`Unable to parse values "${values}"`.bgRed)
  }
}