import fetch from "node-fetch";
import * as fs from "fs";
import "colors";

export const apiUrl = (product: Product) => `https://api.highcharts.com/${product}/tree.json`;

export async function fetchHighchartsApiJson(product: Product) {
  console.log(`Fetching ${product} API...`.gray)
  const response = await fetch(apiUrl(product));
  const json = await response.json();
  return json;
}

export function capitalize(name: string) {
  return `${name.substring(0, 1).toUpperCase()}${name.substring(1)}`;
}

export const unique = <T>(e: T, i: number, a: T[]) => a.indexOf(e) == i;

export function writeTextFile(file: string, text: string) {
  fs.writeFileSync(file, text);
}