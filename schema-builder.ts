#!/usr/bin/env node

import "colors";
import { fetchHighchartsApiJson, capitalize, unique } from "./utils";

main();

async function main() {
  const highcharts = await fetchHighchartsApiJson("highcharts");
  const highstock = await fetchHighchartsApiJson("highstock");
  const highmaps = await fetchHighchartsApiJson("highmaps");
  buildSchema(highcharts, highstock, highmaps);
}

type PrimitiveType = string;
type ObjectShape = { [property: string]: ShapeType; };
type ArrayShape = { __array: (PrimitiveType | ObjectShape)[]; }
type AliasType = string;
type ShapeType = PrimitiveType[] | ObjectShape | ArrayShape | AliasType;

const isPrimitivesTypes = (value: any): value is PrimitiveType[] => Array.isArray(value);
const isObjectShape = (value: any): value is ObjectShape => typeof value == "object" && !Array.isArray(value) && !isArrayShape(value);
const isArrayShape = (value: any): value is ArrayShape => !!(value as ArrayShape).__array;
const isAliasType = (value: any): value is AliasType => typeof value == "string";

function buildSchema(...schemas: any[]) {
  const defShape: ObjectShape = {};
  schemas.forEach(schema => collectSchemaDefShapeFromKeys(schema, defShape));
  // console.log(JSON.stringify(defShape, null, 2));
  outputObject("Def", defShape)
}

function collectSchemaDefShapeFromKeys(defs: any, defShape: ObjectShape) {
  Object.keys(defs).forEach(key => {
    if (key == "_meta") return;
    collectSchemaDefShape(defs[key], defShape);
  });
}

function collectSchemaDefShape(def: any, defShape: ObjectShape) {
  Object.keys(def).forEach(key => {
    if (key == "children") {
      defShape[key] = "Defs";
      collectSchemaDefShapeFromKeys(def[key], defShape);
    } else {
      defShape[key] = collectObjectShape(def[key], defShape[key] as ObjectShape);
    }
  });
}

function collectObjectShape(obj: any, objShape: ObjectShape = {}): ObjectShape {
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    objShape[key] = collectObjectPropertyType(value, objShape[key]);
  });
  return objShape;
}

function collectObjectPropertyType(value: any, currentType?: ShapeType): ShapeType {
  const type = collectBasicType(value);
  // Note: assumes that shape types (Primitive | Object | Array) don't ever need to be in a union, else this will break (follow the assertions)
  switch (type) {
    case "object":
      return Array.isArray(value)
        ? { __array: collectArrayTypes(value, currentType ? (currentType as ArrayShape).__array : undefined) }
        : collectObjectShape(value, currentType as ObjectShape || {});
    default:
      return !currentType
        ? [type]
        : (currentType as PrimitiveType[]).indexOf(type) == -1
          ? [...(currentType as PrimitiveType[]), type]
          : currentType;
  }
}

function collectBasicType(value: any) {
  return value === null ? "null" : typeof value == "string" && couldBeStringLiteral(value) ? JSON.stringify(value) : typeof value;
}

function couldBeStringLiteral(str: string) {
  return str.match(/^[^\s]+$/);
}

function collectArrayTypes(values: any[], currentTypes: ArrayShape["__array"] = []): ArrayShape["__array"] {
  const types = values.map(collectBasicType).filter(unique);
  return types.length == 1 && types[0] == "object" && currentTypes.length <= 1
    ? [collectObjectPropertyType(values[0], currentTypes[0] as ObjectShape || {}) as ObjectShape]
    : [...currentTypes, ...types].filter(unique);
}

function outputObject(name: string, objShape: ObjectShape) {
  console.log(`interface ${name} {
  ${outputObjectProperties(objShape).join("\n  ")}
}`.green)
}

function outputObjectProperties(objShape: ObjectShape): string[] {
  return Object.keys(objShape).map(key => {
    const value = objShape[key];
    const type = isPrimitivesTypes(value)
      ? outputPrimitiveTypes(value)
      : isAliasType(value)
        ? value
        : isArrayShape(value)
          ? outputArrayType(key, value.__array)
          : outputObjectType(key, value);
    return `${key}: ${type};`;
  });
}

function outputPrimitiveTypes(types: PrimitiveType[]) {
  return removeUnhelpfulLiterals(types).join(" | ");
}

function outputObjectType(key: string, value: ObjectShape) {
  const typeName = capitalize(key);
  outputObject(typeName, value);
  return typeName;
}

function outputArrayType(key: string, array: ArrayShape["__array"]) {
  array = removeUnhelpfulLiterals(array);
  return `${
    array.length > 1
      ? `(${outputPrimitiveTypes(array as PrimitiveType[])})`
      : isObjectShape(array[0])
        ? outputObjectType(`${key}Item`, array[0] as ObjectShape)
        : `${array[0]}`
    }[]`;
}

function removeUnhelpfulLiterals(array: ArrayShape["__array"]): ArrayShape["__array"] {
  const hasGenericStringType = array.indexOf("string") != -1;
  const stringLiteralValue = /^".+"$/;
  const hasTooManyStringLiterals = array.filter(type => typeof type == "string" && type.match(stringLiteralValue)).length > 50;
  return hasGenericStringType || hasTooManyStringLiterals 
    ? array.map(type => typeof type == "string" && type.match(stringLiteralValue) ? "string" : type).filter(unique)
    : array;
}