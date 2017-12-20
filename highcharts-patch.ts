import { resolveDefPath } from "./utils";

type Patch<T> = {
  [P in keyof T]?: Patch<T[P]> | ((value: T[P]) => T[P])
}

const patch: { [path: string]: Patch<Def> } = {
  "plotOptions.series.dataLabels.filter.operator": {
    doclet: {
      values: values => values.replace(/""/g, `"`) // fixes typo `[">", "<", ">=", "<=", "==", "===""]` (note the double trailing quotes)
    }
  },
  "plotOptions.tilemap.tileShape": {
    doclet: {
      values: `["hexagon", "circle", "diamond", "square"]` // possible values mentioned in docs
    }
  },
  "yAxis.tooltipValueFormat": {
    doclet: {
      type: { names: ["String"] } // missing and `tooltipValueFormat` doesn't merge from anywhere
    }
  },
  "chart.parallelAxes.title": {
    doclet: {
      extends: "xAxis.labels" // missing type and doesn't merge, based on docs: "All options for xAxis.labels applies to parallel coordinates titles" -- https://api.highcharts.com/highcharts/chart.parallelAxes.title
    }
  }
}

export function applyPatchToDefs(rootDef: Def) {
  Object.keys(patch).forEach(key => {
    console.log(`Patching "${key.bold}" with`, patch[key])
    const path = key.split(".");
    const def = resolveDefPath(rootDef, path);
    applyPatch(def, patch[key]);
  });
}

function applyPatch<T extends object, K extends keyof T>(target: T, patch: Patch<T>): T {
  (Object.keys(patch) as K[]).forEach(key => {
    const patchValue = patch[key]!; // ! to avoid bogus "variable used before being assigned" error
    target[key] = typeof patchValue == "object" && !Array.isArray(patchValue)
      ? applyPatch(target[key] || {}, patchValue)
      : typeof patchValue == "function"
        ? patchValue(target[key])
        : patchValue;
  });
  return target;
}