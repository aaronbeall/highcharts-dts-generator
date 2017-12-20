# General issues
- Split up products Highcharts/Highstock/Highmaps definitions?
- Emit `setOptions()` props separate from chart options
- Handle `exclude`:
  - Use `Omit<>`
  - Handle defs that `exclude` but do not `extend` (see output) -- this is tricky because `Omit<>` will only work to omit props that are members of directly extended obejcts. I could add explicit `extends` to any def that has `exclude` but that won't actually exclude the props if they are already merged from a parent, which is the case for this issue.
  - Possibly use `interfaces` instead of type alias intersections. This might work and solve above case if I add explicit `extends` to all child objects that are currently merged (should be doable during `reduceDefTree` with `resolveDefsAtPath`) and if we're sure *all* object props will *always* be optional, otherwise there will be "incompatible extends" errors out the wazoo.
- Validate that inferred types are all correct
- Various `animation` props are generated, sometimes inferred as `boolean` from default `false`, but I think they should all be the shape `Animation = { duration: number }`?
- Lots of `...Styles` objects are generated with a few props like `{lineWidth, lineColor}` but look incomplete compared to descriptions. What are these shapes supposed to be?
- Lots of generic `Array`, `Object` and `Function` types, see if we can improve them.
- Maybe apply some logic to inline small objects, like params. For example: `if pathDepth(obj) >= 3 && numProps(obj) <= 3 && !othersExtend(obj) then inline`
- Resolve `Mixed` type
- Emit `context` as `this: T` in function signatures (requires actually having function signatures)
- Cleanup comment output and emit useful jsdoc annotations
- Reverse the emit order? (Top leve objects at top, low level objects at bottom.)
- Generate TS tests from samples
- Make `schema.d.ts` props optional and fix code for null strictness
- Add unit tests for the generator code
- Organize, cleanup and document code

# Questions
- What does `memberof: "yaxis"` in `tooltipValueFormat` doclet mean? 
- One of the `context` values is `PlotLineOrBand` but I don't see that in the classes docs, is this a sub-class of `Series`?
- `plotOptions.series.states` has doclet type name `"plotOptions.series.states"` -- does that mean something special?