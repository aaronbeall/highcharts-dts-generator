// Type definitions for Highcharts 6.0.4 (HEAD commit eecc41a on Fri Dec 15 2017 13:52:03 GMT+0100 (W. Europe Standard Time))
// Project: http://www.highcharts.com/
// Definitions generated from https://api.highcharts.com/highcharts/tree.json on Tue Dec 19 2017 22:03:55 GMT-0500 (EST)
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

declare namespace Highcharts {
  // plotOptions.ad.params
  type PlotOptionsAdParams = {
    volumeSeriesID: string; // Default: "volume"
  };
  // plotOptions.ad
  type PlotOptionsAd = PlotOptionsSma & {
    params: PlotOptionsAdParams;
  };
  // plotOptions.atr
  type PlotOptionsAtr = PlotOptionsSma;
  // plotOptions.bb.params
  type PlotOptionsBbParams = {
    standardDeviation: number; // Default: 2
  };
  // plotOptions.bb.bottomLine.styles
  type PlotOptionsBbBottomLineStyles = {
    lineColor: string;
    lineWidth: number; // Default: 1
  };
  // plotOptions.bb.bottomLine
  type PlotOptionsBbBottomLine = {
    styles: PlotOptionsBbBottomLineStyles;
  };
  // plotOptions.bb.topLine
  type PlotOptionsBbTopLine = PlotOptionsBbBottomLine;
  // plotOptions.bb
  type PlotOptionsBb = PlotOptionsSma & {
    bottomLine: PlotOptionsBbBottomLine;
    params: PlotOptionsBbParams;
    topLine: PlotOptionsBbTopLine;
  };
  // plotOptions.cci
  type PlotOptionsCci = PlotOptionsSma;
  // plotOptions.cmf.params
  type PlotOptionsCmfParams = {
    volumeSeriesID: string; // Default: "volume"
  };
  // plotOptions.cmf
  /** Exclude: animationLimit */
  type PlotOptionsCmf = PlotOptionsSma & {
    params: PlotOptionsCmfParams;
  };
  // plotOptions.ema
  type PlotOptionsEma = PlotOptionsSma;
  // plotOptions.ikh.params
  type PlotOptionsIkhParams = {
    periodSenkouSpanB: number; // Default: 52
    periodTenkan: number; // Default: 9
  };
  // plotOptions.ikh.tenkanLine.styles
  type PlotOptionsIkhTenkanLineStyles = {
    lineColor: number;
    lineWidth: number; // Default: 1
  };
  // plotOptions.ikh.tenkanLine
  type PlotOptionsIkhTenkanLine = {
    styles: PlotOptionsIkhTenkanLineStyles;
  };
  // plotOptions.ikh.kijunLine.styles
  type PlotOptionsIkhKijunLineStyles = {
    lineColor: number;
    lineWidth: number; // Default: 1
  };
  // plotOptions.ikh.kijunLine
  type PlotOptionsIkhKijunLine = {
    styles: PlotOptionsIkhKijunLineStyles;
  };
  // plotOptions.ikh.chikouLine.styles
  type PlotOptionsIkhChikouLineStyles = {
    lineColor: number;
    lineWidth: number; // Default: 1
  };
  // plotOptions.ikh.chikouLine
  type PlotOptionsIkhChikouLine = {
    styles: PlotOptionsIkhChikouLineStyles;
  };
  // plotOptions.ikh.senkouSpanA.styles
  type PlotOptionsIkhSenkouSpanAStyles = {
    lineColor: number;
    lineWidth: number; // Default: 1
  };
  // plotOptions.ikh.senkouSpanA
  type PlotOptionsIkhSenkouSpanA = {
    styles: PlotOptionsIkhSenkouSpanAStyles;
  };
  // plotOptions.ikh.senkouSpanB.styles
  type PlotOptionsIkhSenkouSpanBStyles = {
    lineColor: number;
    lineWidth: number; // Default: 1
  };
  // plotOptions.ikh.senkouSpanB
  type PlotOptionsIkhSenkouSpanB = {
    styles: PlotOptionsIkhSenkouSpanBStyles;
  };
  // plotOptions.ikh.senkouSpan.styles
  type PlotOptionsIkhSenkouSpanStyles = {
    fill: number; // Default: "rgba(255, 0, 0, 0.5)"
  };
  // plotOptions.ikh.senkouSpan
  type PlotOptionsIkhSenkouSpan = {
    styles: PlotOptionsIkhSenkouSpanStyles;
  };
  // plotOptions.ikh
  /** Exclude: allAreas,colorAxis,compare,compareBase,joinBy,keys,stacking,showInNavigator,navigatorOptions,pointInterval,pointIntervalUnit,pointPlacement,pointRange,pointStart */
  type PlotOptionsIkh = PlotOptionsSma & {
    chikouLine: PlotOptionsIkhChikouLine;
    kijunLine: PlotOptionsIkhKijunLine;
    params: PlotOptionsIkhParams;
    senkouSpan: PlotOptionsIkhSenkouSpan;
    senkouSpanA: PlotOptionsIkhSenkouSpanA;
    senkouSpanB: PlotOptionsIkhSenkouSpanB;
    tenkanLine: PlotOptionsIkhTenkanLine;
  };
  // plotOptions.sma.params
  type PlotOptionsSmaParams = {
    index: number; // Default: 0
    period: number; // Default: 14
  };
  // plotOptions.sma
  /** Exclude: allAreas,colorAxis,compare,compareBase,joinBy,keys,stacking,showInNavigator,navigatorOptions,pointInterval,pointIntervalUnit,pointPlacement,pointRange,pointStart,joinBy */
  type PlotOptionsSma = PlotOptionsLine & {
    name: string; // Default: "SMA (14)"
    params: PlotOptionsSmaParams;
  };
  // plotOptions.macd.params
  type PlotOptionsMacdParams = {
    longPeriod: number; // Default: 26
    shortPeriod: number; // Default: 12
    signalPeriod: number; // Default: 9
  };
  // plotOptions.macd.signalLine.styles
  type PlotOptionsMacdSignalLineStyles = {
    lineColor: number;
    lineWidth: number; // Default: 1
  };
  // plotOptions.macd.signalLine
  type PlotOptionsMacdSignalLine = {
    styles: PlotOptionsMacdSignalLineStyles;
  };
  // plotOptions.macd.macdLine.styles
  type PlotOptionsMacdMacdLineStyles = {
    lineColor: number;
    lineWidth: number; // Default: 1
  };
  // plotOptions.macd.macdLine
  type PlotOptionsMacdMacdLine = {
    styles: PlotOptionsMacdMacdLineStyles;
  };
  // plotOptions.macd
  type PlotOptionsMacd = PlotOptionsSma & {
    groupPadding: number; // Default: 0.1
    macdLine: PlotOptionsMacdMacdLine;
    minPointLength: number; // Default: 0
    params: PlotOptionsMacdParams;
    pointPadding: number; // Default: 0.1
    signalLine: PlotOptionsMacdSignalLine;
  };
  // plotOptions.mfi.params
  /** Exclude: index */
  type PlotOptionsMfiParams = {
    decimals: number; // Default: 4
    volumeSeriesID: string; // Default: "volume"
  };
  // plotOptions.mfi
  type PlotOptionsMfi = PlotOptionsSma & {
    params: PlotOptionsMfiParams; // Exclude: index
  };
  // plotOptions.momentum
  type PlotOptionsMomentum = PlotOptionsSma;
  // plotOptions.pivotpoints.params
  /** Exclude: index */
  type PlotOptionsPivotpointsParams = {
    algorithm: string; // Default: "standard"
  };
  // plotOptions.pivotpoints
  type PlotOptionsPivotpoints = PlotOptionsSma & {
    params: PlotOptionsPivotpointsParams; // Exclude: index
  };
  // plotOptions.priceenvelopes.params
  type PlotOptionsPriceenvelopesParams = {
    bottomBand: number; // Default: 0.1
    topBand: number; // Default: 0.1
  };
  // plotOptions.priceenvelopes.bottomLine.styles
  type PlotOptionsPriceenvelopesBottomLineStyles = {
    lineColor: string;
    lineWidth: number; // Default: 1
  };
  // plotOptions.priceenvelopes.bottomLine
  type PlotOptionsPriceenvelopesBottomLine = {
    styles: PlotOptionsPriceenvelopesBottomLineStyles;
  };
  // plotOptions.priceenvelopes.topLine
  type PlotOptionsPriceenvelopesTopLine = PlotOptionsPriceenvelopesBottomLine;
  // plotOptions.priceenvelopes
  type PlotOptionsPriceenvelopes = PlotOptionsSma & {
    bottomLine: PlotOptionsPriceenvelopesBottomLine;
    params: PlotOptionsPriceenvelopesParams;
    topLine: PlotOptionsPriceenvelopesTopLine;
  };
  // plotOptions.psar.params
  /** Exclude: index,period */
  type PlotOptionsPsarParams = {
    decimals: number; // Default: 4
    increment: number; // Default: 0.02
    initialAccelerationFactor: number; // Default: 0.02 // Exclude: period
    maxAccelerationFactor: number; // Default: 0.2
  };
  // plotOptions.psar
  type PlotOptionsPsar = PlotOptionsSma & {
    params: PlotOptionsPsarParams; // Exclude: index,period
  };
  // plotOptions.roc
  type PlotOptionsRoc = PlotOptionsSma;
  // plotOptions.rsi.params
  /** Exclude: index */
  type PlotOptionsRsiParams = {
    decimals: number; // Default: 4
  };
  // plotOptions.rsi
  type PlotOptionsRsi = PlotOptionsSma & {
    params: PlotOptionsRsiParams; // Exclude: index
  };
  // plotOptions.stochastic.params
  /** Exclude: index,period */
  type PlotOptionsStochasticParams = {
    periods: any[]; // Default: "[14, 3]"
  };
  // plotOptions.stochastic.smoothedLine.styles
  type PlotOptionsStochasticSmoothedLineStyles = {
    lineColor: string;
    lineWidth: number; // Default: 1
  };
  // plotOptions.stochastic.smoothedLine
  type PlotOptionsStochasticSmoothedLine = {
    styles: PlotOptionsStochasticSmoothedLineStyles;
  };
  // plotOptions.stochastic
  type PlotOptionsStochastic = PlotOptionsSma & {
    params: PlotOptionsStochasticParams; // Exclude: index,period
    smoothedLine: PlotOptionsStochasticSmoothedLine;
  };
  // plotOptions.vbp.params
  /** Exclude: index,period */
  type PlotOptionsVbpParams = {
    ranges: number; // Default: 12
    volumeSeriesID: string; // Default: "volume"
  };
  // plotOptions.vbp.zoneLines.styles
  type PlotOptionsVbpZoneLinesStyles = {
    color: Color; // Default: "#0A9AC9"
    dashStyle: string; // Default: "LongDash"
    lineWidth: number; // Default: 1
  };
  // plotOptions.vbp.zoneLines
  type PlotOptionsVbpZoneLines = {
    enabled: boolean; // Default: true
    styles: PlotOptionsVbpZoneLinesStyles;
  };
  // plotOptions.vbp.volumeDivision.styles
  type PlotOptionsVbpVolumeDivisionStyles = {
    negativeColor: Color; // Default: "rgba(244, 91, 91, 0.8)"
    positiveColor: Color; // Default: "rgba(144, 237, 125, 0.8)"
  };
  // plotOptions.vbp.volumeDivision
  type PlotOptionsVbpVolumeDivision = {
    enabled: boolean; // Default: true
    styles: PlotOptionsVbpVolumeDivisionStyles;
  };
  // plotOptions.vbp.dataLabels.style
  type PlotOptionsVbpDataLabelsStyle = {
    fontSize: string; // Default: "7px"
  };
  // plotOptions.vbp.dataLabels
  type PlotOptionsVbpDataLabels = {
    style: PlotOptionsVbpDataLabelsStyle;
  };
  // plotOptions.vbp
  type PlotOptionsVbp = PlotOptionsSma & {
    crisp: boolean; // Default: true
    dataLabels: PlotOptionsVbpDataLabels;
    params: PlotOptionsVbpParams; // Exclude: index,period
    pointPadding: number; // Default: 0
    volumeDivision: PlotOptionsVbpVolumeDivision;
    zoneLines: PlotOptionsVbpZoneLines;
  };
  // plotOptions.vwap.params
  /** Exclude: index */
  type PlotOptionsVwapParams = {
    volumeSeriesID: string; // Default: "volume"
  };
  // plotOptions.vwap
  type PlotOptionsVwap = PlotOptionsSma & {
    params: PlotOptionsVwapParams; // Exclude: index
  };
  // plotOptions.wma
  type PlotOptionsWma = PlotOptionsSma;
  // plotOptions.zigzag.params
  /** Exclude: index,period */
  type PlotOptionsZigzagParams = {
    deviation: number; // Default: 1
    highIndex: number; // Default: 1
    lowIndex: number; // Default: 2
  };
  // plotOptions.zigzag
  type PlotOptionsZigzag = PlotOptionsSma & {
    params: PlotOptionsZigzagParams; // Exclude: index,period
  };
  // plotOptions.bellcurve
  /** Exclude: boostThreshold,connectNulls,stacking,pointInterval,pointIntervalUnit */
  type PlotOptionsBellcurve = PlotOptionsAreaspline & {
    intervals: number; // Default: 3
    pointsInInterval: number; // Default: 3
  };
  // plotOptions.series.label.style
  type PlotOptionsSeriesLabelStyle = {
    fontWeight: string; // Default: "bold"
  };
  // plotOptions.series.label
  type PlotOptionsSeriesLabel = {
    boxesToAvoid: object[];
    connectorAllowed: boolean; // Default: true
    connectorNeighbourDistance: number; // Default: 24
    enabled: boolean; // Default: true
    maxFontSize: number;
    minFontSize: number;
    onArea: boolean;
    style: PlotOptionsSeriesLabelStyle;
  };
  // plotOptions.series.dataGrouping
  type PlotOptionsSeriesDataGrouping = {
    approximation: Function | "average" | "averages" | "open" | "high" | "low" | "close" | "sum";
    dateTimeLabelFormats: object;
    enabled: boolean; // Default: "true"
    forced: boolean; // Default: "false"
    groupPixelWidth: number; // Default: "2"
    smoothed: boolean; // Default: "false"
    units: any[];
  };
  // plotOptions.series.animation
  type PlotOptionsSeriesAnimation = {
    duration: number; // Default: 1000
  };
  // plotOptions.series.events
  type PlotOptionsSeriesEvents = {
    afterAnimate: Function;
    checkboxClick: Function;
    click: Function;
    hide: Function;
    legendItemClick: Function;
    mouseOut: Function;
    mouseOver: Function;
    show: Function;
  };
  // plotOptions.series.marker.states.hover.animation
  type PlotOptionsSeriesMarkerStatesHoverAnimation = {
    duration: number; // Default: 50
  };
  // plotOptions.series.marker.states.hover
  type PlotOptionsSeriesMarkerStatesHover = {
    animation: PlotOptionsSeriesMarkerStatesHoverAnimation;
    enabled: boolean; // Default: true
    fillColor: Color; // Default: "null"
    lineColor: Color; // Default: "#ffffff"
    lineWidth: number; // Default: "0"
    lineWidthPlus: number; // Default: 1
    radius: number;
    radiusPlus: number; // Default: 2
  };
  // plotOptions.series.marker.states.select
  type PlotOptionsSeriesMarkerStatesSelect = {
    enabled: boolean; // Default: "true"
    fillColor: Color; // Default: "#cccccc"
    lineColor: Color; // Default: "#000000"
    lineWidth: number; // Default: 2
    radius: number;
  };
  // plotOptions.series.marker.states
  type PlotOptionsSeriesMarkerStates = {
    hover: PlotOptionsSeriesMarkerStatesHover;
    select: PlotOptionsSeriesMarkerStatesSelect;
  };
  // plotOptions.series.marker
  type PlotOptionsSeriesMarker = {
    enabled: boolean;
    fillColor: Color; // Default: "null"
    height: number; // Default: "null"
    lineColor: Color; // Default: "#ffffff"
    lineWidth: number; // Default: 0
    radius: number; // Default: 4
    states: PlotOptionsSeriesMarkerStates;
    symbol: null | "circle" | "square" | "diamond" | "triangle" | "triangle-down"; // Default: "null"
    width: number; // Default: "null"
  };
  // plotOptions.series.point.events
  type PlotOptionsSeriesPointEvents = {
    click: Function;
    mouseOut: Function;
    mouseOver: Function;
    remove: Function;
    select: Function;
    unselect: Function;
    update: Function;
  };
  // plotOptions.series.point
  type PlotOptionsSeriesPoint = {
    events: PlotOptionsSeriesPointEvents;
  };
  // plotOptions.series.dataLabels.style
  type PlotOptionsSeriesDataLabelsStyle = {
    color: string; // Default: "contrast"
    fontSize: string; // Default: "11px"
    fontWeight: string; // Default: "bold"
    textOutline: string; // Default: "1px contrast"
  };
  // plotOptions.series.dataLabels.filter
  type PlotOptionsSeriesDataLabelsFilter = {
    operator: ">" | "<" | ">=" | "<=" | "==" | "===";
    property: string;
    value: Mixed;
  };
  // plotOptions.series.dataLabels
  type PlotOptionsSeriesDataLabels = {
    align: "left" | "center" | "right"; // Default: "center"
    allowOverlap: boolean; // Default: "false"
    backgroundColor: Color;
    borderColor: Color; // Default: "undefined"
    borderRadius: number; // Default: "0"
    borderWidth: number; // Default: "0"
    className: string;
    color: Color;
    crop: boolean; // Default: "true"
    defer: boolean; // Default: "true"
    enabled: boolean; // Default: "false"
    filter: PlotOptionsSeriesDataLabelsFilter;
    format: string;
    formatter: Function;
    inside: boolean;
    overflow: "justify" | "none"; // Default: "justify"
    padding: number; // Default: 5
    rotation: number; // Default: "0"
    shadow: boolean | object; // Default: "false"
    shape: string; // Default: "square"
    style: PlotOptionsSeriesDataLabelsStyle; // Default: "{"color": "contrast", "fontSize": "11px", "fontWeight": "bold", "textOutline": "1px contrast" }"
    useHTML: boolean; // Default: "false"
    verticalAlign: "top" | "middle" | "bottom"; // Default: "bottom"
    x: number; // Default: 0
    y: number; // Default: 0
    zIndex: number; // Default: "6"
  };
  // plotOptions.series.states.hover.animation
  type PlotOptionsSeriesStatesHoverAnimation = {
    duration: number; // Default: 50
  };
  // plotOptions.series.states.hover.marker
  type PlotOptionsSeriesStatesHoverMarker = PlotOptionsSeriesMarker;
  // plotOptions.series.states.hover.halo
  type PlotOptionsSeriesStatesHoverHalo = {
    attributes: object;
    opacity: number; // Default: 0.25
    size: number; // Default: 10
  };
  // plotOptions.series.states.hover
  type PlotOptionsSeriesStatesHover = {
    animation: PlotOptionsSeriesStatesHoverAnimation; // Default: "{ "duration": 50 }"
    borderColor: Color;
    borderWidth: number;
    brightness: number; // Default: "0.2"
    color: Color;
    enabled: boolean; // Default: "true"
    halo: PlotOptionsSeriesStatesHoverHalo;
    lineWidth: number; // Default: "undefined"
    lineWidthPlus: number; // Default: 1
    marker: PlotOptionsSeriesStatesHoverMarker;
  };
  // plotOptions.series.states.select
  /** Exclude: brightness */
  type PlotOptionsSeriesStatesSelect = PlotOptionsSeriesStatesHover;
  // plotOptions.series.states.normal
  type PlotOptionsSeriesStatesNormal = {
    animation: object | boolean; // Default: "true"
  };
  // plotOptions.series.states
  type PlotOptionsSeriesStates = {
    hover: PlotOptionsSeriesStatesHover;
    normal: PlotOptionsSeriesStatesNormal;
    select: PlotOptionsSeriesStatesSelect; // Exclude: brightness
  };
  // plotOptions.series.tooltip
  /** Exclude: animation,backgroundColor,borderColor,borderRadius,borderWidth,crosshairs,enabled,formatter,positioner,shadow,shared,shape,snap,style,useHTML */
  type PlotOptionsSeriesTooltip = Tooltip;
  // plotOptions.series.zones
  type PlotOptionsSeriesZones = {
    className: string;
    color: Color;
    dashStyle: string;
    fillColor: Color;
    value: number; // Default: "undefined"
  };
  // plotOptions.series
  type PlotOptionsSeries = {
    allAreas: boolean; // Default: "true"
    allowPointSelect: boolean; // Default: false
    animation: PlotOptionsSeriesAnimation;
    animationLimit: number;
    boostThreshold: number; // Default: "5000"
    borderColor: Color; // Default: "#cccccc"
    borderWidth: number; // Default: "1"
    className: string;
    color: Color;
    colorAxis: boolean; // Default: "undefined"
    colorIndex: number;
    compare: string; // Default: "undefined"
    compareBase: 0 | 100; // Default: "0"
    compareStart: boolean; // Default: "false"
    connectEnds: boolean;
    connectNulls: boolean;
    cropThreshold: number; // Default: 300
    cursor: null | "default" | "none" | "help" | "pointer" | "crosshair";
    dashStyle: "Solid" | "ShortDash" | "ShortDot" | "ShortDashDot" | "ShortDashDotDot" | "Dot" | "Dash" | "LongDash" | "DashDot" | "LongDashDot" | "LongDashDotDot"; // Default: "Solid"
    dataGrouping: PlotOptionsSeriesDataGrouping;
    dataLabels: PlotOptionsSeriesDataLabels;
    description: string; // Default: "undefined"
    enableMouseTracking: boolean; // Default: "true"
    events: PlotOptionsSeriesEvents;
    exposeElementToA11y: boolean; // Default: "undefined"
    findNearestPointBy: "x" | "xy"; // Default: "x"
    gapSize: number; // Default: "0"
    gapUnit: "relative" | "value"; // Default: "relative"
    getExtremesFromAll: boolean; // Default: "false"
    joinBy: string | string[];
    keys: string[];
    label: PlotOptionsSeriesLabel;
    lineWidth: number; // Default: 2
    linecap: "round" | "square"; // Default: "round"
    linkedTo: string;
    marker: PlotOptionsSeriesMarker;
    navigatorOptions: object; // Default: "undefined"
    negativeColor: Color; // Default: "null"
    point: PlotOptionsSeriesPoint;
    pointDescriptionFormatter: Function;
    pointInterval: number; // Default: "1"
    pointIntervalUnit: null | "day" | "month" | "year";
    pointPlacement: number | null | "on" | "between"; // Default: "null"
    pointRange: number; // Default: 0
    pointStart: number; // Default: "0"
    selected: boolean; // Default: "false"
    shadow: boolean | object; // Default: "false"
    showCheckbox: boolean; // Default: false
    showInLegend: boolean; // Default: "true"
    showInNavigator: boolean; // Default: "undefined"
    skipKeyboardNavigation: boolean;
    softThreshold: boolean; // Default: true
    stacking: null | "normal" | "percent"; // Default: "null"
    states: PlotOptionsSeriesStates;
    step: null | "left" | "center" | "right";
    stickyTracking: boolean; // Default: true
    threshold: number; // Default: "0"
    tooltip: PlotOptionsSeriesTooltip; // Exclude: animation,backgroundColor,borderColor,borderRadius,borderWidth,crosshairs,enabled,formatter,positioner,shadow,shared,shape,snap,style,useHTML
    turboThreshold: number; // Default: 1000
    visible: boolean; // Default: "true"
    zIndex: number;
    zoneAxis: string; // Default: "y"
    zones: PlotOptionsSeriesZones;
  };
  // plotOptions.bullet.targetOptions
  type PlotOptionsBulletTargetOptions = {
    borderColor: Color;
    borderWidth: number; // Default: 0
    color: Color;
    height: number; // Default: 3
    width: number | string; // Default: "140%"
  };
  // plotOptions.bullet
  /** Exclude: allAreas,boostThreshold,colorAxis,compare,compareBase */
  type PlotOptionsBullet = PlotOptionsColumn & {
    targetOptions: PlotOptionsBulletTargetOptions;
  };
  // plotOptions.funnel.states.select
  type PlotOptionsFunnelStatesSelect = {
    shadow: boolean; // Default: false
  };
  // plotOptions.funnel.states
  type PlotOptionsFunnelStates = {
    select: PlotOptionsFunnelStatesSelect;
  };
  // plotOptions.funnel
  /** Exclude: size */
  type PlotOptionsFunnel = PlotOptionsPie & {
    height: number | string; // Default: "100%"
    neckHeight: number | string; // Default: "25%"
    neckWidth: number | string; // Default: "30%"
    reversed: boolean; // Default: false
    states: PlotOptionsFunnelStates;
    width: number | string; // Default: "90%"
  };
  // plotOptions.pyramid
  type PlotOptionsPyramid = PlotOptionsFunnel;
  // plotOptions.histogram
  /** Exclude: boostThreshold,pointInterval,pointIntervalUnit,stacking */
  type PlotOptionsHistogram = PlotOptionsColumn & {
    binWidth: number;
    binsNumber: number | Function | "square-root" | "sturges" | "rice"; // Default: "square-root"
  };
  // plotOptions.pareto
  /** Exclude: allAreas,boostThreshold,borderColor,borderRadius,borderWidth,crisp,colorAxis,depth,data,edgeColor,edgeWidth,findNearestPointBy,gapSize,gapUnit,grouping,groupPadding,groupZPadding,maxPointWidth,keys,negativeColor,pointInterval,pointIntervalUnit,pointPadding,pointPlacement,pointRange,pointStart,pointWidth,shadow,step,softThreshold,stacking,threshold,zoneAxis,zones */
  type PlotOptionsPareto = PlotOptionsLine;
  // plotOptions.sankey.dataLabels
  type PlotOptionsSankeyDataLabels = {
    nodeFormat: string;
    nodeFormatter: Function;
  };
  // plotOptions.sankey.states.hover
  type PlotOptionsSankeyStatesHover = {
    linkOpacity: number; // Default: 1
  };
  // plotOptions.sankey.states
  type PlotOptionsSankeyStates = {
    hover: PlotOptionsSankeyStatesHover;
  };
  // plotOptions.sankey.tooltip
  type PlotOptionsSankeyTooltip = {
    nodeFormat: string; // Default: "{point.name}: <b>{point.sum}</b><br/>"
    nodeFormatter: Function;
  };
  // plotOptions.sankey
  /** Exclude: animationLimit,boostThreshold,borderColor,borderRadius,borderWidth,crisp,cropThreshold,depth,edgeColor,edgeWidth,findNearestPointBy,grouping,groupPadding,groupZPadding,maxPointWidth,negativeColor,pointInterval,pointIntervalUnit,pointPadding,pointPlacement,pointRange,pointStart,pointWidth,shadow,softThreshold,stacking,threshold,zoneAxis,zones */
  type PlotOptionsSankey = PlotOptionsColumn & {
    curveFactor: number; // Default: 0.33
    dataLabels: PlotOptionsSankeyDataLabels;
    linkOpacity: number; // Default: 0.5
    nodePadding: number; // Default: 10
    nodeWidth: number; // Default: 20
    states: PlotOptionsSankeyStates;
    tooltip: PlotOptionsSankeyTooltip;
  };
  // plotOptions.solidgauge
  /** Exclude: dial,pivot */
  type PlotOptionsSolidgauge = PlotOptionsGauge & {
    colorByPoint: boolean; // Default: true
    rounded: boolean; // Default: "false"
  };
  // plotOptions.streamgraph
  type PlotOptionsStreamgraph = PlotOptionsAreaspline;
  // plotOptions.sunburst.dataLabels.style
  type PlotOptionsSunburstDataLabelsStyle = {
    textOverflow: string; // Default: "ellipsis"
  };
  // plotOptions.sunburst.dataLabels
  /** Exclude: align,allowOverlap,staggerLines,step */
  type PlotOptionsSunburstDataLabels = PlotOptionsSeriesDataLabels & {
    rotationMode: "perpendicular" | "parallel"; // Default: "perpendicular"
    style: PlotOptionsSunburstDataLabelsStyle;
  };
  // plotOptions.sunburst.levels.colorVariation
  type PlotOptionsSunburstLevelsColorVariation = {
    key: string;
    to: number;
  };
  // plotOptions.sunburst.levels
  type PlotOptionsSunburstLevels = {
    borderColor: Color;
    borderDashStyle: string;
    borderWidth: number;
    color: Color;
    colorVariation: PlotOptionsSunburstLevelsColorVariation;
    dataLabels: object;
    rotation: number;
    rotationMode: string;
  };
  // plotOptions.sunburst
  /** Exclude: allAreas,center,clip,colorAxis,compare,compareBase,dataGrouping,depth,endAngle,gapSize,gapUnit,ignoreHiddenPoint,innerSize,joinBy,legendType,linecap,minSize,navigatorOptions,pointRange */
  type PlotOptionsSunburst = PlotOptionsPie & {
    allowDrillToNode: boolean; // Default: "false"
    dataLabels: PlotOptionsSunburstDataLabels; // Exclude: align,allowOverlap,staggerLines,step
    levelIsConstant: boolean; // Default: true
    levels: PlotOptionsSunburstLevels;
    rootId: string | undefined; // Default: "undefined"
  };
  // plotOptions.tilemap.states.hover.halo.attributes
  type PlotOptionsTilemapStatesHoverHaloAttributes = {
    zIndex: number; // Default: 3
  };
  // plotOptions.tilemap.states.hover.halo
  type PlotOptionsTilemapStatesHoverHalo = {
    attributes: PlotOptionsTilemapStatesHoverHaloAttributes;
    enabled: boolean; // Default: true
  };
  // plotOptions.tilemap.states.hover
  type PlotOptionsTilemapStatesHover = {
    halo: PlotOptionsTilemapStatesHoverHalo;
  };
  // plotOptions.tilemap.states
  type PlotOptionsTilemapStates = {
    hover: PlotOptionsTilemapStatesHover;
  };
  // plotOptions.tilemap.data
  type PlotOptionsTilemapData = {
    color: Color;
    x: number;
    y: number; // Default: "undefined"
  };
  // plotOptions.tilemap
  /** Exclude: joinBy,shadow,allAreas,mapData,data */
  type PlotOptionsTilemap = PlotOptionsHeatmap & {
    data: PlotOptionsTilemapData;
    states: PlotOptionsTilemapStates;
    tileShape: "hexagon" | "circle" | "diamond" | "square"; // Default: "hexagon"
  };
  // plotOptions.treemap.dataLabels
  type PlotOptionsTreemapDataLabels = PlotOptionsHeatmapDataLabels;
  // plotOptions.treemap.drillUpButton.position
  type PlotOptionsTreemapDrillUpButtonPosition = {
    align: "left" | "center" | "right"; // Default: "right"
    verticalAlign: "top" | "middle" | "bottom"; // Default: "top"
    x: number; // Default: -10
    y: number; // Default: 10
  };
  // plotOptions.treemap.drillUpButton
  type PlotOptionsTreemapDrillUpButton = {
    position: PlotOptionsTreemapDrillUpButtonPosition;
  };
  // plotOptions.treemap.states.hover.halo
  type PlotOptionsTreemapStatesHoverHalo = PlotOptionsHeatmapStatesHoverHalo;
  // plotOptions.treemap.states.hover
  /** Exclude: halo */
  type PlotOptionsTreemapStatesHover = PlotOptionsHeatmapStatesHover & {
    halo: PlotOptionsTreemapStatesHoverHalo; // Default: false
    opacity: number; // Default: 0.75
    shadow: boolean; // Default: false
  };
  // plotOptions.treemap.states
  type PlotOptionsTreemapStates = PlotOptionsHeatmapStates & {
    hover: PlotOptionsTreemapStatesHover; // Exclude: halo
  };
  // plotOptions.treemap.levels.colorVariation
  type PlotOptionsTreemapLevelsColorVariation = {
    key: "brightness";
    to: number;
  };
  // plotOptions.treemap.levels
  type PlotOptionsTreemapLevels = {
    borderColor: Color;
    borderDashStyle: string;
    borderWidth: number;
    color: Color;
    colorVariation: PlotOptionsTreemapLevelsColorVariation;
    dataLabels: object; // Default: "undefined"
    layoutAlgorithm: "sliceAndDice" | "stripes" | "squarified" | "strip";
    layoutStartingDirection: "vertical" | "horizontal";
    level: number;
  };
  // plotOptions.treemap
  /** Exclude: marker */
  type PlotOptionsTreemap = PlotOptionsScatter & {
    allowDrillToNode: boolean; // Default: "false"
    alternateStartingDirection: boolean; // Default: false
    colorByPoint: boolean; // Default: "false"
    colors: Color[];
    dataLabels: PlotOptionsTreemapDataLabels;
    drillUpButton: PlotOptionsTreemapDrillUpButton;
    ignoreHiddenPoint: boolean; // Default: true
    interactByLeaf: boolean;
    layoutAlgorithm: "sliceAndDice" | "stripes" | "squarified" | "strip"; // Default: "sliceAndDice"
    layoutStartingDirection: "vertical" | "horizontal"; // Default: "vertical"
    levelIsConstant: boolean; // Default: true
    levels: PlotOptionsTreemapLevels;
    opacity: number; // Default: 0.15
    sortIndex: number;
    states: PlotOptionsTreemapStates;
  };
  // plotOptions.variablepie
  type PlotOptionsVariablepie = PlotOptionsPie & {
    maxPointSize: string | number; // Default: "100%"
    minPointSize: string | number; // Default: "10%"
    sizeBy: "area" | "radius"; // Default: "area"
    zMax: number;
    zMin: number;
  };
  // plotOptions.variwide
  /** Exclude: boostThreshold,crisp,depth,edgeColor,edgeWidth,groupZPadding */
  type PlotOptionsVariwide = PlotOptionsColumn;
  // plotOptions.vector
  /** Exclude: boostThreshold,marker,connectEnds,connectNulls,cropThreshold,dashStyle,gapSize,gapUnit,dataGrouping,linecap,shadow,stacking,step */
  type PlotOptionsVector = PlotOptionsScatter & {
    rotationOrigin: "start" | "center" | "end"; // Default: "center"
    vectorLength: number; // Default: 20
  };
  // plotOptions.windbarb
  /** Exclude: boostThreshold,marker,connectEnds,connectNulls,cropThreshold,dashStyle,gapSize,gapUnit,dataGrouping,linecap,shadow,stacking,step */
  type PlotOptionsWindbarb = PlotOptionsColumn & {
    onSeries: string | null;
    vectorLength: number; // Default: 20
    yOffset: number; // Default: -20
  };
  // plotOptions.wordcloud.animation
  type PlotOptionsWordcloudAnimation = {
    duration: number; // Default: 500
  };
  // plotOptions.wordcloud.rotation
  type PlotOptionsWordcloudRotation = {
    from: number; // Default: 0
    orientations: number; // Default: 2
    to: number; // Default: 90
  };
  // plotOptions.wordcloud.style
  type PlotOptionsWordcloudStyle = {
    fontFamily: string; // Default: "sans-serif"
    fontWeight: string; // Default: "900"
  };
  // plotOptions.wordcloud
  /** Exclude: allAreas,boostThreshold,clip,colorAxis,compare,compareBase,crisp,cropTreshold,dataGrouping,dataLabels,depth,edgeColor,findNearestPointBy,getExtremesFromAll,grouping,groupPadding,groupZPadding,joinBy,maxPointWidth,minPointLength,navigatorOptions,negativeColor,pointInterval,pointIntervalUnit,pointPadding,pointPlacement,pointRange,pointStart,pointWidth,pointStart,pointWidth,shadow,showCheckbox,showInNavigator,softThreshold,stacking,threshold,zoneAxis,zones */
  type PlotOptionsWordcloud = PlotOptionsColumn & {
    animation: PlotOptionsWordcloudAnimation;
    clip: boolean; // Default: false
    placementStrategy: string; // Default: "center"
    rotation: PlotOptionsWordcloudRotation;
    spiral: string; // Default: "rectangular"
    style: PlotOptionsWordcloudStyle; // Default: "{"fontFamily":"sans-serif", "fontWeight": "900"}"
  };
  // plotOptions.xrange.partialFill
  type PlotOptionsXrangePartialFill = {
    fill: Color;
  };
  // plotOptions.xrange.data.partialFill
  type PlotOptionsXrangeDataPartialFill = {
    amount: number;
    fill: Color;
  };
  // plotOptions.xrange.data
  type PlotOptionsXrangeData = {
    partialFill: PlotOptionsXrangeDataPartialFill;
    x2: number;
  };
  // plotOptions.xrange
  /** Exclude: boostThreshold,crisp,cropThreshold,depth,edgeColor,edgeWidth,findNearestPointBy,getExtremesFromAll,grouping,groupPadding,negativeColor,pointInterval,pointIntervalUnit,pointPlacement,pointRange,pointStart,softThreshold,stacking,threshold,data */
  type PlotOptionsXrange = PlotOptionsColumn & {
    data: PlotOptionsXrangeData;
    partialFill: PlotOptionsXrangePartialFill;
  };
  // plotOptions.area
  type PlotOptionsArea = PlotOptionsLine & {
    fillColor: Color; // Default: "null"
    fillOpacity: number;
    lineColor: Color; // Default: "null"
    negativeFillColor: Color;
    trackByArea: boolean; // Default: "false"
  };
  // plotOptions.areaspline
  /** Exclude: step */
  type PlotOptionsAreaspline = PlotOptionsArea;
  // plotOptions.bar
  type PlotOptionsBar = PlotOptionsColumn;
  // plotOptions.candlestick.states.hover
  type PlotOptionsCandlestickStatesHover = PlotOptionsColumnStatesHover;
  // plotOptions.candlestick.states
  type PlotOptionsCandlestickStates = {
    hover: PlotOptionsCandlestickStatesHover;
  };
  // plotOptions.candlestick.tooltip
  type PlotOptionsCandlestickTooltip = PlotOptionsOhlcTooltip;
  // plotOptions.candlestick
  /** Exclude: borderColor,borderRadius,borderWidth */
  type PlotOptionsCandlestick = PlotOptionsOhlc & {
    lineColor: Color; // Default: "#000000"
    states: PlotOptionsCandlestickStates;
    tooltip: PlotOptionsCandlestickTooltip;
    upLineColor: Color; // Default: "null"
  };
  // plotOptions.column.states.hover
  /** Exclude: halo,lineWidth,lineWidthPlus,marker */
  type PlotOptionsColumnStatesHover = PlotOptionsSeriesStatesHover;
  // plotOptions.column.states
  type PlotOptionsColumnStates = {
    hover: PlotOptionsColumnStatesHover; // Exclude: halo,lineWidth,lineWidthPlus,marker
  };
  // plotOptions.column.tooltip
  type PlotOptionsColumnTooltip = {
    distance: number; // Default: 6
  };
  // plotOptions.column
  /** Exclude: connectNulls,dashStyle,gapSize,gapUnit,linecap,lineWidth,marker,connectEnds,step */
  type PlotOptionsColumn = PlotOptionsLine & {
    borderRadius: number; // Default: 0
    colorByPoint: boolean; // Default: "false"
    colors: Color[];
    crisp: boolean; // Default: true
    depth: number; // Default: "25"
    edgeColor: Color;
    edgeWidth: number; // Default: "1"
    groupPadding: number; // Default: 0.2
    groupZPadding: number; // Default: "1"
    grouping: boolean; // Default: "true"
    maxPointWidth: number; // Default: "null"
    minPointLength: number; // Default: 0
    pointPadding: number; // Default: 0.1
    pointWidth: number; // Default: "null"
    states: PlotOptionsColumnStates;
    tooltip: PlotOptionsColumnTooltip;
  };
  // plotOptions.flags.tooltip
  /** Exclude: changeDecimals,valueDecimals,valuePrefix,valueSuffix */
  type PlotOptionsFlagsTooltip = PlotOptionsSeriesTooltip;
  // plotOptions.flags.states.hover
  type PlotOptionsFlagsStatesHover = PlotOptionsColumnStatesHover & {
    fillColor: string; // Default: "#ccd6eb"
    lineColor: string; // Default: "#000000"
  };
  // plotOptions.flags.states
  type PlotOptionsFlagsStates = {
    hover: PlotOptionsFlagsStatesHover;
  };
  // plotOptions.flags.style
  type PlotOptionsFlagsStyle = {
    fontSize: string; // Default: "11px"
    fontWeight: string; // Default: "bold"
  };
  // plotOptions.flags
  /** Exclude: animation,borderColor,borderRadius,borderWidth,colorByPoint,dataGrouping,pointPadding,pointWidth,turboThreshold */
  type PlotOptionsFlags = PlotOptionsColumn & {
    allowOverlapX: boolean; // Default: false
    fillColor: string; // Default: "#ffffff"
    lineColor: Color; // Default: "#000000"
    onKey: "y" | "open" | "high" | "low" | "close"; // Default: "y"
    onSeries: string; // Default: "undefined"
    shape: "flag" | "circlepin" | "squarepin"; // Default: "flag"
    stackDistance: number; // Default: 12
    states: PlotOptionsFlagsStates;
    style: PlotOptionsFlagsStyle; // Default: "{ "fontSize": "11px", "fontWeight": "bold" }"
    textAlign: "left" | "center" | "right"; // Default: "center"
    title: string; // Default: "A"
    tooltip: PlotOptionsFlagsTooltip; // Exclude: changeDecimals,valueDecimals,valuePrefix,valueSuffix
    useHTML: boolean; // Default: "false"
    y: number; // Default: -30
  };
  // plotOptions.ohlc.states.hover
  type PlotOptionsOhlcStatesHover = PlotOptionsColumnStatesHover;
  // plotOptions.ohlc.states
  type PlotOptionsOhlcStates = {
    hover: PlotOptionsOhlcStatesHover;
  };
  // plotOptions.ohlc
  /** Exclude: borderColor,borderRadius,borderWidth,crisp */
  type PlotOptionsOhlc = PlotOptionsColumn & {
    states: PlotOptionsOhlcStates;
    upColor: Color;
  };
  // plotOptions.pie.dataLabels
  /** Exclude: align,allowOverlap,staggerLines,step */
  type PlotOptionsPieDataLabels = PlotOptionsSeriesDataLabels & {
    connectorColor: string; // Default: "{point.color}"
    connectorPadding: number; // Default: "5"
    connectorWidth: number; // Default: "1"
    distance: number; // Default: 30
    softConnector: number;
  };
  // plotOptions.pie.states.hover
  type PlotOptionsPieStatesHover = PlotOptionsSeriesStatesHover & {
    shadow: boolean; // Default: false
  };
  // plotOptions.pie.states
  type PlotOptionsPieStates = {
    hover: PlotOptionsPieStatesHover;
  };
  // plotOptions.pie.point.events
  type PlotOptionsPiePointEvents = {
    legendItemClick: Function;
  };
  // plotOptions.pie.point
  type PlotOptionsPiePoint = {
    events: PlotOptionsPiePointEvents;
  };
  // plotOptions.pie
  /** Exclude: animationLimit,boostThreshold,connectEnds,connectNulls,cropThreshold,dashStyle,findNearestPointBy,getExtremesFromAll,lineWidth,marker,negativeColor,pointInterval,pointIntervalUnit,pointPlacement,pointStart,softThreshold,stacking,step,threshold,turboThreshold,zoneAxis,zones */
  type PlotOptionsPie = PlotOptionsLine & {
    center: (string | number)[]; // Default: "[null, null]"
    clip: boolean; // Default: false
    colors: Color[];
    dataLabels: PlotOptionsPieDataLabels; // Exclude: align,allowOverlap,staggerLines,step
    depth: number; // Default: "0"
    endAngle: number; // Default: "null"
    ignoreHiddenPoint: boolean; // Default: true
    innerSize: string | number; // Default: "0"
    minSize: number; // Default: "80"
    point: PlotOptionsPiePoint;
    size: string | number;
    slicedOffset: number; // Default: 10
    startAngle: number; // Default: "0"
    states: PlotOptionsPieStates;
  };
  // plotOptions.scatter
  type PlotOptionsScatter = PlotOptionsLine;
  // plotOptions.line
  type PlotOptionsLine = PlotOptionsSeries;
  // plotOptions.spline
  /** Exclude: step */
  type PlotOptionsSpline = PlotOptionsSeries;
  // plotOptions.scatter3d
  type PlotOptionsScatter3d = PlotOptionsScatter;
  // plotOptions.arearange.dataLabels
  /** Exclude: x,y */
  type PlotOptionsArearangeDataLabels = PlotOptionsSeriesDataLabels & {
    xHigh: number; // Default: 0
    xLow: number; // Default: 0
    yHigh: number; // Default: 0
    yLow: number; // Default: 0
  };
  // plotOptions.arearange
  type PlotOptionsArearange = PlotOptionsArea & {
    dataLabels: PlotOptionsArearangeDataLabels; // Exclude: x,y
  };
  // plotOptions.areasplinerange
  /** Exclude: step */
  type PlotOptionsAreasplinerange = PlotOptionsArearange;
  // plotOptions.boxplot
  type PlotOptionsBoxplot = PlotOptionsColumn & {
    fillColor: Color; // Default: "#ffffff"
    medianColor: Color; // Default: "null"
    medianWidth: number; // Default: 2
    stemColor: Color; // Default: "null"
    stemDashStyle: "Solid" | "ShortDash" | "ShortDot" | "ShortDashDot" | "ShortDashDotDot" | "Dot" | "Dash" | "LongDash" | "DashDot" | "LongDashDot" | "LongDashDotDot"; // Default: "Solid"
    stemWidth: number; // Default: "null"
    whiskerColor: Color; // Default: "null"
    whiskerLength: number | string; // Default: "50%"
    whiskerWidth: number; // Default: 2
  };
  // plotOptions.bubble.marker
  /** Exclude: enabled,height,radius,width */
  type PlotOptionsBubbleMarker = PlotOptionsSeriesMarker;
  // plotOptions.bubble
  type PlotOptionsBubble = PlotOptionsScatter & {
    displayNegative: boolean; // Default: "true"
    marker: PlotOptionsBubbleMarker; // Exclude: enabled,height,radius,width
    maxSize: string; // Default: "20%"
    minSize: string; // Default: 8
    sizeBy: "area" | "width"; // Default: "area"
    sizeByAbsoluteValue: boolean; // Default: "false"
    zMax: number; // Default: "null"
    zMin: number; // Default: "null"
    zThreshold: number; // Default: 0
  };
  // plotOptions.columnrange.dataLabels
  type PlotOptionsColumnrangeDataLabels = PlotOptionsArearangeDataLabels;
  // plotOptions.columnrange
  /** Exclude: negativeColor,stacking,softThreshold,threshold */
  type PlotOptionsColumnrange = PlotOptionsColumn & {
    dataLabels: PlotOptionsColumnrangeDataLabels;
  };
  // plotOptions.errorbar
  type PlotOptionsErrorbar = PlotOptionsBoxplot;
  // plotOptions.gauge.dataLabels
  type PlotOptionsGaugeDataLabels = PlotOptionsSeriesDataLabels;
  // plotOptions.gauge.dial
  type PlotOptionsGaugeDial = {
    backgroundColor: Color; // Default: "#000000"
    baseLength: string; // Default: "70%"
    baseWidth: number; // Default: "3"
    borderColor: Color; // Default: "#cccccc"
    borderWidth: number; // Default: "0"
    radius: string; // Default: "80%"
    rearLength: string; // Default: "10%"
    topWidth: number; // Default: "1"
  };
  // plotOptions.gauge.pivot
  type PlotOptionsGaugePivot = {
    backgroundColor: Color; // Default: "#000000"
    borderColor: Color; // Default: "#cccccc"
    borderWidth: number; // Default: "0"
    radius: number; // Default: "5"
  };
  // plotOptions.gauge
  /** Exclude: animationLimit,boostThreshold,connectEnds,connectNulls,cropThreshold,dashStyle,findNearestPointBy,getExtremesFromAll,marker,pointPlacement,softThreshold,stacking,step,threshold,turboThreshold,zoneAxis,zones */
  type PlotOptionsGauge = PlotOptionsLine & {
    dataLabels: PlotOptionsGaugeDataLabels;
    dial: PlotOptionsGaugeDial;
    overshoot: number; // Default: "0"
    pivot: PlotOptionsGaugePivot;
    wrap: boolean; // Default: "true"
  };
  // plotOptions.polygon
  /** Exclude: softThreshold,threshold */
  type PlotOptionsPolygon = PlotOptionsScatter & {
    trackByArea: boolean; // Default: true
  };
  // plotOptions.waterfall
  type PlotOptionsWaterfall = PlotOptionsColumn & {
    lineColor: Color; // Default: "#333333"
    upColor: Color;
  };
  // plotOptions.heatmap
  /** Exclude: marker,pointRange */
  type PlotOptionsHeatmap = PlotOptionsScatter & {
    colsize: number; // Default: "1"
    nullColor: Color; // Default: "#f7f7f7"
    pointPadding: number; // Default: "0"
    rowsize: number; // Default: "1"
  };
  // plotOptions.mapbubble
  type PlotOptionsMapbubble = PlotOptionsBubble;
  // plotOptions.mapline
  type PlotOptionsMapline = PlotOptionsMap & {
    fillColor: Color; // Default: "none"
  };
  // plotOptions.mappoint.dataLabels.style
  type PlotOptionsMappointDataLabelsStyle = {
    color: string; // Default: "#000000"
  };
  // plotOptions.mappoint.dataLabels
  type PlotOptionsMappointDataLabels = {
    style: PlotOptionsMappointDataLabelsStyle;
  };
  // plotOptions.mappoint
  type PlotOptionsMappoint = PlotOptionsScatter & {
    dataLabels: PlotOptionsMappointDataLabels;
  };
  // plotOptions.map
  /** Exclude: marker */
  type PlotOptionsMap = PlotOptionsScatter & {
    nullColor: Color; // Default: "#f7f7f7"
    nullInteraction: boolean; // Default: "false"
  };
  // plotOptions
  type PlotOptions = {
    ad: PlotOptionsAd;
    area: PlotOptionsArea;
    arearange: PlotOptionsArearange;
    areaspline: PlotOptionsAreaspline; // Exclude: step
    areasplinerange: PlotOptionsAreasplinerange; // Exclude: step
    atr: PlotOptionsAtr;
    bar: PlotOptionsBar;
    bb: PlotOptionsBb;
    bellcurve: PlotOptionsBellcurve; // Exclude: boostThreshold,connectNulls,stacking,pointInterval,pointIntervalUnit
    boxplot: PlotOptionsBoxplot;
    bubble: PlotOptionsBubble;
    bullet: PlotOptionsBullet; // Exclude: allAreas,boostThreshold,colorAxis,compare,compareBase
    candlestick: PlotOptionsCandlestick; // Exclude: borderColor,borderRadius,borderWidth
    cci: PlotOptionsCci;
    cmf: PlotOptionsCmf; // Exclude: animationLimit
    column: PlotOptionsColumn; // Exclude: connectNulls,dashStyle,gapSize,gapUnit,linecap,lineWidth,marker,connectEnds,step
    columnrange: PlotOptionsColumnrange; // Exclude: negativeColor,stacking,softThreshold,threshold
    ema: PlotOptionsEma;
    errorbar: PlotOptionsErrorbar;
    flags: PlotOptionsFlags; // Exclude: animation,borderColor,borderRadius,borderWidth,colorByPoint,dataGrouping,pointPadding,pointWidth,turboThreshold
    funnel: PlotOptionsFunnel; // Exclude: size
    gauge: PlotOptionsGauge; // Exclude: animationLimit,boostThreshold,connectEnds,connectNulls,cropThreshold,dashStyle,findNearestPointBy,getExtremesFromAll,marker,pointPlacement,softThreshold,stacking,step,threshold,turboThreshold,zoneAxis,zones
    heatmap: PlotOptionsHeatmap; // Exclude: marker,pointRange
    histogram: PlotOptionsHistogram; // Exclude: boostThreshold,pointInterval,pointIntervalUnit,stacking
    ikh: PlotOptionsIkh; // Exclude: allAreas,colorAxis,compare,compareBase,joinBy,keys,stacking,showInNavigator,navigatorOptions,pointInterval,pointIntervalUnit,pointPlacement,pointRange,pointStart
    line: PlotOptionsLine;
    macd: PlotOptionsMacd;
    map: PlotOptionsMap; // Exclude: marker
    mapbubble: PlotOptionsMapbubble;
    mapline: PlotOptionsMapline;
    mappoint: PlotOptionsMappoint;
    mfi: PlotOptionsMfi;
    momentum: PlotOptionsMomentum;
    ohlc: PlotOptionsOhlc; // Exclude: borderColor,borderRadius,borderWidth,crisp
    pareto: PlotOptionsPareto; // Exclude: allAreas,boostThreshold,borderColor,borderRadius,borderWidth,crisp,colorAxis,depth,data,edgeColor,edgeWidth,findNearestPointBy,gapSize,gapUnit,grouping,groupPadding,groupZPadding,maxPointWidth,keys,negativeColor,pointInterval,pointIntervalUnit,pointPadding,pointPlacement,pointRange,pointStart,pointWidth,shadow,step,softThreshold,stacking,threshold,zoneAxis,zones
    pie: PlotOptionsPie; // Exclude: animationLimit,boostThreshold,connectEnds,connectNulls,cropThreshold,dashStyle,findNearestPointBy,getExtremesFromAll,lineWidth,marker,negativeColor,pointInterval,pointIntervalUnit,pointPlacement,pointStart,softThreshold,stacking,step,threshold,turboThreshold,zoneAxis,zones
    pivotpoints: PlotOptionsPivotpoints;
    polygon: PlotOptionsPolygon; // Exclude: softThreshold,threshold
    priceenvelopes: PlotOptionsPriceenvelopes;
    psar: PlotOptionsPsar;
    pyramid: PlotOptionsPyramid;
    roc: PlotOptionsRoc;
    rsi: PlotOptionsRsi;
    sankey: PlotOptionsSankey; // Exclude: animationLimit,boostThreshold,borderColor,borderRadius,borderWidth,crisp,cropThreshold,depth,edgeColor,edgeWidth,findNearestPointBy,grouping,groupPadding,groupZPadding,maxPointWidth,negativeColor,pointInterval,pointIntervalUnit,pointPadding,pointPlacement,pointRange,pointStart,pointWidth,shadow,softThreshold,stacking,threshold,zoneAxis,zones
    scatter: PlotOptionsScatter;
    scatter3d: PlotOptionsScatter3d;
    series: PlotOptionsSeries;
    sma: PlotOptionsSma; // Exclude: allAreas,colorAxis,compare,compareBase,joinBy,keys,stacking,showInNavigator,navigatorOptions,pointInterval,pointIntervalUnit,pointPlacement,pointRange,pointStart,joinBy
    solidgauge: PlotOptionsSolidgauge; // Exclude: dial,pivot
    spline: PlotOptionsSpline; // Exclude: step
    stochastic: PlotOptionsStochastic;
    streamgraph: PlotOptionsStreamgraph;
    sunburst: PlotOptionsSunburst; // Exclude: allAreas,center,clip,colorAxis,compare,compareBase,dataGrouping,depth,endAngle,gapSize,gapUnit,ignoreHiddenPoint,innerSize,joinBy,legendType,linecap,minSize,navigatorOptions,pointRange
    tilemap: PlotOptionsTilemap; // Exclude: joinBy,shadow,allAreas,mapData,data
    treemap: PlotOptionsTreemap; // Exclude: marker
    variablepie: PlotOptionsVariablepie;
    variwide: PlotOptionsVariwide; // Exclude: boostThreshold,crisp,depth,edgeColor,edgeWidth,groupZPadding
    vbp: PlotOptionsVbp;
    vector: PlotOptionsVector; // Exclude: boostThreshold,marker,connectEnds,connectNulls,cropThreshold,dashStyle,gapSize,gapUnit,dataGrouping,linecap,shadow,stacking,step
    vwap: PlotOptionsVwap;
    waterfall: PlotOptionsWaterfall;
    windbarb: PlotOptionsWindbarb; // Exclude: boostThreshold,marker,connectEnds,connectNulls,cropThreshold,dashStyle,gapSize,gapUnit,dataGrouping,linecap,shadow,stacking,step
    wma: PlotOptionsWma;
    wordcloud: PlotOptionsWordcloud; // Exclude: allAreas,boostThreshold,clip,colorAxis,compare,compareBase,crisp,cropTreshold,dataGrouping,dataLabels,depth,edgeColor,findNearestPointBy,getExtremesFromAll,grouping,groupPadding,groupZPadding,joinBy,maxPointWidth,minPointLength,navigatorOptions,negativeColor,pointInterval,pointIntervalUnit,pointPadding,pointPlacement,pointRange,pointStart,pointWidth,pointStart,pointWidth,shadow,showCheckbox,showInNavigator,softThreshold,stacking,threshold,zoneAxis,zones
    xrange: PlotOptionsXrange; // Exclude: boostThreshold,crisp,cropThreshold,depth,edgeColor,edgeWidth,findNearestPointBy,getExtremesFromAll,grouping,groupPadding,negativeColor,pointInterval,pointIntervalUnit,pointPlacement,pointRange,pointStart,softThreshold,stacking,threshold,data
    zigzag: PlotOptionsZigzag;
  };
  // series.ad.data
  type SeriesAdData = SeriesSmaData;
  // series.ad
  /** Exclude: data,dataParser,dataURL */
  type SeriesAd = Series & PlotOptionsAd & {
    data: SeriesAdData;
  };
  // series.atr.data
  type SeriesAtrData = SeriesSmaData;
  // series.atr
  /** Exclude: data,dataParser,dataURL */
  type SeriesAtr = Series & PlotOptionsAtr & {
    data: SeriesAtrData;
  };
  // series.bb.data
  type SeriesBbData = SeriesLineData;
  // series.bb
  /** Exclude: data,dataParser,dataURL */
  type SeriesBb = Series & PlotOptionsBb & {
    data: SeriesBbData;
  };
  // series.cci.data
  type SeriesCciData = SeriesSmaData;
  // series.cci
  /** Exclude: data,dataParser,dataURL */
  type SeriesCci = Series & PlotOptionsCci & {
    data: SeriesCciData;
  };
  // series.cmf.data
  type SeriesCmfData = SeriesLineData;
  // series.cmf
  /** Exclude: data,dataParser,dataURL */
  type SeriesCmf = Series & PlotOptionsCmf & {
    data: SeriesCmfData;
  };
  // series.ema.data
  type SeriesEmaData = SeriesSmaData;
  // series.ema
  /** Exclude: data,dataParser,dataURL */
  type SeriesEma = Series & PlotOptionsEma & {
    data: SeriesEmaData;
  };
  // series.ikh.data
  type SeriesIkhData = SeriesSmaData;
  // series.ikh
  /** Exclude: data,dataParser,dataURL */
  type SeriesIkh = Series & PlotOptionsIkh & {
    data: SeriesIkhData;
  };
  // series.sma.data
  type SeriesSmaData = SeriesLineData;
  // series.sma
  /** Exclude: data,dataParser,dataURL */
  type SeriesSma = Series & PlotOptionsSma & {
    data: SeriesSmaData;
  };
  // series.macd.data
  type SeriesMacdData = SeriesSmaData;
  // series.macd
  /** Exclude: data,dataParser,dataURL */
  type SeriesMacd = Series & PlotOptionsMacd & {
    data: SeriesMacdData;
  };
  // series.mfi.data
  type SeriesMfiData = SeriesLineData;
  // series.mfi
  /** Exclude: data,dataParser,dataURL */
  type SeriesMfi = Series & PlotOptionsMfi & {
    data: SeriesMfiData;
  };
  // series.momentum.data
  type SeriesMomentumData = SeriesSmaData;
  // series.momentum
  /** Exclude: data,dataParser,dataURL */
  type SeriesMomentum = Series & PlotOptionsMomentum & {
    data: SeriesMomentumData;
  };
  // series.pivotpoints.data
  type SeriesPivotpointsData = SeriesLineData;
  // series.pivotpoints
  /** Exclude: data,dataParser,dataURL */
  type SeriesPivotpoints = Series & PlotOptionsPivotpoints & {
    data: SeriesPivotpointsData;
  };
  // series.priceenvelopes.data
  type SeriesPriceenvelopesData = SeriesLineData;
  // series.priceenvelopes
  /** Exclude: data,dataParser,dataURL */
  type SeriesPriceenvelopes = Series & PlotOptionsPriceenvelopes & {
    data: SeriesPriceenvelopesData;
  };
  // series.psar.data
  type SeriesPsarData = SeriesLineData;
  // series.psar
  /** Exclude: data,dataParser,dataURL */
  type SeriesPsar = Series & PlotOptionsPsar & {
    data: SeriesPsarData;
  };
  // series.roc.data
  type SeriesRocData = SeriesSmaData;
  // series.roc
  /** Exclude: data,dataParser,dataURL */
  type SeriesRoc = Series & PlotOptionsRoc & {
    data: SeriesRocData;
  };
  // series.rsi.data
  type SeriesRsiData = SeriesLineData;
  // series.rsi
  /** Exclude: data,dataParser,dataURL */
  type SeriesRsi = Series & PlotOptionsRsi & {
    data: SeriesRsiData;
  };
  // series.stochastic.data
  type SeriesStochasticData = SeriesLineData;
  // series.stochastic
  /** Exclude: data,dataParser,dataURL */
  type SeriesStochastic = Series & PlotOptionsStochastic & {
    data: SeriesStochasticData;
  };
  // series.vbp.data
  type SeriesVbpData = SeriesSmaData;
  // series.vbp
  /** Exclude: data,dataParser,dataURL */
  type SeriesVbp = Series & PlotOptionsVbp & {
    data: SeriesVbpData;
  };
  // series.vwap.data
  type SeriesVwapData = SeriesSmaData;
  // series.vwap
  /** Exclude: data,dataParser,dataURL */
  type SeriesVwap = Series & PlotOptionsVwap & {
    data: SeriesVwapData;
  };
  // series.wma.data
  type SeriesWmaData = SeriesSmaData;
  // series.wma
  /** Exclude: data,dataParser,dataURL */
  type SeriesWma = Series & PlotOptionsWma & {
    data: SeriesWmaData;
  };
  // series.zigzag.data
  type SeriesZigzagData = SeriesSmaData;
  // series.zigzag
  /** Exclude: data,dataParser,dataURL */
  type SeriesZigzag = Series & PlotOptionsZigzag & {
    data: SeriesZigzagData;
  };
  // series.bellcurve.data
  type SeriesBellcurveData = SeriesAreasplineData;
  // series.bellcurve
  /** Exclude: dataParser,dataURL,data */
  type SeriesBellcurve = Series & PlotOptionsBellcurve & {
    baseSeries: number | string; // Default: "undefined"
    data: SeriesBellcurveData;
  };
  // series.bullet.data.targetOptions
  type SeriesBulletDataTargetOptions = SeriesBulletTargetOptions;
  // series.bullet.data
  type SeriesBulletData = SeriesColumnData & {
    target: number;
    targetOptions: SeriesBulletDataTargetOptions;
  };
  // series.bullet
  /** Exclude: dataParser,dataURL */
  type SeriesBullet = Series & PlotOptionsBullet & {
    data: SeriesBulletData;
  };
  // series.line.data.events
  type SeriesLineDataEvents = PlotOptionsSeriesPointEvents;
  // series.line.data.marker
  type SeriesLineDataMarker = PlotOptionsSeriesMarker;
  // series.line.data
  type SeriesLineData = {
    className: string;
    color: Color; // Default: "undefined"
    colorIndex: number;
    dataLabels: object;
    description: string; // Default: "undefined"
    drilldown: string;
    events: SeriesLineDataEvents;
    id: string; // Default: "null"
    labelrank: number;
    marker: SeriesLineDataMarker;
    name: string;
    selected: boolean; // Default: "false"
    x: number;
    y: number; // Default: "null"
  };
  // series.line
  /** Exclude: dataParser,dataURL */
  type SeriesLine = Series & PlotOptionsLine & {
    data: SeriesLineData;
  };
  // series.funnel.data
  /** Exclude: sliced */
  type SeriesFunnelData = SeriesPieData;
  // series.funnel
  /** Exclude: dataParser,dataURL,stack,xAxis,yAxis */
  type SeriesFunnel = Series & PlotOptionsFunnel & {
    data: SeriesFunnelData; // Exclude: sliced
  };
  // series.pyramid.data
  /** Exclude: sliced */
  type SeriesPyramidData = SeriesPieData;
  // series.pyramid
  /** Exclude: dataParser,dataURL,stack,xAxis,yAxis */
  type SeriesPyramid = Series & PlotOptionsPyramid & {
    data: SeriesPyramidData; // Exclude: sliced
  };
  // series.histogram.data
  type SeriesHistogramData = SeriesColumnData;
  // series.histogram
  /** Exclude: dataParser,dataURL,data */
  type SeriesHistogram = Series & PlotOptionsHistogram & {
    baseSeries: number | string; // Default: "undefined"
    data: SeriesHistogramData;
  };
  // series.pareto.data
  type SeriesParetoData = SeriesColumnData;
  // series.pareto
  /** Exclude: data,dataParser,dataURL */
  type SeriesPareto = Series & PlotOptionsPareto & {
    baseSeries: number | string; // Default: "undefined"
    data: SeriesParetoData;
  };
  // series.sankey.nodes
  type SeriesSankeyNodes = {
    color: Color;
    colorIndex: number;
    id: string;
  };
  // series.sankey.data
  /** Exclude: drilldown,marker,x,y */
  type SeriesSankeyData = SeriesLineData & {
    from: string;
    outgoing: boolean; // Default: "false"
    to: string;
    weight: number;
  };
  // series.sankey
  /** Exclude: dataParser,dataURL */
  type SeriesSankey = Series & PlotOptionsSankey & {
    data: SeriesSankeyData; // Exclude: drilldown,marker,x,y
    nodes: SeriesSankeyNodes;
  };
  // series.solidgauge.data
  type SeriesSolidgaugeData = SeriesGaugeData & {
    innerRadius: number | string;
    radius: number | string;
  };
  // series.solidgauge
  /** Exclude: dataParser,dataURL,stack */
  type SeriesSolidgauge = Series & PlotOptionsSolidgauge & {
    data: SeriesSolidgaugeData;
  };
  // series.streamgraph.data
  type SeriesStreamgraphData = SeriesLineData;
  // series.streamgraph
  /** Exclude: dataParser,dataURL */
  type SeriesStreamgraph = Series & PlotOptionsStreamgraph & {
    data: SeriesStreamgraphData;
  };
  // series.sunburst.data
  /** Exclude: x,y */
  type SeriesSunburstData = SeriesTreemapData & {
    sliced: boolean; // Default: "false"
    weight: number; // Default: "undefined"
  };
  // series.sunburst
  /** Exclude: dataParser,dataURL,stack */
  type SeriesSunburst = Series & PlotOptionsSunburst & {
    data: SeriesSunburstData; // Exclude: x,y
  };
  // series.treemap.data
  /** Exclude: x,y */
  type SeriesTreemapData = SeriesHeatmapData & {
    colorValue: number; // Default: "undefined"
    parent: string; // Default: "undefined"
  };
  // series.treemap
  /** Exclude: dataParser,dataURL,stack */
  type SeriesTreemap = Series & PlotOptionsTreemap & {
    data: SeriesTreemapData; // Exclude: x,y
  };
  // series.tilemap.data
  /** Exclude: marker */
  type SeriesTilemapData = SeriesHeatmapData;
  // series.tilemap
  /** Exclude: joinBy,shadow,allAreas,mapData */
  type SeriesTilemap = Series & PlotOptionsTilemap & {
    data: SeriesTilemapData; // Exclude: marker
  };
  // series.variablepie.data
  /** Exclude: marker,x */
  type SeriesVariablepieData = SeriesPieData;
  // series.variablepie
  /** Exclude: dataParser,dataURL,stack,xAxis,yAxis */
  type SeriesVariablepie = Series & PlotOptionsVariablepie & {
    data: SeriesVariablepieData; // Exclude: marker,x
  };
  // series.variwide.data
  /** Exclude: marker */
  type SeriesVariwideData = SeriesLineData & {
    z: number;
  };
  // series.variwide
  type SeriesVariwide = Series & PlotOptionsVariwide & {
    data: SeriesVariwideData; // Exclude: marker
  };
  // series.vector.data
  type SeriesVectorData = SeriesLineData & {
    direction: number;
    length: number;
  };
  // series.vector
  /** Exclude: dataParser,dataURL */
  type SeriesVector = Series & PlotOptionsVector & {
    data: SeriesVectorData;
  };
  // series.windbarb.data
  type SeriesWindbarbData = SeriesLineData & {
    direction: number;
    value: number;
  };
  // series.windbarb
  /** Exclude: dataParser,dataURL */
  type SeriesWindbarb = Series & PlotOptionsWindbarb & {
    data: SeriesWindbarbData;
  };
  // series.wordcloud.data
  /** Exclude: drilldown,marker,x,y */
  type SeriesWordcloudData = SeriesLineData;
  // series.wordcloud
  type SeriesWordcloud = Series & PlotOptionsWordcloud & {
    data: SeriesWordcloudData; // Exclude: drilldown,marker,x,y
  };
  // series.xrange.data
  type SeriesXrangeData = SeriesLineData;
  // series.xrange
  /** Exclude: boostThreshold,crisp,cropThreshold,depth,edgeColor,edgeWidth,findNearestPointBy,getExtremesFromAll,grouping,groupPadding,negativeColor,pointInterval,pointIntervalUnit,pointPlacement,pointRange,pointStart,softThreshold,stacking,threshold,data */
  type SeriesXrange = Series & PlotOptionsXrange & {
    data: SeriesXrangeData;
  };
  // series.area.data
  type SeriesAreaData = SeriesLineData;
  // series.area
  /** Exclude: dataParser,dataURL */
  type SeriesArea = Series & PlotOptionsArea & {
    data: SeriesAreaData;
  };
  // series.areaspline.data
  type SeriesAreasplineData = SeriesLineData;
  // series.areaspline
  /** Exclude: dataParser,dataURL */
  type SeriesAreaspline = Series & PlotOptionsAreaspline & {
    data: SeriesAreasplineData;
  };
  // series.bar.data
  type SeriesBarData = SeriesColumnData;
  // series.bar
  /** Exclude: dataParser,dataURL */
  type SeriesBar = Series & PlotOptionsBar & {
    data: SeriesBarData;
  };
  // series.candlestick.data
  /** Exclude: y */
  type SeriesCandlestickData = SeriesOhlcData;
  // series.candlestick
  /** Exclude: dataParser,dataURL */
  type SeriesCandlestick = Series & PlotOptionsCandlestick & {
    data: SeriesCandlestickData; // Exclude: y
  };
  // series.column.data
  /** Exclude: marker */
  type SeriesColumnData = SeriesLineData;
  // series.column
  /** Exclude: dataParser,dataURL,marker */
  type SeriesColumn = Series & PlotOptionsColumn & {
    data: SeriesColumnData; // Exclude: marker
  };
  // series.flags.data
  /** Exclude: y,dataLabels,marker,name */
  type SeriesFlagsData = SeriesLineData & {
    fillColor: Color;
    text: string;
    title: string;
  };
  // series.flags
  /** Exclude: dataParser,dataURL */
  type SeriesFlags = Series & PlotOptionsFlags & {
    data: SeriesFlagsData; // Exclude: y,dataLabels,marker,name
  };
  // series.ohlc.data
  /** Exclude: y,marker */
  type SeriesOhlcData = SeriesArearangeData & {
    close: number;
    open: number;
  };
  // series.ohlc
  /** Exclude: dataParser,dataURL */
  type SeriesOhlc = Series & PlotOptionsOhlc & {
    data: SeriesOhlcData; // Exclude: y,marker
  };
  // series.pie.data
  /** Exclude: marker,x */
  type SeriesPieData = SeriesLineData & {
    legendIndex: number;
    sliced: boolean;
  };
  // series.pie
  /** Exclude: dataParser,dataURL,stack,xAxis,yAxis */
  type SeriesPie = Series & PlotOptionsPie & {
    data: SeriesPieData; // Exclude: marker,x
  };
  // series.scatter.data
  type SeriesScatterData = SeriesLineData;
  // series.scatter
  /** Exclude: dataParser,dataURL,stack */
  type SeriesScatter = Series & PlotOptionsScatter & {
    data: SeriesScatterData;
  };
  // series.spline.data
  type SeriesSplineData = SeriesLineData;
  // series.spline
  /** Exclude: dataParser,dataURL */
  type SeriesSpline = Series & PlotOptionsSpline & {
    data: SeriesSplineData;
  };
  // series.scatter3d.data
  type SeriesScatter3dData = SeriesScatterData & {
    z: number;
  };
  // series.scatter3d
  type SeriesScatter3d = Series & PlotOptionsScatter3d & {
    data: SeriesScatter3dData;
  };
  // series.arearange.data
  /** Exclude: marker,y */
  type SeriesArearangeData = SeriesLineData & {
    high: number;
    low: number;
  };
  // series.arearange
  /** Exclude: dataParser,dataURL,stack */
  type SeriesArearange = Series & PlotOptionsArearange & {
    data: SeriesArearangeData; // Exclude: marker,y
  };
  // series.areasplinerange.data
  type SeriesAreasplinerangeData = SeriesArearangeData;
  // series.areasplinerange
  /** Exclude: dataParser,dataURL,stack */
  type SeriesAreasplinerange = Series & PlotOptionsAreasplinerange & {
    data: SeriesAreasplinerangeData;
  };
  // series.boxplot.data
  /** Exclude: marker */
  type SeriesBoxplotData = SeriesLineData & {
    high: number;
    low: number;
    median: number;
    q1: number;
    q3: number;
  };
  // series.boxplot
  /** Exclude: dataParser,dataURL,stack */
  type SeriesBoxplot = Series & PlotOptionsBoxplot & {
    data: SeriesBoxplotData; // Exclude: marker
  };
  // series.bubble.data
  /** Exclude: marker */
  type SeriesBubbleData = SeriesLineData & {
    z: number;
  };
  // series.bubble
  /** Exclude: dataParser,dataURL,stack */
  type SeriesBubble = Series & PlotOptionsBubble & {
    data: SeriesBubbleData; // Exclude: marker
  };
  // series.columnrange.data
  /** Exclude: marker */
  type SeriesColumnrangeData = SeriesArearangeData;
  // series.columnrange
  /** Exclude: dataParser,dataURL,stack */
  type SeriesColumnrange = Series & PlotOptionsColumnrange & {
    data: SeriesColumnrangeData; // Exclude: marker
  };
  // series.errorbar.data
  /** Exclude: dataLabels,drilldown,marker */
  type SeriesErrorbarData = SeriesArearangeData;
  // series.errorbar
  /** Exclude: dataParser,dataURL,stack */
  type SeriesErrorbar = Series & PlotOptionsErrorbar & {
    data: SeriesErrorbarData; // Exclude: dataLabels,drilldown,marker
  };
  // series.gauge.data
  /** Exclude: drilldown,marker,x */
  type SeriesGaugeData = SeriesLineData;
  // series.gauge
  /** Exclude: dataParser,dataURL,stack */
  type SeriesGauge = Series & PlotOptionsGauge & {
    data: SeriesGaugeData; // Exclude: drilldown,marker,x
  };
  // series.polygon.data
  type SeriesPolygonData = SeriesLineData;
  // series.polygon
  /** Exclude: dataParser,dataURL,stack */
  type SeriesPolygon = Series & PlotOptionsPolygon & {
    data: SeriesPolygonData;
  };
  // series.waterfall.data
  /** Exclude: marker */
  type SeriesWaterfallData = SeriesLineData & {
    isIntermediateSum: boolean; // Default: "false"
    isSum: boolean; // Default: "false"
  };
  // series.waterfall
  /** Exclude: dataParser,dataURL */
  type SeriesWaterfall = Series & PlotOptionsWaterfall & {
    data: SeriesWaterfallData; // Exclude: marker
  };
  // series.heatmap.data
  /** Exclude: marker */
  type SeriesHeatmapData = SeriesLineData & {
    pointPadding: number;
    value: number;
  };
  // series.heatmap
  /** Exclude: dataParser,dataURL,stack */
  type SeriesHeatmap = Series & PlotOptionsHeatmap & {
    data: SeriesHeatmapData; // Exclude: marker
  };
  // series.mapbubble.data
  /** Exclude: labelrank,middleX,middleY,path,value,x,y,lat,lon */
  type SeriesMapbubbleData = SeriesMappointData & {
    z: number;
  };
  // series.mapbubble
  /** Exclude: dataParser,dataURL */
  type SeriesMapbubble = Series & PlotOptionsMapbubble & {
    data: SeriesMapbubbleData; // Exclude: labelrank,middleX,middleY,path,value,x,y,lat,lon
  };
  // series.mapline
  /** Exclude: dataParser,dataURL */
  type SeriesMapline = Series & PlotOptionsMapline & {
    data: object[];
  };
  // series.mappoint.data
  /** Exclude: labelrank,middleX,middleY,path,value */
  type SeriesMappointData = SeriesMapData & {
    lat: number;
    lon: number;
    x: number;
    y: number;
  };
  // series.mappoint
  /** Exclude: dataParser,dataURL */
  type SeriesMappoint = Series & PlotOptionsMappoint & {
    data: SeriesMappointData; // Exclude: labelrank,middleX,middleY,path,value
  };
  // series.map.data.events
  type SeriesMapDataEvents = PlotOptionsSeriesPointEvents;
  // series.map.data
  type SeriesMapData = {
    color: Color; // Default: "undefined"
    dataLabels: object;
    drilldown: string;
    events: SeriesMapDataEvents;
    id: string;
    labelrank: number;
    middleX: number; // Default: "0.5"
    middleY: number; // Default: "0.5"
    name: string;
    path: string;
    value: number;
  };
  // series.map
  /** Exclude: dataParser,dataURL */
  type SeriesMap = Series & PlotOptionsMap & {
    data: SeriesMapData;
  };
  // series
  type Series = {
    ad: SeriesAd; // Exclude: data,dataParser,dataURL
    area: SeriesArea; // Exclude: dataParser,dataURL
    arearange: SeriesArearange; // Exclude: dataParser,dataURL,stack
    areaspline: SeriesAreaspline; // Exclude: dataParser,dataURL
    areasplinerange: SeriesAreasplinerange; // Exclude: dataParser,dataURL,stack
    atr: SeriesAtr; // Exclude: data,dataParser,dataURL
    bar: SeriesBar; // Exclude: dataParser,dataURL
    bb: SeriesBb; // Exclude: data,dataParser,dataURL
    bellcurve: SeriesBellcurve; // Exclude: dataParser,dataURL,data
    boxplot: SeriesBoxplot; // Exclude: dataParser,dataURL,stack
    bubble: SeriesBubble; // Exclude: dataParser,dataURL,stack
    bullet: SeriesBullet; // Exclude: dataParser,dataURL
    candlestick: SeriesCandlestick; // Exclude: dataParser,dataURL
    cci: SeriesCci; // Exclude: data,dataParser,dataURL
    cmf: SeriesCmf; // Exclude: data,dataParser,dataURL
    column: SeriesColumn; // Exclude: dataParser,dataURL,marker
    columnrange: SeriesColumnrange; // Exclude: dataParser,dataURL,stack
    ema: SeriesEma; // Exclude: data,dataParser,dataURL
    errorbar: SeriesErrorbar; // Exclude: dataParser,dataURL,stack
    flags: SeriesFlags; // Exclude: dataParser,dataURL
    funnel: SeriesFunnel; // Exclude: dataParser,dataURL,stack,xAxis,yAxis
    gauge: SeriesGauge; // Exclude: dataParser,dataURL,stack
    heatmap: SeriesHeatmap; // Exclude: dataParser,dataURL,stack
    histogram: SeriesHistogram; // Exclude: dataParser,dataURL,data
    id: string;
    ikh: SeriesIkh; // Exclude: data,dataParser,dataURL
    index: number; // Default: "undefined"
    legendIndex: number;
    line: SeriesLine; // Exclude: dataParser,dataURL
    macd: SeriesMacd; // Exclude: data,dataParser,dataURL
    map: SeriesMap; // Exclude: dataParser,dataURL
    mapData: object[];
    mapbubble: SeriesMapbubble; // Exclude: dataParser,dataURL
    mapline: SeriesMapline; // Exclude: dataParser,dataURL
    mappoint: SeriesMappoint; // Exclude: dataParser,dataURL
    mfi: SeriesMfi; // Exclude: data,dataParser,dataURL
    momentum: SeriesMomentum; // Exclude: data,dataParser,dataURL
    name: string;
    ohlc: SeriesOhlc; // Exclude: dataParser,dataURL
    pareto: SeriesPareto; // Exclude: data,dataParser,dataURL
    pie: SeriesPie; // Exclude: dataParser,dataURL,stack,xAxis,yAxis
    pivotpoints: SeriesPivotpoints; // Exclude: data,dataParser,dataURL
    polygon: SeriesPolygon; // Exclude: dataParser,dataURL,stack
    priceenvelopes: SeriesPriceenvelopes; // Exclude: data,dataParser,dataURL
    psar: SeriesPsar; // Exclude: data,dataParser,dataURL
    pyramid: SeriesPyramid; // Exclude: dataParser,dataURL,stack,xAxis,yAxis
    roc: SeriesRoc; // Exclude: data,dataParser,dataURL
    rsi: SeriesRsi; // Exclude: data,dataParser,dataURL
    sankey: SeriesSankey; // Exclude: dataParser,dataURL
    scatter: SeriesScatter; // Exclude: dataParser,dataURL,stack
    scatter3d: SeriesScatter3d;
    sma: SeriesSma; // Exclude: data,dataParser,dataURL
    solidgauge: SeriesSolidgauge; // Exclude: dataParser,dataURL,stack
    spline: SeriesSpline; // Exclude: dataParser,dataURL
    stack: string; // Default: "null"
    stochastic: SeriesStochastic; // Exclude: data,dataParser,dataURL
    streamgraph: SeriesStreamgraph; // Exclude: dataParser,dataURL
    sunburst: SeriesSunburst; // Exclude: dataParser,dataURL,stack
    tilemap: SeriesTilemap; // Exclude: joinBy,shadow,allAreas,mapData
    treemap: SeriesTreemap; // Exclude: dataParser,dataURL,stack
    type: null | "line" | "spline" | "column" | "area" | "areaspline" | "pie" | "arearange" | "areasplinerange" | "boxplot" | "bubble" | "columnrange" | "errorbar" | "funnel" | "gauge" | "scatter" | "waterfall";
    variablepie: SeriesVariablepie; // Exclude: dataParser,dataURL,stack,xAxis,yAxis
    variwide: SeriesVariwide;
    vbp: SeriesVbp; // Exclude: data,dataParser,dataURL
    vector: SeriesVector; // Exclude: dataParser,dataURL
    vwap: SeriesVwap; // Exclude: data,dataParser,dataURL
    waterfall: SeriesWaterfall; // Exclude: dataParser,dataURL
    windbarb: SeriesWindbarb; // Exclude: dataParser,dataURL
    wma: SeriesWma; // Exclude: data,dataParser,dataURL
    wordcloud: SeriesWordcloud;
    xAxis: number | string; // Default: "0"
    xrange: SeriesXrange; // Exclude: boostThreshold,crisp,cropThreshold,depth,edgeColor,edgeWidth,findNearestPointBy,getExtremesFromAll,grouping,groupPadding,negativeColor,pointInterval,pointIntervalUnit,pointPlacement,pointRange,pointStart,softThreshold,stacking,threshold,data
    yAxis: number | string; // Default: "0"
    zIndex: number;
    zigzag: SeriesZigzag; // Exclude: data,dataParser,dataURL
  };
  // defs
  type Defs = {
    markers: object;
  };
  // annotations.labelOptions.style
  type AnnotationsLabelOptionsStyle = {
    color: string; // Default: "contrast"
    fontSize: string; // Default: "11px"
    fontWeight: string; // Default: "normal"
  };
  // annotations.labelOptions
  type AnnotationsLabelOptions = {
    align: "left" | "center" | "right"; // Default: "center"
    allowOverlap: boolean; // Default: false
    backgroundColor: Color; // Default: "rgba(0, 0, 0, 0.75)"
    borderColor: Color; // Default: "black"
    borderRadius: number; // Default: 1
    borderWidth: number; // Default: 1
    crop: boolean; // Default: false
    distance: number; // Default: "undefined"
    format: string; // Default: "undefined"
    formatter: Function; // Default: "function () {\n	return defined(this.y) ? this.y : 'Annotation label';\n}"
    overflow: "none" | "justify"; // Default: "justify"
    padding: number; // Default: 5
    shadow: boolean | object; // Default: false
    shape: string; // Default: "callout"
    style: AnnotationsLabelOptionsStyle;
    text: string; // Default: "undefined"
    useHTML: boolean; // Default: false
    verticalAlign: "top" | "middle" | "bottom"; // Default: "bottom"
    x: number; // Default: 0
    y: number; // Default: -16
  };
  // annotations.shapeOptions
  type AnnotationsShapeOptions = {
    fill: Color; // Default: "rgba(0, 0, 0, 0.75)"
    height: number;
    r: number; // Default: 0
    stroke: Color; // Default: "rgba(0, 0, 0, 0.75)"
    strokeWidth: number; // Default: 1
    type: string; // Default: "'rect'"
    width: number;
  };
  // annotations.labels.point
  type AnnotationsLabelsPoint = {
    x: number;
    xAxis: number | string;
    y: number;
    yAxis: number | string;
  };
  // annotations.labels
  type AnnotationsLabels = AnnotationsLabelOptions & {
    point: AnnotationsLabelsPoint;
  };
  // annotations.shapes.point
  type AnnotationsShapesPoint = AnnotationsLabelsPoint;
  // annotations.shapes
  type AnnotationsShapes = AnnotationsShapeOptions & {
    markerEnd: string;
    markerStart: string;
    point: AnnotationsShapesPoint;
    points: any[];
  };
  // annotations
  type Annotations = {
    labelOptions: AnnotationsLabelOptions;
    labels: AnnotationsLabels;
    shapeOptions: AnnotationsShapeOptions;
    shapes: AnnotationsShapes;
    visible: boolean; // Default: true
    zIndex: number; // Default: 6
  };
  // boost.debug
  type BoostDebug = {
    showSkipSummary: boolean; // Default: "false"
    timeBufferCopy: boolean; // Default: "false"
    timeKDTree: boolean; // Default: "false"
    timeRendering: boolean; // Default: "false"
    timeSeriesProcessing: boolean; // Default: "false"
    timeSetup: boolean; // Default: "false"
  };
  // boost
  type Boost = {
    allowForce: boolean; // Default: "true"
    debug: BoostDebug;
    enabled: boolean; // Default: "true"
    seriesThreshold: number; // Default: "null"
    useGPUTranslations: boolean; // Default: "false"
  };
  // data
  type Data = {
    columns: Mixed[][];
    complete: Function;
    csv: string;
    dateFormat: null | "YYYY/mm/dd" | "dd/mm/YYYY" | "mm/dd/YYYY" | "dd/mm/YYYY" | "dd/mm/YY" | "mm/dd/YY";
    decimalPoint: string; // Default: "."
    endColumn: number;
    endRow: number;
    firstRowAsNames: boolean; // Default: "true"
    googleSpreadsheetKey: string;
    googleSpreadsheetWorksheet: string;
    itemDelimiter: string;
    lineDelimiter: string; // Default: "\n"
    parseDate: Function;
    parsed: Function;
    rows: Mixed[][];
    seriesMapping: object[];
    startColumn: number; // Default: "0"
    startRow: number; // Default: "0"
    switchRowsAndColumns: boolean; // Default: "false"
    table: string | HTMLElement;
  };
  // yAxis.resize.controlledAxis
  type YAxisResizeControlledAxis = {
    next: (string | number)[]; // Default: "[]"
    prev: (string | number)[]; // Default: "[]"
  };
  // yAxis.resize
  type YAxisResize = {
    controlledAxis: YAxisResizeControlledAxis;
    cursor: string; // Default: "ns-resize"
    enabled: boolean; // Default: false
    lineColor: Color; // Default: "#cccccc"
    lineDashStyle: string; // Default: "Solid"
    lineWidth: number; // Default: 4
    x: number; // Default: 0
    y: number; // Default: 0
  };
  // yAxis.labels
  type YAxisLabels = XAxisLabels & {
    x: number; // Default: -8
  };
  // yAxis.title
  type YAxisTitle = XAxisTitle;
  // yAxis.stackLabels.style
  type YAxisStackLabelsStyle = {
    color: string; // Default: "#000000"
    fontSize: string; // Default: "11px"
    fontWeight: string; // Default: "bold"
    textOutline: string; // Default: "1px contrast"
  };
  // yAxis.stackLabels
  type YAxisStackLabels = {
    align: "left" | "center" | "right";
    allowOverlap: boolean; // Default: false
    enabled: boolean; // Default: false
    format: string; // Default: "{total}"
    formatter: Function; // Default: "function() { return this.total; }"
    rotation: number; // Default: "0"
    style: YAxisStackLabelsStyle;
    textAlign: "left" | "center" | "right";
    useHTML: boolean; // Default: "false"
    verticalAlign: "top" | "middle" | "bottom";
    x: number;
    y: number;
  };
  // yAxis.plotBands
  type YAxisPlotBands = XAxisPlotBands & {
    innerRadius: number | string; // Default: "null"
    outerRadius: number | string; // Default: "100%"
    thickness: number | string; // Default: "10"
  };
  // yAxis.plotLines
  type YAxisPlotLines = XAxisPlotLines;
  // yAxis.scrollbar
  /** Exclude: height */
  type YAxisScrollbar = Scrollbar & {
    margin: number; // Default: "10"
    size: number; // Default: "14"
    zIndex: number; // Default: "3"
  };
  // yAxis
  /** Exclude: ordinal,overscroll */
  type YAxis = XAxis & {
    angle: number; // Default: "0"
    endOnTick: boolean; // Default: true
    gridLineInterpolation: "circle" | "polygon"; // Default: "null"
    height: number | string; // Default: "null"
    labels: YAxisLabels;
    lineWidth: number; // Default: 0
    maxColor: Color; // Default: "#003399"
    maxLength: string | number; // Default: "100%"
    maxPadding: number; // Default: 0.05
    minColor: Color; // Default: "#e6ebf5"
    minLength: number | string; // Default: "10%"
    minPadding: number; // Default: 0.05
    plotBands: YAxisPlotBands;
    plotLines: YAxisPlotLines;
    resize: YAxisResize;
    reversedStacks: boolean; // Default: "true"
    scrollbar: YAxisScrollbar; // Exclude: height
    stackLabels: YAxisStackLabels;
    startOnTick: boolean; // Default: true
    stops: any[][];
    tickPixelInterval: number; // Default: 72
    title: YAxisTitle;
    tooltipValueFormat: string; // Default: "undefined"
    top: number | string; // Default: "null"
  };
  // lang
  type Lang = {
    contextButtonTitle: string; // Default: "Chart context menu"
    decimalPoint: string; // Default: "."
    downloadCSV: string; // Default: "Download CSV"
    downloadJPEG: string; // Default: "Download JPEG image"
    downloadPDF: string; // Default: "Download PDF document"
    downloadPNG: string; // Default: "Download PNG image"
    downloadSVG: string; // Default: "Download SVG vector image"
    downloadXLS: string; // Default: "Download XLS"
    drillUpText: string; // Default: "Back to {series.name}"
    invalidDate: string;
    loading: string; // Default: "Loading..."
    months: string[]; // Default: "[ "January" , "February" , "March" , "April" , "May" ,\n         "June" , "July" , "August" , "September" , "October" ,\n         "November" , "December"]"
    noData: string; // Default: "No data to display"
    numericSymbolMagnitude: number; // Default: "1000"
    numericSymbols: string[]; // Default: "[ "k" , "M" , "G" , "T" , "P" , "E"]"
    printChart: string; // Default: "Print chart"
    rangeSelectorFrom: string; // Default: "From"
    rangeSelectorTo: string; // Default: "To"
    rangeSelectorZoom: string; // Default: "Zoom"
    resetZoom: string; // Default: "Reset zoom"
    resetZoomTitle: string; // Default: "Reset zoom level 1:1"
    shortMonths: string[]; // Default: "[ "Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" ,\n         "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"]"
    shortWeekdays: string[];
    thousandsSep: string; // Default: " "
    viewData: string; // Default: "View data table"
    weekdays: string[]; // Default: "["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",\n         "Friday", "Saturday"]"
    zoomIn: string; // Default: "Zoom in"
    zoomOut: string; // Default: "Zoom out"
  };
  // drilldown.activeAxisLabelStyle
  type DrilldownActiveAxisLabelStyle = {
    color: string; // Default: "#003399"
    cursor: string; // Default: "pointer"
    fontWeight: string; // Default: "bold"
    textDecoration: string; // Default: "underline"
  };
  // drilldown.activeDataLabelStyle
  type DrilldownActiveDataLabelStyle = {
    color: string; // Default: "#003399"
    cursor: string; // Default: "pointer"
    fontWeight: string; // Default: "bold"
    textDecoration: string; // Default: "underline"
  };
  // drilldown.animation
  type DrilldownAnimation = {
    duration: number; // Default: 500
  };
  // drilldown.drillUpButton.position
  type DrilldownDrillUpButtonPosition = {
    align: string; // Default: "right"
    verticalAlign: "top" | "middle" | "bottom"; // Default: "top"
    x: number; // Default: -10
    y: number; // Default: 10
  };
  // drilldown.drillUpButton
  type DrilldownDrillUpButton = {
    position: DrilldownDrillUpButtonPosition;
    relativeTo: "plotBox" | "spacingBox"; // Default: "plotBox"
    theme: object;
  };
  // drilldown
  type Drilldown = {
    activeAxisLabelStyle: DrilldownActiveAxisLabelStyle; // Default: "{ "cursor": "pointer", "color": "#003399", "fontWeight": "bold", "textDecoration": "underline" }"
    activeDataLabelStyle: DrilldownActiveDataLabelStyle; // Default: "{ "cursor": "pointer", "color": "#003399", "fontWeight": "bold", "textDecoration": "underline" }"
    allowPointDrilldown: boolean; // Default: "true"
    animation: DrilldownAnimation;
    drillUpButton: DrilldownDrillUpButton;
    series: object[];
  };
  // chart.events
  type ChartEvents = {
    addSeries: Function;
    afterPrint: Function;
    beforePrint: Function;
    click: Function;
    drilldown: Function;
    drillup: Function;
    drillupall: Function;
    load: Function;
    redraw: Function;
    render: Function;
    selection: Function;
  };
  // chart.parallelAxes.title
  /** Exclude: align,enabled,margin,offset,position3d,reserveSpace,rotation,skew3d,style,text,useHTML,x,y */
  type ChartParallelAxesTitle = XAxisLabels;
  // chart.parallelAxes.labels
  type ChartParallelAxesLabels = {
    x: number; // Default: 0
  };
  // chart.parallelAxes
  /** Exclude: alternateGridColor,breaks,id,gridLineColor,gridLineDashStyle,gridLineWidth,minorGridLineColor,minorGridLineDashStyle,minorGridLineWidth,plotBands,plotLines,angle,gridLineInterpolation,maxColor,maxZoom,minColor,scrollbar,stackLabels,stops */
  type ChartParallelAxes = YAxis & {
    labels: ChartParallelAxesLabels;
    lineWidth: number; // Default: 1
    title: ChartParallelAxesTitle; // Exclude: align,enabled,margin,offset,position3d,reserveSpace,rotation,skew3d,style,text,useHTML,x,y
  };
  // chart.resetZoomButton.theme
  type ChartResetZoomButtonTheme = {
    zIndex: number; // Default: 6
  };
  // chart.resetZoomButton.position
  type ChartResetZoomButtonPosition = {
    align: string; // Default: "right"
    verticalAlign: "top" | "middle" | "bottom"; // Default: "top"
    x: number; // Default: -10
    y: number; // Default: 10
  };
  // chart.resetZoomButton
  type ChartResetZoomButton = {
    position: ChartResetZoomButtonPosition;
    relativeTo: "plot" | "chart"; // Default: "plot"
    theme: ChartResetZoomButtonTheme;
  };
  // chart.options3d.frame.bottom
  type ChartOptions3dFrameBottom = {
    color: Color; // Default: "transparent"
    size: number; // Default: "1"
    visible: "default" | "auto" | true | false; // Default: "default"
  };
  // chart.options3d.frame.top
  type ChartOptions3dFrameTop = ChartOptions3dFrameBottom;
  // chart.options3d.frame.left
  type ChartOptions3dFrameLeft = ChartOptions3dFrameBottom;
  // chart.options3d.frame.right
  type ChartOptions3dFrameRight = ChartOptions3dFrameBottom;
  // chart.options3d.frame.back
  type ChartOptions3dFrameBack = ChartOptions3dFrameBottom;
  // chart.options3d.frame.front
  type ChartOptions3dFrameFront = ChartOptions3dFrameBottom;
  // chart.options3d.frame.side
  type ChartOptions3dFrameSide = {
    color: Color; // Default: "transparent"
    size: number; // Default: "1"
  };
  // chart.options3d.frame
  type ChartOptions3dFrame = {
    back: ChartOptions3dFrameBack;
    bottom: ChartOptions3dFrameBottom;
    front: ChartOptions3dFrameFront;
    left: ChartOptions3dFrameLeft;
    right: ChartOptions3dFrameRight;
    side: ChartOptions3dFrameSide;
    size: number; // Default: 1
    top: ChartOptions3dFrameTop;
    visible: string; // Default: "default"
  };
  // chart.options3d
  type ChartOptions3d = {
    alpha: number; // Default: 0
    axisLabelPosition: null | "auto"; // Default: "default"
    beta: number; // Default: 0
    depth: number; // Default: 100
    enabled: boolean; // Default: false
    fitToPlot: boolean; // Default: true
    frame: ChartOptions3dFrame;
    viewDistance: number; // Default: 25
  };
  // chart
  type Chart = {
    alignTicks: boolean; // Default: "true"
    animation: boolean | object; // Default: "true"
    backgroundColor: Color; // Default: "#ffffff"
    borderColor: Color; // Default: "#335cad"
    borderRadius: number; // Default: 0
    borderWidth: number; // Default: "0"
    className: string;
    colorCount: number; // Default: 10
    defaultSeriesType: "line" | "spline" | "column" | "area" | "areaspline" | "pie"; // Default: "line"
    description: string; // Default: "undefined"
    events: ChartEvents;
    height: number | string; // Default: "null"
    ignoreHiddenSeries: boolean; // Default: true
    inverted: boolean; // Default: "false"
    map: string | object[]; // Default: "undefined"
    mapTransforms: object; // Default: "undefined"
    margin: any[];
    marginBottom: number;
    marginLeft: number; // Default: "null"
    marginRight: number; // Default: "null"
    marginTop: number; // Default: "null"
    options3d: ChartOptions3d;
    panKey: null | "alt" | "ctrl" | "meta" | "shift";
    panning: boolean;
    parallelAxes: ChartParallelAxes; // Exclude: alternateGridColor,breaks,id,gridLineColor,gridLineDashStyle,gridLineWidth,minorGridLineColor,minorGridLineDashStyle,minorGridLineWidth,plotBands,plotLines,angle,gridLineInterpolation,maxColor,maxZoom,minColor,scrollbar,stackLabels,stops
    parallelCoordinates: boolean; // Default: false
    pinchType: "x" | "y" | "xy";
    plotBackgroundColor: Color; // Default: "null"
    plotBackgroundImage: string; // Default: "null"
    plotBorderColor: Color; // Default: "#cccccc"
    plotBorderWidth: number; // Default: "0"
    plotShadow: boolean | object; // Default: "false"
    polar: boolean; // Default: "false"
    reflow: boolean; // Default: "true"
    renderTo: string | object;
    resetZoomButton: ChartResetZoomButton;
    selectionMarkerFill: Color; // Default: "rgba(51,92,173,0.25)"
    shadow: boolean | object; // Default: "false"
    showAxes: boolean;
    spacing: number[]; // Default: "[10, 10, 15, 10]"
    spacingBottom: number; // Default: "15"
    spacingLeft: number; // Default: "10"
    spacingRight: number; // Default: "10"
    spacingTop: number; // Default: "10"
    style: CSSStyleDeclaration; // Default: "{"fontFamily":"\"Lucida Grande\", \"Lucida Sans Unicode\", Verdana, Arial, Helvetica, sans-serif","fontSize":"12px"}"
    type: "line" | "spline" | "column" | "bar" | "area" | "areaspline" | "pie" | "arearange" | "areasplinerange" | "boxplot" | "bubble" | "columnrange" | "errorbar" | "funnel" | "gauge" | "heatmap" | "polygon" | "pyramid" | "scatter" | "solidgauge" | "treemap" | "waterfall";
    typeDescription: string; // Default: "undefined"
    width: number; // Default: "null"
    zoomType: null | "x" | "y" | "xy";
  };
  // exporting.csv
  type ExportingCsv = {
    columnHeaderFormatter: Function | null;
    dateFormat: string; // Default: "%Y-%m-%d %H:%M:%S"
    decimalPoint: string;
    itemDelimiter: string;
    lineDelimiter: string; // Default: "\n"
  };
  // exporting.buttons.contextButton
  type ExportingButtonsContextButton = NavigationButtonOptions & {
    _titleKey: string; // Default: "contextButtonTitle"
    className: string; // Default: "highcharts-contextbutton"
    menuClassName: string; // Default: "highcharts-contextmenu"
    menuItems: string[] | object[];
    onclick: Function;
    symbol: "circle" | "square" | "diamond" | "triangle" | "triangle-down" | "menu"; // Default: "menu"
    x: number; // Default: "-10"
  };
  // exporting.buttons
  type ExportingButtons = {
    contextButton: ExportingButtonsContextButton;
  };
  // exporting
  type Exporting = {
    allowHTML: boolean; // Default: "false"
    buttons: ExportingButtons;
    chartOptions: object; // Default: "null"
    csv: ExportingCsv;
    enabled: boolean; // Default: "true"
    error: Function; // Default: "undefined"
    fallbackToExportServer: boolean; // Default: "true"
    filename: string; // Default: "chart"
    formAttributes: object;
    libURL: string;
    menuItemDefinitions: object;
    printMaxWidth: number; // Default: 780
    scale: number; // Default: 2
    showTable: boolean; // Default: false
    sourceHeight: number;
    sourceWidth: number;
    tableCaption: boolean | string; // Default: "undefined"
    type: "image/png" | "image/jpeg" | "application/pdf" | "image/svg+xml"; // Default: "image/png"
    url: string; // Default: "https://export.highcharts.com/"
    useMultiLevelHeaders: boolean; // Default: true
    useRowspanHeaders: boolean; // Default: true
    width: number; // Default: "undefined"
  };
  // navigation.buttonOptions.theme
  type NavigationButtonOptionsTheme = {
    fill: string; // Default: "#ffffff"
    padding: number; // Default: 5
    stroke: string; // Default: "none"
  };
  // navigation.buttonOptions
  type NavigationButtonOptions = {
    align: "left" | "center" | "right"; // Default: "right"
    buttonSpacing: number; // Default: "3"
    enabled: boolean; // Default: "true"
    height: number; // Default: "22"
    symbolFill: Color; // Default: "#666666"
    symbolSize: number; // Default: "14"
    symbolStroke: Color; // Default: "#666666"
    symbolStrokeWidth: number; // Default: 3
    symbolX: number; // Default: "12.5"
    symbolY: number; // Default: "10.5"
    text: string; // Default: "null"
    theme: NavigationButtonOptionsTheme;
    verticalAlign: "top" | "middle" | "bottom"; // Default: "top"
    width: number; // Default: "24"
    y: number; // Default: "0"
  };
  // navigation.menuStyle
  type NavigationMenuStyle = {
    background: string; // Default: "#ffffff"
    border: string; // Default: "1px solid #999999"
    padding: string; // Default: "5px 0"
  };
  // navigation.menuItemStyle
  type NavigationMenuItemStyle = {
    background: string; // Default: "none"
    color: string; // Default: "#333333"
    fontSize: string;
    padding: string; // Default: "0.5em 1em"
    transition: string; // Default: "background 250ms, color 250ms"
  };
  // navigation.menuItemHoverStyle
  type NavigationMenuItemHoverStyle = {
    background: string; // Default: "#335cad"
    color: string; // Default: "#ffffff"
  };
  // navigation
  type Navigation = {
    buttonOptions: NavigationButtonOptions;
    menuItemHoverStyle: NavigationMenuItemHoverStyle; // Default: "{ "background": "#335cad", "color": "#ffffff" }"
    menuItemStyle: NavigationMenuItemStyle; // Default: "{ "padding": "0.5em 1em", "color": "#333333", "background": "none" }"
    menuStyle: NavigationMenuStyle; // Default: "{ "border": "1px solid #999999", "background": "#ffffff", "padding": "5px 0" }"
  };
  // keyboardNavigation
  type KeyboardNavigation = {
    mode: string; // Default: "normal"
  };
  // legend.keyboardNavigation
  type LegendKeyboardNavigation = {
    enabled: boolean; // Default: "true"
  };
  // legend.navigation
  type LegendNavigation = {
    activeColor: Color; // Default: "#003399"
    animation: boolean | object; // Default: "true"
    arrowSize: number; // Default: "12"
    enabled: boolean; // Default: "true"
    inactiveColor: Color; // Default: "#cccccc"
    style: CSSStyleDeclaration;
  };
  // legend.itemStyle
  type LegendItemStyle = {
    color: string; // Default: "#333333"
    fontSize: string; // Default: "12px"
    fontWeight: string; // Default: "bold"
    textOverflow: string; // Default: "ellipsis"
  };
  // legend.itemHoverStyle
  type LegendItemHoverStyle = {
    color: string; // Default: "#000000"
  };
  // legend.itemHiddenStyle
  type LegendItemHiddenStyle = {
    color: string; // Default: "#cccccc"
  };
  // legend.itemCheckboxStyle
  type LegendItemCheckboxStyle = {
    height: string; // Default: "13px"
    position: string; // Default: "absolute"
    width: string; // Default: "13px"
  };
  // legend.title.style
  type LegendTitleStyle = {
    fontWeight: string; // Default: "bold"
  };
  // legend.title
  type LegendTitle = {
    style: LegendTitleStyle; // Default: "{"fontWeight":"bold"}"
    text: string; // Default: "null"
  };
  // legend
  type Legend = {
    align: "left" | "center" | "right"; // Default: "center"
    backgroundColor: Color;
    borderColor: Color; // Default: "#999999"
    borderRadius: number; // Default: 0
    borderWidth: number; // Default: "0"
    enabled: boolean; // Default: true
    floating: boolean; // Default: "false"
    itemCheckboxStyle: LegendItemCheckboxStyle;
    itemDistance: number;
    itemHiddenStyle: LegendItemHiddenStyle; // Default: "{ "color": "#cccccc" }"
    itemHoverStyle: LegendItemHoverStyle; // Default: "{ "color": "#000000" }"
    itemMarginBottom: number; // Default: "0"
    itemMarginTop: number; // Default: "0"
    itemStyle: LegendItemStyle; // Default: "{ "color": "#333333", "cursor": "pointer", "fontSize": "12px", "fontWeight": "bold", "textOverflow": "ellipsis" }"
    itemWidth: number; // Default: "null"
    keyboardNavigation: LegendKeyboardNavigation;
    labelFormat: string; // Default: "{name}"
    labelFormatter: Function;
    layout: "horizontal" | "vertical"; // Default: "horizontal"
    lineHeight: number; // Default: "16"
    margin: number; // Default: "12"
    maxHeight: number; // Default: "undefined"
    navigation: LegendNavigation;
    padding: number; // Default: "8"
    reversed: boolean; // Default: "false"
    rtl: boolean; // Default: "false"
    shadow: boolean | object; // Default: false
    squareSymbol: boolean; // Default: true
    style: CSSStyleDeclaration;
    symbolHeight: number;
    symbolPadding: number; // Default: 5
    symbolRadius: number;
    symbolWidth: number;
    title: LegendTitle;
    useHTML: boolean; // Default: "false"
    verticalAlign: "top" | "middle" | "bottom"; // Default: "bottom"
    width: number; // Default: "null"
    x: number; // Default: 0
    y: number; // Default: 0
  };
  // noData.position
  type NoDataPosition = {
    align: "left" | "center" | "right"; // Default: "center"
    verticalAlign: "top" | "middle" | "bottom"; // Default: "middle"
    x: number; // Default: 0
    y: number; // Default: 0
  };
  // noData.style
  type NoDataStyle = {
    color: string; // Default: "#666666"
    fontSize: string; // Default: "12px"
    fontWeight: string; // Default: "bold"
  };
  // noData
  type NoData = {
    attr: object;
    position: NoDataPosition; // Default: "{ "x": 0, "y": 0, "align": "center", "verticalAlign": "middle" }"
    style: NoDataStyle;
    useHTML: boolean; // Default: "false"
  };
  // global
  type Global = {
    Date: object;
    VMLRadialGradientURL: string;
    canvasToolsURL: string;
    getTimezoneOffset: Function;
    timezone: string; // Default: "undefined"
    timezoneOffset: number; // Default: "0"
    useUTC: boolean; // Default: true
  };
  // accessibility
  type Accessibility = {
    describeSingleSeries: boolean; // Default: "false"
    enabled: boolean; // Default: true
    onTableAnchorClick: Function;
    pointDateFormat: string;
    pointDateFormatter: Function;
    pointDescriptionFormatter: Function;
    pointDescriptionThreshold: number | boolean; // Default: false
    screenReaderSectionFormatter: Function; // Default: "undefined"
    seriesDescriptionFormatter: Function;
  };
  // xAxis.dateTimeLabelFormats
  type XAxisDateTimeLabelFormats = {
    day: string; // Default: "%e. %b"
    hour: string; // Default: "%H:%M"
    millisecond: string; // Default: "%H:%M:%S.%L"
    minute: string; // Default: "%H:%M"
    month: string; // Default: "%b '%y"
    second: string; // Default: "%H:%M:%S"
    week: string; // Default: "%e. %b"
    year: string; // Default: "%Y"
  };
  // xAxis.labels.style
  type XAxisLabelsStyle = {
    color: string; // Default: "#666666"
    cursor: string; // Default: "default"
    fontSize: string; // Default: "11px"
  };
  // xAxis.labels
  type XAxisLabels = {
    align: "left" | "center" | "right";
    autoRotation: number[]; // Default: "[-45]"
    autoRotationLimit: number; // Default: "80"
    distance: number; // Default: "15"
    enabled: boolean; // Default: true
    format: string; // Default: "{value}"
    formatter: Function;
    maxStaggerLines: number; // Default: "5"
    overflow: null | "justify";
    padding: number; // Default: "5"
    position3d: "offset" | "chart" | "flap" | "ortho"; // Default: "offset"
    reserveSpace: boolean; // Default: "null"
    rotation: number; // Default: "0"
    skew3d: boolean; // Default: false
    staggerLines: number; // Default: "null"
    step: number; // Default: "null"
    style: XAxisLabelsStyle;
    useHTML: boolean; // Default: "false"
    x: number; // Default: 0
    y: number; // Default: "null"
    zIndex: number; // Default: "7"
  };
  // xAxis.title.style
  type XAxisTitleStyle = {
    color: string; // Default: "#666666"
  };
  // xAxis.title
  type XAxisTitle = {
    align: "low" | "middle" | "high"; // Default: "middle"
    enabled: string; // Default: "middle"
    margin: number;
    offset: number;
    position3d: "offset" | "chart" | "flap" | "ortho" | null;
    reserveSpace: boolean; // Default: "true"
    rotation: number; // Default: "0"
    skew3d: false | true | null;
    style: XAxisTitleStyle; // Default: "{ "color": "#666666" }"
    text: string; // Default: "null"
    useHTML: boolean; // Default: "false"
    x: number; // Default: "0"
    y: number;
  };
  // xAxis.breaks
  type XAxisBreaks = {
    breakSize: number; // Default: "0"
    from: number;
    repeat: number; // Default: "0"
    to: number;
  };
  // xAxis.crosshair.label
  type XAxisCrosshairLabel = {
    align: string;
    backgroundColor: Color;
    borderColor: Color;
    borderRadius: number; // Default: "3"
    borderWidth: number; // Default: "0"
    format: string;
    formatter: Function;
    padding: number; // Default: "8"
    shape: string; // Default: "callout"
    style: CSSStyleDeclaration; // Default: "{ "color": "white", "fontWeight": "normal", "fontSize": "11px", "textAlign": "center" }"
  };
  // xAxis.crosshair
  type XAxisCrosshair = {
    className: string;
    color: Color; // Default: "#cccccc"
    dashStyle: "Solid" | "ShortDash" | "ShortDot" | "ShortDashDot" | "ShortDashDotDot" | "Dot" | "Dash" | "LongDash" | "DashDot" | "LongDashDot" | "LongDashDotDot"; // Default: "Solid"
    label: XAxisCrosshairLabel;
    snap: boolean; // Default: "true"
    width: number; // Default: "1"
    zIndex: number; // Default: "2"
  };
  // xAxis.events
  type XAxisEvents = {
    afterBreaks: Function;
    afterSetExtremes: Function;
    pointBreak: Function;
    pointInBreak: Function;
    setExtremes: Function;
  };
  // xAxis.plotBands.label
  type XAxisPlotBandsLabel = {
    align: string; // Default: "center"
    rotation: number; // Default: "0"
    style: object;
    text: string;
    textAlign: string;
    useHTML: boolean; // Default: "false"
    verticalAlign: string; // Default: "top"
    x: number;
    y: number;
  };
  // xAxis.plotBands
  type XAxisPlotBands = {
    borderColor: Color; // Default: "null"
    borderWidth: number; // Default: "0"
    className: string;
    color: Color; // Default: "null"
    events: object;
    from: number; // Default: "null"
    id: string; // Default: "null"
    label: XAxisPlotBandsLabel;
    to: number; // Default: "null"
    zIndex: number; // Default: "null"
  };
  // xAxis.plotLines.label
  type XAxisPlotLinesLabel = {
    align: string; // Default: "left"
    rotation: number;
    style: object;
    text: string;
    textAlign: string;
    useHTML: boolean; // Default: "false"
    verticalAlign: "top" | "middle" | "bottom";
    x: number;
    y: number;
  };
  // xAxis.plotLines
  type XAxisPlotLines = {
    className: string;
    color: Color; // Default: "null"
    dashStyle: "Solid" | "ShortDash" | "ShortDot" | "ShortDashDot" | "ShortDashDotDot" | "Dot" | "Dash" | "LongDash" | "DashDot" | "LongDashDot" | "LongDashDotDot"; // Default: "Solid"
    events: object;
    id: string; // Default: "null"
    label: XAxisPlotLinesLabel;
    value: number; // Default: "null"
    width: number; // Default: "null"
    zIndex: number; // Default: "null"
  };
  // xAxis
  type XAxis = {
    allowDecimals: boolean; // Default: "true"
    alternateGridColor: Color; // Default: "null"
    breaks: XAxisBreaks;
    categories: string[]; // Default: "null"
    ceiling: number;
    className: string;
    crosshair: XAxisCrosshair; // Default: "false"
    dateTimeLabelFormats: XAxisDateTimeLabelFormats;
    description: string; // Default: "undefined"
    endOnTick: boolean; // Default: false
    events: XAxisEvents;
    floor: number; // Default: "null"
    gridLineColor: Color; // Default: "#e6e6e6"
    gridLineDashStyle: "Solid" | "ShortDash" | "ShortDot" | "ShortDashDot" | "ShortDashDotDot" | "Dot" | "Dash" | "LongDash" | "DashDot" | "LongDashDot" | "LongDashDotDot"; // Default: "Solid"
    gridLineWidth: number; // Default: "0"
    gridZIndex: number; // Default: "1"
    id: string; // Default: "null"
    labels: XAxisLabels;
    lineColor: Color; // Default: "#ccd6eb"
    lineWidth: number; // Default: 1
    linkedTo: number; // Default: "null"
    max: number;
    maxPadding: number; // Default: 0.01
    maxRange: number; // Default: "undefined"
    maxZoom: number;
    min: number;
    minPadding: number; // Default: 0.01
    minRange: number;
    minTickInterval: number;
    minorGridLineColor: Color; // Default: "#f2f2f2"
    minorGridLineDashStyle: "Solid" | "ShortDash" | "ShortDot" | "ShortDashDot" | "ShortDashDotDot" | "Dot" | "Dash" | "LongDash" | "DashDot" | "LongDashDot" | "LongDashDotDot"; // Default: "Solid"
    minorGridLineWidth: number; // Default: 1
    minorTickColor: Color; // Default: "#999999"
    minorTickInterval: number | string;
    minorTickLength: number; // Default: 2
    minorTickPosition: "inside" | "outside"; // Default: "outside"
    minorTickWidth: number; // Default: "0"
    minorTicks: boolean; // Default: "false"
    offset: number; // Default: "0"
    opposite: boolean; // Default: "false"
    ordinal: boolean; // Default: "true"
    overscroll: number; // Default: "0"
    pane: number;
    plotBands: XAxisPlotBands;
    plotLines: XAxisPlotLines;
    range: number; // Default: "undefined"
    reversed: boolean; // Default: "false"
    showEmpty: boolean; // Default: "true"
    showFirstLabel: boolean; // Default: "true"
    showLastLabel: boolean; // Default: "true"
    softMax: number;
    softMin: number;
    startOfWeek: number; // Default: 1
    startOnTick: boolean; // Default: false
    tickAmount: number;
    tickColor: Color; // Default: "#ccd6eb"
    tickInterval: number; // Default: "null"
    tickLength: number; // Default: 10
    tickPixelInterval: number; // Default: 100
    tickPosition: "inside" | "outside"; // Default: "outside"
    tickPositioner: Function;
    tickPositions: number[];
    tickWidth: number;
    tickmarkPlacement: null | "on" | "between"; // Default: "between"
    title: XAxisTitle;
    type: "linear" | "logarithmic" | "datetime" | "category"; // Default: "linear"
    uniqueNames: boolean; // Default: "true"
    units: any[];
    visible: boolean; // Default: "true"
  };
  // navigator.handles
  type NavigatorHandles = {
    backgroundColor: Color; // Default: "#f2f2f2"
    borderColor: Color; // Default: "#999999"
    enabled: boolean; // Default: true
    height: number; // Default: 15
    lineWidth: number; // Default: 1
    symbols: any[]; // Default: "['navigator-handle', 'navigator-handle']"
    width: number; // Default: 7
  };
  // navigator.series.dataGrouping
  type NavigatorSeriesDataGrouping = PlotOptionsSeriesDataGrouping;
  // navigator.series.dataLabels
  type NavigatorSeriesDataLabels = PlotOptionsSeriesDataLabels;
  // navigator.series.marker
  type NavigatorSeriesMarker = {
    enabled: boolean; // Default: false
  };
  // navigator.series
  type NavigatorSeries = {
    className: string; // Default: "highcharts-navigator-series"
    dataGrouping: NavigatorSeriesDataGrouping;
    dataLabels: NavigatorSeriesDataLabels;
    fillOpacity: number; // Default: 0.05
    id: string; // Default: "highcharts-navigator-series"
    lineColor: Color;
    lineWidth: number; // Default: 1
    marker: NavigatorSeriesMarker;
    pointRange: number; // Default: 0
    threshold: number;
    type: string;
  };
  // navigator.xAxis.labels.style
  type NavigatorXAxisLabelsStyle = {
    color: string; // Default: "#999999"
  };
  // navigator.xAxis.labels
  type NavigatorXAxisLabels = {
    style: NavigatorXAxisLabelsStyle;
    x: number; // Default: 3
  };
  // navigator.xAxis
  /** Exclude: linkedTo,maxZoom,minRange,opposite,range,scrollbar,showEmpty,maxRange */
  type NavigatorXAxis = XAxis & {
    labels: NavigatorXAxisLabels;
    lineWidth: number; // Default: 0
    tickLength: number; // Default: 0
    tickPixelInterval: number; // Default: 200
  };
  // navigator.yAxis.labels
  type NavigatorYAxisLabels = {
    enabled: boolean; // Default: false
  };
  // navigator.yAxis
  /** Exclude: height,linkedTo,maxZoom,minRange,ordinal,range,showEmpty,scrollbar,top,units,maxRange */
  type NavigatorYAxis = YAxis & {
    endOnTick: boolean; // Default: false
    labels: NavigatorYAxisLabels;
    maxPadding: number; // Default: 0.1
    minPadding: number; // Default: 0.1
    startOnTick: boolean; // Default: false
    tickLength: number; // Default: 0
  };
  // navigator
  type Navigator = {
    adaptToUpdatedData: boolean; // Default: "true"
    baseSeries: Mixed; // Default: "0"
    enabled: boolean; // Default: "true"
    handles: NavigatorHandles;
    height: number; // Default: 40
    margin: number; // Default: 25
    maskFill: Color; // Default: "rgba(102,133,194,0.3)"
    maskInside: boolean; // Default: true
    opposite: boolean; // Default: "false"
    outlineColor: Color; // Default: "#cccccc"
    outlineWidth: number; // Default: 1
    series: NavigatorSeries;
    xAxis: NavigatorXAxis; // Exclude: linkedTo,maxZoom,minRange,opposite,range,scrollbar,showEmpty,maxRange
    yAxis: NavigatorYAxis; // Exclude: height,linkedTo,maxZoom,minRange,ordinal,range,showEmpty,scrollbar,top,units,maxRange
  };
  // title
  type Title = {
    align: "left" | "center" | "right"; // Default: "center"
    floating: boolean; // Default: "false"
    margin: number; // Default: 15
    style: CSSStyleDeclaration;
    text: string; // Default: "Chart title"
    useHTML: boolean; // Default: "false"
    verticalAlign: "top" | "middle" | "bottom";
    widthAdjust: number; // Default: -44
    x: number; // Default: "0"
    y: number;
  };
  // subtitle
  type Subtitle = {
    align: "left" | "center" | "right"; // Default: "center"
    floating: boolean; // Default: "false"
    style: CSSStyleDeclaration; // Default: "{ "color": "#666666" }"
    text: string; // Default: ""
    useHTML: boolean; // Default: "false"
    verticalAlign: "top" | "middle" | "bottom";
    widthAdjust: number; // Default: -44
    x: number; // Default: "0"
    y: number;
  };
  // labels.style
  type LabelsStyle = {
    color: string; // Default: "#333333"
    position: string; // Default: "absolute"
  };
  // labels.items
  type LabelsItems = {
    html: string;
    style: CSSStyleDeclaration;
  };
  // labels
  type Labels = {
    items: LabelsItems;
    style: LabelsStyle; // Default: "{ "color": "#333333" }"
  };
  // loading.labelStyle
  type LoadingLabelStyle = {
    fontWeight: string; // Default: "bold"
    position: string; // Default: "relative"
    top: string; // Default: "45%"
  };
  // loading.style
  type LoadingStyle = {
    backgroundColor: string; // Default: "#ffffff"
    opacity: number; // Default: 0.5
    position: string; // Default: "absolute"
    textAlign: string; // Default: "center"
  };
  // loading
  type Loading = {
    hideDuration: number; // Default: "100"
    labelStyle: LoadingLabelStyle; // Default: "{ "fontWeight": "bold", "position": "relative", "top": "45%" }"
    showDuration: number; // Default: "100"
    style: LoadingStyle; // Default: "{ "position": "absolute", "backgroundColor": "#ffffff", "opacity": 0.5, "textAlign": "center" }"
  };
  // tooltip.dateTimeLabelFormats
  type TooltipDateTimeLabelFormats = {
    day: string; // Default: "%A, %b %e, %Y"
    hour: string; // Default: "%A, %b %e, %H:%M"
    millisecond: string; // Default: "%A, %b %e, %H:%M:%S.%L"
    minute: string; // Default: "%A, %b %e, %H:%M"
    month: string; // Default: "%B %Y"
    second: string; // Default: "%A, %b %e, %H:%M:%S"
    week: string; // Default: "Week from %A, %b %e, %Y"
    year: string; // Default: "%Y"
  };
  // tooltip.style
  type TooltipStyle = {
    color: string; // Default: "#333333"
    cursor: string; // Default: "default"
    fontSize: string; // Default: "12px"
    pointerEvents: string; // Default: "none"
    whiteSpace: string; // Default: "nowrap"
  };
  // tooltip
  type Tooltip = {
    animation: boolean; // Default: "true"
    backgroundColor: Color; // Default: "rgba(247,247,247,0.85)"
    borderColor: Color; // Default: "null"
    borderRadius: number; // Default: 3
    borderWidth: number; // Default: 1
    changeDecimals: number;
    crosshairs: Mixed; // Default: "true"
    dateTimeLabelFormats: TooltipDateTimeLabelFormats;
    enabled: boolean; // Default: true
    followPointer: boolean;
    followTouchMove: boolean;
    footerFormat: string; // Default: ""
    formatter: Function;
    headerFormat: string; // Default: "<span style=\"font-size: 10px\">{point.key}</span><br/>"
    hideDelay: number; // Default: "500"
    padding: number; // Default: 8
    pointFormat: string; // Default: "<span style=\"color:{point.color}\">●</span> {series.name}: <b>{point.y}</b><br/>"
    pointFormatter: Function;
    positioner: Function;
    shadow: boolean; // Default: true
    shape: "callout" | "square"; // Default: "callout"
    shared: boolean; // Default: "false"
    snap: number; // Default: "10/25"
    split: boolean;
    style: TooltipStyle; // Default: "{ "color": "#333333", "cursor": "default", "fontSize": "12px", "pointerEvents": "none", "whiteSpace": "nowrap" }"
    useHTML: boolean; // Default: "false"
    valueDecimals: number;
    valuePrefix: string;
    valueSuffix: string;
    xDateFormat: string;
  };
  // credits.position
  type CreditsPosition = {
    align: "left" | "center" | "right"; // Default: "right"
    verticalAlign: "top" | "middle" | "bottom"; // Default: "bottom"
    x: number; // Default: -10
    y: number; // Default: -5
  };
  // credits.style
  type CreditsStyle = {
    color: string; // Default: "#999999"
    cursor: string; // Default: "pointer"
    fontSize: string; // Default: "9px"
  };
  // credits
  type Credits = {
    enabled: boolean; // Default: true
    href: string; // Default: "http://www.highcharts.com"
    mapText: string; // Default: "\u00a9 <a href="{geojson.copyrightUrl}">{geojson.copyrightShort}</a>"
    mapTextFull: string; // Default: "{geojson.copyright}"
    position: CreditsPosition;
    style: CreditsStyle; // Default: "{ "cursor": "pointer", "color": "#999999", "fontSize": "10px" }"
    text: string; // Default: "Highcharts.com"
  };
  // rangeSelector.buttonTheme
  type RangeSelectorButtonTheme = {
    height: number; // Default: 18
    padding: number; // Default: 2
    undefined: number; // Default: 0
    width: number; // Default: 28
    zIndex: number; // Default: 7
  };
  // rangeSelector.inputPosition
  type RangeSelectorInputPosition = {
    align: "left" | "center" | "right"; // Default: "right"
    x: number; // Default: 0
    y: number; // Default: 0
  };
  // rangeSelector.buttonPosition
  type RangeSelectorButtonPosition = {
    align: "left" | "center" | "right"; // Default: "left"
    x: number; // Default: 0
    y: number; // Default: 0
  };
  // rangeSelector.labelStyle
  type RangeSelectorLabelStyle = {
    color: string; // Default: "#666666"
  };
  // rangeSelector.buttons.events
  type RangeSelectorButtonsEvents = {
    click: Function; // Default: "undefined"
  };
  // rangeSelector.buttons
  type RangeSelectorButtons = {
    count: number; // Default: "1"
    dataGrouping: object;
    events: RangeSelectorButtonsEvents;
    offsetMax: number; // Default: "0"
    offsetMin: number; // Default: "0"
    text: string;
    type: "millisecond" | "second" | "minute" | "day" | "week" | "month" | "ytd" | "all";
  };
  // rangeSelector
  type RangeSelector = {
    allButtonsEnabled: boolean; // Default: "false"
    buttonPosition: RangeSelectorButtonPosition;
    buttonSpacing: number; // Default: "0"
    buttonTheme: RangeSelectorButtonTheme;
    buttons: RangeSelectorButtons;
    enabled: boolean; // Default: "true"
    floating: boolean; // Default: false
    height: number; // Default: "undefined"
    inputBoxBorderColor: Color; // Default: "#cccccc"
    inputBoxHeight: number; // Default: "17"
    inputBoxStyle: CSSStyleDeclaration;
    inputBoxWidth: number; // Default: "90"
    inputDateFormat: string; // Default: "%b %e %Y,"
    inputDateParser: Function;
    inputEditDateFormat: string; // Default: "%Y-%m-%d"
    inputEnabled: boolean;
    inputPosition: RangeSelectorInputPosition; // Default: "{ align: "right" }"
    inputStyle: CSSStyleDeclaration;
    labelStyle: RangeSelectorLabelStyle;
    selected: number; // Default: "undefined"
    verticalAlign: string; // Default: "top"
    x: number; // Default: 0
    y: number; // Default: 0
  };
  // responsive.rules.condition
  type ResponsiveRulesCondition = {
    callback: Function;
    maxHeight: number;
    maxWidth: number;
    minHeight: number; // Default: "0"
    minWidth: number; // Default: "0"
  };
  // responsive.rules
  type ResponsiveRules = {
    chartOptions: object;
    condition: ResponsiveRulesCondition;
  };
  // responsive
  type Responsive = {
    rules: ResponsiveRules;
  };
  // scrollbar
  type Scrollbar = {
    barBackgroundColor: Color; // Default: "#cccccc"
    barBorderColor: Color; // Default: "#cccccc"
    barBorderRadius: number; // Default: 0
    barBorderWidth: number; // Default: 1
    buttonArrowColor: Color; // Default: "#333333"
    buttonBackgroundColor: Color; // Default: "#e6e6e6"
    buttonBorderColor: Color; // Default: "#cccccc"
    buttonBorderRadius: number; // Default: 0
    buttonBorderWidth: number; // Default: 1
    enabled: boolean; // Default: "true"
    height: number;
    liveRedraw: boolean;
    margin: number; // Default: 10
    minWidth: number; // Default: 6
    rifleColor: Color; // Default: "#333333"
    showFull: boolean; // Default: "true"
    step: number; // Default: 0.2
    trackBackgroundColor: Color; // Default: "#f2f2f2"
    trackBorderColor: Color; // Default: "#f2f2f2"
    trackBorderRadius: number; // Default: "0"
    trackBorderWidth: number; // Default: 1
    zIndex: number; // Default: 3
  };
  // pane.background.backgroundColor.linearGradient
  type PaneBackgroundBackgroundColorLinearGradient = {
    x1: number; // Default: 0
    x2: number; // Default: 0
    y1: number; // Default: 0
    y2: number; // Default: 1
  };
  // pane.background.backgroundColor
  type PaneBackgroundBackgroundColor = {
    linearGradient: PaneBackgroundBackgroundColorLinearGradient;
    stops: any[][]; // Default: "[[0, #ffffff], [1, #e6e6e6]]"
  };
  // pane.background
  type PaneBackground = {
    backgroundColor: PaneBackgroundBackgroundColor;
    borderColor: Color; // Default: "#cccccc"
    borderWidth: number; // Default: 1
    className: string;
    innerRadius: number | string; // Default: 0
    outerRadius: number | string; // Default: "105%"
    shape: "solid" | "arc"; // Default: "circle"
  };
  // pane
  type Pane = {
    background: PaneBackground;
    center: (string | number)[]; // Default: "["50%", "50%"]"
    endAngle: number;
    size: number | string; // Default: "85%"
    startAngle: number; // Default: 0
  };
  // colorAxis.marker.animation
  type ColorAxisMarkerAnimation = {
    duration: number; // Default: 50
  };
  // colorAxis.marker
  type ColorAxisMarker = {
    animation: ColorAxisMarkerAnimation;
    color: Color; // Default: "#999999"
  };
  // colorAxis.labels
  type ColorAxisLabels = XAxisLabels;
  // colorAxis.dataClasses
  type ColorAxisDataClasses = {
    color: Color;
    from: number;
    name: string;
    to: number;
  };
  // colorAxis
  /** Exclude: allowDecimals,alternateGridColor,breaks,categories,crosshair,dateTimeLabelFormats,lineWidth,linkedTo,maxZoom,minRange,minTickInterval,offset,opposite,plotBands,plotLines,showEmpty,title */
  type ColorAxis = XAxis & {
    dataClassColor: "tween" | "category"; // Default: "tween"
    dataClasses: ColorAxisDataClasses;
    endOnTick: boolean; // Default: true
    labels: ColorAxisLabels;
    marker: ColorAxisMarker;
    maxColor: Color; // Default: "#003399"
    maxPadding: number; // Default: 0
    minColor: Color; // Default: "#e6ebf5"
    minPadding: number; // Default: 0
    showInLegend: boolean; // Default: true
    startOnTick: boolean; // Default: true
    stops: any[][];
    tickLength: number; // Default: 5
    tickPixelInterval: number; // Default: 72
  };
  // mapNavigation.buttonOptions.style
  type MapNavigationButtonOptionsStyle = {
    fontSize: string; // Default: "15px"
    fontWeight: string; // Default: "bold"
  };
  // mapNavigation.buttonOptions.theme
  type MapNavigationButtonOptionsTheme = {
    undefined: string; // Default: "center"
  };
  // mapNavigation.buttonOptions
  type MapNavigationButtonOptions = {
    align: "left" | "center" | "right"; // Default: "left"
    alignTo: "plotBox" | "spacingBox"; // Default: "plotBox"
    height: number; // Default: 18
    padding: number; // Default: 5
    style: MapNavigationButtonOptionsStyle;
    theme: MapNavigationButtonOptionsTheme;
    verticalAlign: "top" | "middle" | "bottom"; // Default: "top"
    width: number; // Default: 18
    x: number; // Default: 0
  };
  // mapNavigation.buttons.zoomIn
  type MapNavigationButtonsZoomIn = MapNavigationButtonOptions & {
    onclick: Function;
    text: string; // Default: "+"
    y: number; // Default: 0
  };
  // mapNavigation.buttons.zoomOut
  type MapNavigationButtonsZoomOut = MapNavigationButtonOptions & {
    onclick: Function;
    text: string; // Default: "-"
    y: number; // Default: 28
  };
  // mapNavigation.buttons
  type MapNavigationButtons = {
    zoomIn: MapNavigationButtonsZoomIn;
    zoomOut: MapNavigationButtonsZoomOut;
  };
  // mapNavigation
  type MapNavigation = {
    buttonOptions: MapNavigationButtonOptions;
    buttons: MapNavigationButtons;
    enableButtons: boolean;
    enableDoubleClickZoom: boolean;
    enableDoubleClickZoomTo: boolean; // Default: "false"
    enableMouseWheelZoom: boolean;
    enableTouchZoom: boolean;
    enabled: boolean; // Default: "false"
    mouseWheelSensitivity: number; // Default: 1.1
  };
  // zAxis
  /** Exclude: breaks,crosshair,lineColor,lineWidth,nameToX,showEmpty */
  type ZAxis = XAxis;
  // Options
  type Options = {
    accessibility: Accessibility;
    annotations: Annotations;
    boost: Boost;
    chart: Chart;
    colorAxis: ColorAxis; // Exclude: allowDecimals,alternateGridColor,breaks,categories,crosshair,dateTimeLabelFormats,lineWidth,linkedTo,maxZoom,minRange,minTickInterval,offset,opposite,plotBands,plotLines,showEmpty,title
    colors: Color[]; // Default: "["#7cb5ec", "#434348", "#90ed7d", "#f7a35c", "#8085e9",\n         "#f15c80", "#e4d354", "#2b908f", "#f45b5b", "#91e8e1"]"
    credits: Credits;
    data: Data;
    defs: Defs;
    drilldown: Drilldown;
    exporting: Exporting;
    global: Global;
    keyboardNavigation: KeyboardNavigation;
    labels: Labels;
    lang: Lang;
    legend: Legend;
    loading: Loading;
    mapNavigation: MapNavigation;
    navigation: Navigation;
    navigator: Navigator;
    noData: NoData;
    pane: Pane;
    plotOptions: PlotOptions;
    rangeSelector: RangeSelector;
    responsive: Responsive;
    scrollbar: Scrollbar;
    series: Series;
    subtitle: Subtitle;
    title: Title;
    tooltip: Tooltip;
    xAxis: XAxis;
    yAxis: YAxis; // Exclude: ordinal,overscroll
    zAxis: ZAxis; // Exclude: breaks,crosshair,lineColor,lineWidth,nameToX,showEmpty
  };
}