// Based on: https://api.highcharts.com/highcharts/tree.json

type Schema = { _meta: SchemaMeta; } & Defs;

interface SchemaMeta {
  commit: string;
  branch: string;
  version: string;
  date: string;
}

interface Defs {
  [key: string]: Def;
}

type Product = "highcharts" | "highstock" | "highmaps";

// Code below this point was generated with schema-builder.ts
// See `couldBeStringLiteral()` and `removeUnhelpfulLiterals()` for how we guess what values should be preserved as literals

interface Sample {
  value: string;
  products: ("highstock" | "highmaps" | "highcharts")[];
}
interface SamplesItem {
  name: string;
  value: string;
  products: ("highstock" | "highcharts" | "highmaps")[];
}
interface Type {
  names: ("String" | "Number" | "Object" | "Array" | "Boolean" | "Color" | "Array.<Object>" | "function" | "CSSObject" | "Mixed" | "plotOptions.series.states" | "Array.<String>" | "Array.<(String|Number)>" | "undefined" | "null" | "Array.<Color>" | "Array.<(Object|Array)>" | "Array.<(Object|Array|Number)>" | "Array.<(Object|Number)>" | "Array.<Array.<Mixed>>" | "HTMLElement" | "Array.<Array>" | "Array.<Number>")[];
}
interface Productdesc {
  value: string;
  products: ("highmaps" | "highstock" | "highcharts")[];
}
interface Default {
  value: string;
  products: ("highmaps" | "highstock" | "highcharts")[];
}
interface DefaultByProduct {
  highcharts: string;
  highstock: string;
  highmaps: string;
}
interface TagsItem {
  originalTitle: "validvalue:" | "defaults";
  title: "validvalue:" | "defaults";
  text: string;
  value: string;
}
interface Doclet {
  description: string;
  extends: string;
  products: ("highstock" | "highcharts" | "highmaps")[];
  sample: Sample;
  samples: SamplesItem[];
  since: string;
  type: Type;
  defaultvalue: string;
  exclude: string[];
  see: string[];
  values: string;
  productdesc: Productdesc;
  default: Default;
  defaultByProduct: DefaultByProduct;
  context: "Series" | "Point" | "Chart" | "{Series|Point}" | "Axis" | "PlotLineOrBand";
  examples: string[];
  deprecated: boolean | "true";
  tags: TagsItem[];
  memberof: "yAxis";
}
interface Meta {
  fullname: string;
  name: string;
  line: number;
  lineEnd: number;
  column: number;
  filename: string;
  default: string | number | boolean | null;
}
interface Def {
  children: Defs;
  doclet: Doclet;
  meta: Meta;
}