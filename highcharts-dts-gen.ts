#!/usr/bin/env node
import { fetchHighchartsApiJson, capitalize, writeTextFile, apiUrl } from "./utils";

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
  return outputObjectDefAndChildren("Options", optionsDef, [], true);
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

function outputFullName(...chain: string[]): string {
  return chain.map(capitalize).join("");
}

function filterDefsToChildObjectDefs(defs: Defs): Defs {
  return Object.keys(defs)
    .reduce((filteredDefs: Defs, key: string) => !!key && isObjectDef(defs[key]) /*&& !isObjectAlias(defs[key])*/ ? { ...filteredDefs, [key]: defs[key] } : filteredDefs, {});
}

function isObjectDef(def: Def): boolean {
  return hasChildren(def) || hasExtends(def);
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

function outputObjectDef(def: Def, fullNameChain: string[], propChain: string[]): string {
  const extendedNames = hasExtends(def) ? outputDefExtendedObjectNames(def) : [];
  const props = outputDefProps(def, propChain);
  const body = props.length ? (
    `{
  ${props.join("\n  ")}
}`
  ) : null;
  return (
    `// ${[...fullNameChain].join(".")}${def.doclet && def.doclet.exclude ? `\n/** Exclude: ${def.doclet.exclude} */` : ""}
type ${outputFullName(...fullNameChain)} = ${extendedNames.concat(body || []).join(" & ")};`
  );
  //   return (
  // `// ${[...fullNameChain].join(".")}${def.doclet && def.doclet.exclude ? `\n/** Exclude: ${def.doclet.exclude} */` : ""}
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
  return `${propName}: ${propType};${defaultValue ? ` // Default: ${defaultValue.replace(/\n|\r/g, "\\n")}` : ""}`
}

function outputDefDefaultValue(def: Def): string | undefined {
  if (def.meta && def.meta.default) return JSON.stringify(def.meta.default);
  // if (def.doclet && def.doclet.default && def.doclet.default.value) return JSON.stringify(def.doclet.default.value);
  if (def.doclet && def.doclet.defaultvalue) return `"${def.doclet.defaultvalue}"`;
}

function outputDefPropType(propName: string, propDef: Def, chain: string[]): string {
  // console.log(propName.bgRed, propDef)
  return isObjectDef(propDef)
    ? outputObjectPropType(propName, propDef, chain)
    : outputPrimitivePropType(propName, propDef, chain);
}

function outputObjectPropType(propName: string, propDef: Def, chain: string[]): string {
  return outputFullName(...chain, propName);
  // return isObjectAlias(propDef)
  //   ? parseExtendsObjectPaths(propDef.doclet.extends).map(objectPath => outputFullName(...objectPath)).join(" & ")
  //   : outputFullName(...chain, propName);
}

function outputPrimitivePropType(propName: string, propDef: Def, chain: string[]): string {
  if (propDef.doclet && propDef.doclet.type && propDef.doclet.type.names) {
    return outputType(propDef.doclet.type, propDef.doclet.values);
  }
  if (propDef.doclet && propDef.doclet.values) {
    const values = parseDefValues(propDef.doclet.values);
    if (values) {
      console.log(`Using literal values ${JSON.stringify(values).bold} as type for "${[...chain, propName].join(".").bold}"`.cyan)
      return values.map(outputLiteralValue).join(" | ");
    }
  }
  if (propDef.meta && propDef.meta.default) {
    console.log(`Inferred type of "${[...chain, propName].join(".").bold}" as {${(typeof propDef.meta.default).bold}} from default value {${JSON.stringify(propDef.meta.default).bold}}`.yellow)
    return typeof propDef.meta.default;
  }
  console.warn(`Unable to determine type for "${[...chain, propName].join(".").bold}" ${propDef.doclet ? propDef.doclet.values : ""}`.red)
  return "any";
}

function outputType(type: Type, values?: string): string {
  return replaceLiteralValues(outputTypeNames(type.names), parseDefValues(values)).join(" | ");
}

function replaceLiteralValues(types: string[], values: any[] = []): string[] {
  values.forEach(value => {
    const valueType = typeof value;
    types = types.filter(type => type != valueType);
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
        return type;
      case "CSSObject":
        return "CSSStyleDeclaration";
      case "Mixed":
        // TODO: figure out what this is
        return "any";
      case "Array.<String>":
      case "Array.<Number>":
      case "Array.<Object>": // TODO: what kind of object?
      case "Array.<Color>":
      case "Array.<Array>":
      case "Array.<(String|Number)>":
      case "Array.<(Object|Number)>": // TODO: what kind of object?
      case "Array.<(Object|Array)>": // TODO: what kind of object? what kind of inner array?
      case "Array.<(Object|Array|Number)>": // TODO: what kind of object? what kind of inner array?
        const arrayTypeNames = parseArrayTypeNames(type);
        const arrayType = outputType({ names: arrayTypeNames });
        return arrayTypeNames.length == 1
          ? `${arrayType}[]`
          : `(${arrayType})[]`
      case "Array.<Array.<Mixed>>":
        // TODO: figure out what type of array these are
        return `any[][]`;
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

function parseDefValues(values?: string): any[] | undefined {
  values && console.log(`parseDefValues ${values}`.gray)
  try {
    return values && JSON.parse(values);
  } catch (error) { }
}