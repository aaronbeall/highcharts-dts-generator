// Type definitions for Highcharts 6.0.4 (HEAD commit eecc41a on Fri Dec 15 2017 13:52:03 GMT+0100 (W. Europe Standard Time))
// Project: http://www.highcharts.com/
// Definitions generated from https://api.highcharts.com/highcharts/tree.json on Fri Dec 15 2017 14:53:54 GMT-0500 (EST)
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

declare namespace Highcharts {
  // plotOptions.ad.params
  type PlotOptionsAdParams = {
    volumeSeriesID: string; // Default: "volume"
  };
  // plotOptions.ad
  type PlotOptionsAd = PlotOptionsSma & {
    name: string; // Default: "Accumulation/Distribution"
    params: PlotOptionsAdParams;
  };
  // plotOptions.atr.params
  type PlotOptionsAtrParams = {
    period: number; // Default: 14
  };
  // plotOptions.atr
  type PlotOptionsAtr = PlotOptionsSma & {
    name: string; // Default: "ATR (14)"
    params: PlotOptionsAtrParams;
  };
  // plotOptions.bb.params
  type PlotOptionsBbParams = {
    index: number; // Default: 3
    period: number; // Default: 20
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
  // plotOptions.bb.topLine.styles
  type PlotOptionsBbTopLineStyles = {
    lineColor: any;
    lineWidth: number; // Default: 1
  };
  // plotOptions.bb.topLine
  type PlotOptionsBbTopLine = PlotOptionsBbBottomLine & {
    styles: PlotOptionsBbTopLineStyles;
  };
  // plotOptions.bb.tooltip
  type PlotOptionsBbTooltip = {
    pointFormat: string; // Default: "<span style="color:{point.color}">\u25CF</span> <b> {series.name}</b><br/>\n		Top: {point.top}<br/>\n		Middle: {point.middle}<br/>\n		Bottom: {point.bottom}<br/>"
  };
  // plotOptions.bb.marker
  type PlotOptionsBbMarker = {
    enabled: any;
  };
  // plotOptions.bb.dataGrouping
  type PlotOptionsBbDataGrouping = {
    approximation: string; // Default: "averages"
  };
  // plotOptions.bb
  type PlotOptionsBb = PlotOptionsSma & {
    bottomLine: PlotOptionsBbBottomLine;
    dataGrouping: PlotOptionsBbDataGrouping;
    marker: PlotOptionsBbMarker;
    name: string; // Default: "BB (20, 2)"
    params: PlotOptionsBbParams;
    tooltip: PlotOptionsBbTooltip;
    topLine: PlotOptionsBbTopLine;
  };
  // plotOptions.cci.params
  type PlotOptionsCciParams = {
    period: number; // Default: 14
  };
  // plotOptions.cci
  type PlotOptionsCci = PlotOptionsSma & {
    name: string; // Default: "CCI (14)"
    params: PlotOptionsCciParams;
  };
  // plotOptions.cmf.params
  type PlotOptionsCmfParams = {
    period: number; // Default: 14
    volumeSeriesID: string; // Default: "volume"
  };
  // plotOptions.cmf
  /** Exclude: animationLimit */
  type PlotOptionsCmf = PlotOptionsSma & {
    name: string; // Default: "Chaikin Money Flow (14)"
    params: PlotOptionsCmfParams;
  };
  // plotOptions.ema.params
  type PlotOptionsEmaParams = {
    index: any;
    period: number; // Default: 14
  };
  // plotOptions.ema
  type PlotOptionsEma = PlotOptionsSma & {
    name: string; // Default: "EMA (14)"
    params: PlotOptionsEmaParams;
  };
  // plotOptions.ikh.params
  type PlotOptionsIkhParams = {
    period: number; // Default: 26
    periodSenkouSpanB: number; // Default: 52
    periodTenkan: number; // Default: 9
  };
  // plotOptions.ikh.marker
  type PlotOptionsIkhMarker = {
    enabled: any;
  };
  // plotOptions.ikh.tooltip
  type PlotOptionsIkhTooltip = {
    pointFormat: any;
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
  // plotOptions.ikh.dataGrouping
  type PlotOptionsIkhDataGrouping = {
    approximation: string; // Default: "averages"
  };
  // plotOptions.ikh
  /** Exclude: allAreas,colorAxis,compare,compareBase,joinBy,keys,stacking,showInNavigator,navigatorOptions,pointInterval,pointIntervalUnit,pointPlacement,pointRange,pointStart */
  type PlotOptionsIkh = PlotOptionsSma & {
    chikouLine: PlotOptionsIkhChikouLine;
    dataGrouping: PlotOptionsIkhDataGrouping;
    kijunLine: PlotOptionsIkhKijunLine;
    marker: PlotOptionsIkhMarker;
    name: string; // Default: "IKH (52, 26, 9)"
    params: PlotOptionsIkhParams;
    senkouSpan: PlotOptionsIkhSenkouSpan;
    senkouSpanA: PlotOptionsIkhSenkouSpanA;
    senkouSpanB: PlotOptionsIkhSenkouSpanB;
    tenkanLine: PlotOptionsIkhTenkanLine;
    tooltip: PlotOptionsIkhTooltip;
  };
  // plotOptions.sma.tooltip
  type PlotOptionsSmaTooltip = {
    valueDecimals: number; // Default: 4
  };
  // plotOptions.sma.params
  type PlotOptionsSmaParams = {
    index: number;
    period: number; // Default: 14
  };
  // plotOptions.sma
  /** Exclude: allAreas,colorAxis,compare,compareBase,joinBy,keys,stacking,showInNavigator,navigatorOptions,pointInterval,pointIntervalUnit,pointPlacement,pointRange,pointStart,joinBy */
  type PlotOptionsSma = PlotOptionsLine & {
    linkedTo: string;
    name: string; // Default: "SMA (14)"
    params: PlotOptionsSmaParams;
    tooltip: PlotOptionsSmaTooltip;
  };
  // plotOptions.macd.params
  type PlotOptionsMacdParams = {
    longPeriod: number; // Default: 26
    period: number; // Default: 26
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
  // plotOptions.macd.states.hover.halo
  type PlotOptionsMacdStatesHoverHalo = {
    size: any;
  };
  // plotOptions.macd.states.hover
  type PlotOptionsMacdStatesHover = {
    halo: PlotOptionsMacdStatesHoverHalo;
  };
  // plotOptions.macd.states
  type PlotOptionsMacdStates = {
    hover: PlotOptionsMacdStatesHover;
  };
  // plotOptions.macd.tooltip
  type PlotOptionsMacdTooltip = {
    pointFormat: any;
  };
  // plotOptions.macd
  type PlotOptionsMacd = PlotOptionsSma & {
    dataGrouping: string; // Default: "averages"
    groupPadding: number; // Default: 0.1
    macdLine: PlotOptionsMacdMacdLine;
    minPointLength: any;
    name: string; // Default: "MACD (26, 12, 9)"
    params: PlotOptionsMacdParams;
    pointPadding: number; // Default: 0.1
    signalLine: PlotOptionsMacdSignalLine;
    states: PlotOptionsMacdStates;
    threshold: any;
    tooltip: PlotOptionsMacdTooltip;
  };
  // plotOptions.mfi.params
  /** Exclude: index */
  type PlotOptionsMfiParams = {
    decimals: number; // Default: 4
    period: number; // Default: 14
    volumeSeriesID: string; // Default: "volume"
  };
  // plotOptions.mfi
  type PlotOptionsMfi = PlotOptionsSma & {
    name: string; // Default: "Money Flow Index (14)"
    params: PlotOptionsMfiParams;
  };
  // plotOptions.momentum.params
  type PlotOptionsMomentumParams = {
    period: number; // Default: 14
  };
  // plotOptions.momentum
  type PlotOptionsMomentum = PlotOptionsSma & {
    name: string; // Default: "Momentum (14)"
    params: PlotOptionsMomentumParams;
  };
  // plotOptions.pivotpoints.params
  /** Exclude: index */
  type PlotOptionsPivotpointsParams = {
    algorithm: string; // Default: "standard"
    period: number; // Default: 28
  };
  // plotOptions.pivotpoints.marker
  type PlotOptionsPivotpointsMarker = {
    enabled: any;
  };
  // plotOptions.pivotpoints.dataLabels
  type PlotOptionsPivotpointsDataLabels = {
    enabled: boolean; // Default: true
    format: string; // Default: "{point.pivotLine}"
  };
  // plotOptions.pivotpoints.dataGrouping
  type PlotOptionsPivotpointsDataGrouping = {
    approximation: string; // Default: "averages"
  };
  // plotOptions.pivotpoints
  type PlotOptionsPivotpoints = PlotOptionsSma & {
    dataGrouping: PlotOptionsPivotpointsDataGrouping;
    dataLabels: PlotOptionsPivotpointsDataLabels;
    enableMouseTracking: any;
    marker: PlotOptionsPivotpointsMarker;
    name: string; // Default: "Pivot Points (28)"
    params: PlotOptionsPivotpointsParams;
  };
  // plotOptions.priceenvelopes.marker
  type PlotOptionsPriceenvelopesMarker = {
    enabled: any;
  };
  // plotOptions.priceenvelopes.tooltip
  type PlotOptionsPriceenvelopesTooltip = {
    pointFormat: string; // Default: "<span style="color:{point.color}">\u25CF</span> <b> {series.name}</b><br/>\n		Top: {point.top}<br/>\n		Middle: {point.middle}<br/>\n		Bottom: {point.bottom}<br/>"
  };
  // plotOptions.priceenvelopes.params
  type PlotOptionsPriceenvelopesParams = {
    bottomBand: number; // Default: 0.1
    period: number; // Default: 20
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
  // plotOptions.priceenvelopes.topLine.styles
  type PlotOptionsPriceenvelopesTopLineStyles = {
    lineWidth: number; // Default: 1
  };
  // plotOptions.priceenvelopes.topLine
  type PlotOptionsPriceenvelopesTopLine = PlotOptionsPriceenvelopesBottomLine & {
    styles: PlotOptionsPriceenvelopesTopLineStyles;
  };
  // plotOptions.priceenvelopes.dataGrouping
  type PlotOptionsPriceenvelopesDataGrouping = {
    approximation: string; // Default: "averages"
  };
  // plotOptions.priceenvelopes
  type PlotOptionsPriceenvelopes = PlotOptionsSma & {
    bottomLine: PlotOptionsPriceenvelopesBottomLine;
    dataGrouping: PlotOptionsPriceenvelopesDataGrouping;
    marker: PlotOptionsPriceenvelopesMarker;
    name: string; // Default: "Price envelopes (20, 0.1, 0.1)"
    params: PlotOptionsPriceenvelopesParams;
    tooltip: PlotOptionsPriceenvelopesTooltip;
    topLine: PlotOptionsPriceenvelopesTopLine;
  };
  // plotOptions.psar.marker
  type PlotOptionsPsarMarker = {
    enabled: boolean; // Default: true
  };
  // plotOptions.psar.states.hover
  type PlotOptionsPsarStatesHover = {
    lineWidthPlus: any;
  };
  // plotOptions.psar.states
  type PlotOptionsPsarStates = {
    hover: PlotOptionsPsarStatesHover;
  };
  // plotOptions.psar.params
  /** Exclude: index,period */
  type PlotOptionsPsarParams = {
    decimals: number; // Default: 4
    increment: number; // Default: 0.02
    index: number; // Default: 2
    initialAccelerationFactor: number; // Default: 0.02
    maxAccelerationFactor: number; // Default: 0.2
  };
  // plotOptions.psar
  type PlotOptionsPsar = PlotOptionsSma & {
    lineWidth: any;
    marker: PlotOptionsPsarMarker;
    name: string; // Default: "PSAR"
    params: PlotOptionsPsarParams;
    states: PlotOptionsPsarStates;
  };
  // plotOptions.roc.params
  type PlotOptionsRocParams = {
    index: number; // Default: 3
    period: number; // Default: 9
  };
  // plotOptions.roc
  type PlotOptionsRoc = PlotOptionsSma & {
    name: string; // Default: "Rate of Change (9)"
    params: PlotOptionsRocParams;
  };
  // plotOptions.rsi.params
  /** Exclude: index */
  type PlotOptionsRsiParams = {
    decimals: number; // Default: 4
    period: number; // Default: 14
  };
  // plotOptions.rsi
  type PlotOptionsRsi = PlotOptionsSma & {
    name: string; // Default: "RSI (14)"
    params: PlotOptionsRsiParams;
  };
  // plotOptions.stochastic.params
  /** Exclude: index,period */
  type PlotOptionsStochasticParams = {
    periods: any[]; // Default: "[14, 3]"
  };
  // plotOptions.stochastic.marker
  type PlotOptionsStochasticMarker = {
    enabled: any;
  };
  // plotOptions.stochastic.tooltip
  type PlotOptionsStochasticTooltip = {
    pointFormat: string; // Default: "<span style="color:{point.color}">\u25CF</span> <b> {series.name}</b><br/>\n		%K: {point.y}<br/>\n		%D: {point.smoothed}<br/>"
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
  // plotOptions.stochastic.dataGrouping
  type PlotOptionsStochasticDataGrouping = {
    approximation: string; // Default: "averages"
  };
  // plotOptions.stochastic
  type PlotOptionsStochastic = PlotOptionsSma & {
    dataGrouping: PlotOptionsStochasticDataGrouping;
    marker: PlotOptionsStochasticMarker;
    name: string; // Default: "Stochastic (14, 3)"
    params: PlotOptionsStochasticParams;
    smoothedLine: PlotOptionsStochasticSmoothedLine;
    tooltip: PlotOptionsStochasticTooltip;
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
  // plotOptions.vbp.dataGrouping
  type PlotOptionsVbpDataGrouping = {
    enabled: any;
  };
  // plotOptions.vbp.dataLabels.style
  type PlotOptionsVbpDataLabelsStyle = {
    fontSize: string; // Default: "7px"
  };
  // plotOptions.vbp.dataLabels
  type PlotOptionsVbpDataLabels = {
    allowOverlap: boolean; // Default: true
    enabled: boolean; // Default: true
    format: string; // Default: "P: {point.volumePos:.2f} | N: {point.volumeNeg:.2f}"
    padding: any;
    style: PlotOptionsVbpDataLabelsStyle;
    verticalAlign: string; // Default: "top"
  };
  // plotOptions.vbp
  type PlotOptionsVbp = PlotOptionsSma & {
    animationLimit: number; // Default: 1000
    crisp: boolean; // Default: true
    dataGrouping: PlotOptionsVbpDataGrouping;
    dataLabels: PlotOptionsVbpDataLabels;
    enableMouseTracking: any;
    name: string; // Default: "Volume by Price"
    params: PlotOptionsVbpParams;
    pointPadding: any;
    volumeDivision: PlotOptionsVbpVolumeDivision;
    zIndex: number; // Default: -1
    zoneLines: PlotOptionsVbpZoneLines;
  };
  // plotOptions.vwap.params
  /** Exclude: index */
  type PlotOptionsVwapParams = {
    period: number; // Default: 30
    volumeSeriesID: string; // Default: "volume"
  };
  // plotOptions.vwap
  type PlotOptionsVwap = PlotOptionsSma & {
    name: string; // Default: "VWAP (30)"
    params: PlotOptionsVwapParams;
  };
  // plotOptions.wma.params
  type PlotOptionsWmaParams = {
    index: number; // Default: 3
    period: number; // Default: 9
  };
  // plotOptions.wma
  type PlotOptionsWma = PlotOptionsSma & {
    name: string; // Default: "WMA (9)"
    params: PlotOptionsWmaParams;
  };
  // plotOptions.zigzag.params
  /** Exclude: index,period */
  type PlotOptionsZigzagParams = {
    deviation: number; // Default: 1
    highIndex: number; // Default: 1
    lowIndex: number; // Default: 2
  };
  // plotOptions.zigzag
  type PlotOptionsZigzag = PlotOptionsSma & {
    name: string; // Default: "Zig Zag (1%)"
    params: PlotOptionsZigzagParams;
  };
  // plotOptions.bellcurve.marker
  type PlotOptionsBellcurveMarker = {
    enabled: any;
  };
  // plotOptions.bellcurve
  /** Exclude: boostThreshold,connectNulls,stacking,pointInterval,pointIntervalUnit */
  type PlotOptionsBellcurve = PlotOptionsAreaspline & {
    intervals: number; // Default: 3
    marker: PlotOptionsBellcurveMarker;
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
    lineWidth: number; // Default: "0"
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
    operator: string;
    property: string;
    value: any;
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
    x: number; // Default: "0"
    y: number; // Default: "-6"
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
  type PlotOptionsSeriesStatesSelect = PlotOptionsSeriesStatesHover & {
    marker: any;
  };
  // plotOptions.series.states.normal
  type PlotOptionsSeriesStatesNormal = {
    animation: object | boolean; // Default: "true"
  };
  // plotOptions.series.states
  type PlotOptionsSeriesStates = {
    hover: PlotOptionsSeriesStatesHover;
    normal: PlotOptionsSeriesStatesNormal;
    select: PlotOptionsSeriesStatesSelect;
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
    allowPointSelect: boolean; // Default: "false"
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
    findNearestPointBy: string; // Default: "x"
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
    pointRange: number; // Default: "0"
    pointStart: number; // Default: "0"
    selected: boolean; // Default: "false"
    shadow: boolean | object; // Default: "false"
    showCheckbox: boolean; // Default: "false"
    showInLegend: boolean; // Default: "true"
    showInNavigator: boolean; // Default: "undefined"
    skipKeyboardNavigation: boolean;
    softThreshold: boolean; // Default: true
    stacking: null | "normal" | "percent"; // Default: "null"
    states: PlotOptionsSeriesStates;
    step: null | "left" | "center" | "right";
    stickyTracking: boolean; // Default: true
    threshold: number; // Default: "0"
    tooltip: PlotOptionsSeriesTooltip;
    turboThreshold: number; // Default: 1000
    visible: boolean; // Default: "true"
    zIndex: number;
    zoneAxis: string; // Default: "y"
    zones: PlotOptionsSeriesZones;
  };
  // plotOptions.bullet.targetOptions
  type PlotOptionsBulletTargetOptions = {
    borderColor: Color;
    borderWidth: any;
    color: Color;
    height: number; // Default: 3
    width: number | string; // Default: "140%"
  };
  // plotOptions.bullet.tooltip
  type PlotOptionsBulletTooltip = {
    pointFormat: any;
  };
  // plotOptions.bullet
  /** Exclude: allAreas,boostThreshold,colorAxis,compare,compareBase */
  type PlotOptionsBullet = PlotOptionsColumn & {
    targetOptions: PlotOptionsBulletTargetOptions;
    tooltip: PlotOptionsBulletTooltip;
  };
  // plotOptions.funnel.dataLabels
  type PlotOptionsFunnelDataLabels = {
    connectorWidth: number; // Default: 1
  };
  // plotOptions.funnel.states.select
  type PlotOptionsFunnelStatesSelect = {
    borderColor: string; // Default: "#000000"
    color: string; // Default: "#cccccc"
    shadow: any;
  };
  // plotOptions.funnel.states
  type PlotOptionsFunnelStates = {
    select: PlotOptionsFunnelStatesSelect;
  };
  // plotOptions.funnel
  /** Exclude: size */
  type PlotOptionsFunnel = PlotOptionsPie & {
    animation: any;
    center: (string | number)[]; // Default: "["50%", "50%"]"
    dataLabels: PlotOptionsFunnelDataLabels;
    height: number | string; // Default: "100%"
    neckHeight: number | string; // Default: "25%"
    neckWidth: number | string; // Default: "30%"
    reversed: boolean; // Default: "false"
    states: PlotOptionsFunnelStates;
    width: number | string; // Default: "90%"
  };
  // plotOptions.pyramid
  type PlotOptionsPyramid = PlotOptionsFunnel & {
    neckHeight: string; // Default: "0%"
    neckWidth: string; // Default: "0%"
    reversed: boolean; // Default: true
  };
  // plotOptions.histogram.tooltip
  type PlotOptionsHistogramTooltip = {
    headerFormat: any;
    pointFormat: any;
  };
  // plotOptions.histogram
  /** Exclude: boostThreshold,pointInterval,pointIntervalUnit,stacking */
  type PlotOptionsHistogram = PlotOptionsColumn & {
    binWidth: number;
    binsNumber: number | Function | "square-root" | "sturges" | "rice"; // Default: "square-root"
    groupPadding: any;
    grouping: any;
    pointPadding: any;
    pointPlacement: string; // Default: "between"
    tooltip: PlotOptionsHistogramTooltip;
  };
  // plotOptions.pareto
  /** Exclude: allAreas,boostThreshold,borderColor,borderRadius,borderWidth,crisp,colorAxis,depth,data,edgeColor,edgeWidth,findNearestPointBy,gapSize,gapUnit,grouping,groupPadding,groupZPadding,maxPointWidth,keys,negativeColor,pointInterval,pointIntervalUnit,pointPadding,pointPlacement,pointRange,pointStart,pointWidth,shadow,step,softThreshold,stacking,threshold,zoneAxis,zones */
  type PlotOptionsPareto = PlotOptionsLine & {
    zIndex: number; // Default: 3
  };
  // plotOptions.sankey.dataLabels
  type PlotOptionsSankeyDataLabels = {
    backgroundColor: string; // Default: "none"
    crop: any;
    enabled: boolean; // Default: true
    format: any;
    formatter: any;
    inside: boolean; // Default: true
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
    followPointer: boolean; // Default: true
    headerFormat: string; // Default: "<span class=\"highcharts-header\">{series.name}</span><br/>"
    nodeFormat: string; // Default: "{point.name}: <b>{point.sum}</b><br/>"
    nodeFormatter: Function;
    pointFormat: string; // Default: "{point.fromNode.name} → {point.toNode.name}: <b>{point.weight}</b><br/>"
  };
  // plotOptions.sankey
  /** Exclude: animationLimit,boostThreshold,borderColor,borderRadius,borderWidth,crisp,cropThreshold,depth,edgeColor,edgeWidth,findNearestPointBy,grouping,groupPadding,groupZPadding,maxPointWidth,negativeColor,pointInterval,pointIntervalUnit,pointPadding,pointPlacement,pointRange,pointStart,pointWidth,shadow,softThreshold,stacking,threshold,zoneAxis,zones */
  type PlotOptionsSankey = PlotOptionsColumn & {
    colorByPoint: boolean; // Default: true
    curveFactor: number; // Default: 0.33
    dataLabels: PlotOptionsSankeyDataLabels;
    linkOpacity: number; // Default: 0.5
    nodePadding: number; // Default: 10
    nodeWidth: number; // Default: 20
    showInLegend: any;
    states: PlotOptionsSankeyStates;
    tooltip: PlotOptionsSankeyTooltip;
  };
  // plotOptions.solidgauge
  /** Exclude: dial,pivot */
  type PlotOptionsSolidgauge = PlotOptionsGauge & {
    colorByPoint: boolean; // Default: true
    linecap: "square" | "round"; // Default: "round"
    rounded: boolean; // Default: "false"
    threshold: number; // Default: "null"
  };
  // plotOptions.streamgraph.marker
  type PlotOptionsStreamgraphMarker = {
    enabled: any;
  };
  // plotOptions.streamgraph
  type PlotOptionsStreamgraph = PlotOptionsAreaspline & {
    fillOpacity: number; // Default: 1
    lineWidth: any;
    marker: PlotOptionsStreamgraphMarker;
    stacking: string; // Default: "stream"
  };
  // plotOptions.sunburst.dataLabels.style
  type PlotOptionsSunburstDataLabelsStyle = {
    textOverflow: string; // Default: "ellipsis"
  };
  // plotOptions.sunburst.dataLabels
  /** Exclude: align,allowOverlap,staggerLines,step */
  type PlotOptionsSunburstDataLabels = PlotOptionsSeriesDataLabels & {
    defer: boolean; // Default: true
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
    center: (string | number)[];
    dataLabels: PlotOptionsSunburstDataLabels;
    levelIsConstant: boolean; // Default: true
    levels: PlotOptionsSunburstLevels;
    rootId: string | undefined; // Default: "undefined"
    slicedOffset: number; // Default: 10
  };
  // plotOptions.tilemap.states.hover.halo.attributes
  type PlotOptionsTilemapStatesHoverHaloAttributes = {
    zIndex: number; // Default: 3
  };
  // plotOptions.tilemap.states.hover.halo
  type PlotOptionsTilemapStatesHoverHalo = {
    attributes: PlotOptionsTilemapStatesHoverHaloAttributes;
    enabled: boolean; // Default: true
    opacity: number; // Default: 0.5
    size: number; // Default: 2
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
    colsize: number; // Default: "1"
    data: PlotOptionsTilemapData;
    pointPadding: number; // Default: 2
    rowsize: number; // Default: "1"
    states: PlotOptionsTilemapStates;
    tileShape: string; // Default: "hexagon"
  };
  // plotOptions.treemap.dataLabels
  type PlotOptionsTreemapDataLabels = PlotOptionsHeatmapDataLabels & {
    defer: any;
    enabled: boolean; // Default: true
    formatter: any;
    inside: boolean; // Default: true
    verticalAlign: string; // Default: "middle"
  };
  // plotOptions.treemap.tooltip
  type PlotOptionsTreemapTooltip = {
    headerFormat: any;
    pointFormat: string; // Default: "<b>{point.name}</b>: {point.value}<br/>"
  };
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
    borderColor: string; // Default: "#999999"
    brightness: number; // Default: "null"
    halo: PlotOptionsTreemapStatesHoverHalo;
    opacity: number; // Default: 0.75
    shadow: any;
  };
  // plotOptions.treemap.states
  type PlotOptionsTreemapStates = PlotOptionsHeatmapStates & {
    hover: PlotOptionsTreemapStatesHover;
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
    alternateStartingDirection: boolean; // Default: "false"
    borderColor: Color; // Default: "#e6e6e6"
    borderWidth: number; // Default: 1
    colorByPoint: boolean; // Default: "false"
    colors: Color[];
    cropThreshold: number; // Default: "300"
    dataLabels: PlotOptionsTreemapDataLabels;
    drillUpButton: PlotOptionsTreemapDrillUpButton;
    ignoreHiddenPoint: boolean; // Default: true
    interactByLeaf: boolean;
    layoutAlgorithm: "sliceAndDice" | "stripes" | "squarified" | "strip"; // Default: "sliceAndDice"
    layoutStartingDirection: "vertical" | "horizontal"; // Default: "vertical"
    levelIsConstant: boolean; // Default: true
    levels: PlotOptionsTreemapLevels;
    opacity: number; // Default: 0.15
    showInLegend: boolean; // Default: "false"
    sortIndex: number;
    states: PlotOptionsTreemapStates;
    tooltip: PlotOptionsTreemapTooltip;
  };
  // plotOptions.variablepie.tooltip
  type PlotOptionsVariablepieTooltip = {
    pointFormat: string; // Default: "<span style=\"color:{point.color}\">●</span> {series.name}<br/>Value: {point.y}<br/>Size: {point.z}<br/>"
  };
  // plotOptions.variablepie
  type PlotOptionsVariablepie = PlotOptionsPie & {
    maxPointSize: string | number; // Default: "100%"
    minPointSize: string | number; // Default: "10%"
    sizeBy: "area" | "radius"; // Default: "area"
    tooltip: PlotOptionsVariablepieTooltip;
    zMax: number;
    zMin: number;
  };
  // plotOptions.variwide
  /** Exclude: boostThreshold,crisp,depth,edgeColor,edgeWidth,groupZPadding */
  type PlotOptionsVariwide = PlotOptionsColumn & {
    groupPadding: any;
    pointPadding: any;
  };
  // plotOptions.vector.states.hover
  type PlotOptionsVectorStatesHover = {
    lineWidthPlus: number; // Default: 1
  };
  // plotOptions.vector.states
  type PlotOptionsVectorStates = {
    hover: PlotOptionsVectorStatesHover;
  };
  // plotOptions.vector.tooltip
  type PlotOptionsVectorTooltip = {
    pointFormat: string; // Default: "<b>[{point.x}, {point.y}]</b><br/>Length: <b>{point.length}</b><br/>Direction: <b>{point.direction}°</b><br/>"
  };
  // plotOptions.vector
  /** Exclude: boostThreshold,marker,connectEnds,connectNulls,cropThreshold,dashStyle,gapSize,gapUnit,dataGrouping,linecap,shadow,stacking,step */
  type PlotOptionsVector = PlotOptionsScatter & {
    lineWidth: number; // Default: 2
    rotationOrigin: "start" | "center" | "end"; // Default: "center"
    states: PlotOptionsVectorStates;
    tooltip: PlotOptionsVectorTooltip;
    vectorLength: number; // Default: 20
  };
  // plotOptions.windbarb.states.hover
  type PlotOptionsWindbarbStatesHover = {
    lineWidthPlus: any;
  };
  // plotOptions.windbarb.states
  type PlotOptionsWindbarbStates = {
    hover: PlotOptionsWindbarbStatesHover;
  };
  // plotOptions.windbarb.tooltip
  type PlotOptionsWindbarbTooltip = {
    pointFormat: string; // Default: "<b>{series.name}</b>: {point.value} ({point.beaufort})<br/>"
  };
  // plotOptions.windbarb
  /** Exclude: boostThreshold,marker,connectEnds,connectNulls,cropThreshold,dashStyle,gapSize,gapUnit,dataGrouping,linecap,shadow,stacking,step */
  type PlotOptionsWindbarb = PlotOptionsColumn & {
    lineWidth: number; // Default: 2
    onSeries: string | null;
    states: PlotOptionsWindbarbStates;
    tooltip: PlotOptionsWindbarbTooltip;
    vectorLength: number; // Default: 20
    yOffset: number; // Default: -20
  };
  // plotOptions.wordcloud.animation
  type PlotOptionsWordcloudAnimation = {
    duration: number; // Default: 500
  };
  // plotOptions.wordcloud.rotation
  type PlotOptionsWordcloudRotation = {
    from: any;
    orientations: number; // Default: 2
    to: number; // Default: 90
  };
  // plotOptions.wordcloud.style
  type PlotOptionsWordcloudStyle = {
    fontFamily: string; // Default: "sans-serif"
    fontWeight: string; // Default: "900"
  };
  // plotOptions.wordcloud.tooltip
  type PlotOptionsWordcloudTooltip = {
    followPointer: boolean; // Default: true
    pointFormat: string; // Default: "<span style=\"color:{point.color}\">●</span> {series.name}: <b>{point.weight}</b><br/>"
  };
  // plotOptions.wordcloud
  /** Exclude: allAreas,boostThreshold,clip,colorAxis,compare,compareBase,crisp,cropTreshold,dataGrouping,dataLabels,depth,edgeColor,findNearestPointBy,getExtremesFromAll,grouping,groupPadding,groupZPadding,joinBy,maxPointWidth,minPointLength,navigatorOptions,negativeColor,pointInterval,pointIntervalUnit,pointPadding,pointPlacement,pointRange,pointStart,pointWidth,pointStart,pointWidth,shadow,showCheckbox,showInNavigator,softThreshold,stacking,threshold,zoneAxis,zones */
  type PlotOptionsWordcloud = PlotOptionsColumn & {
    animation: PlotOptionsWordcloudAnimation;
    borderWidth: any;
    clip: any;
    colorByPoint: boolean; // Default: true
    placementStrategy: string; // Default: "center"
    rotation: PlotOptionsWordcloudRotation;
    showInLegend: any;
    spiral: string; // Default: "rectangular"
    style: PlotOptionsWordcloudStyle; // Default: "{"fontFamily":"sans-serif", "fontWeight": "900"}"
    tooltip: PlotOptionsWordcloudTooltip;
  };
  // plotOptions.xrange.dataLabels
  type PlotOptionsXrangeDataLabels = {
    formatter: any;
    inside: boolean; // Default: true
    verticalAlign: string; // Default: "middle"
  };
  // plotOptions.xrange.tooltip
  type PlotOptionsXrangeTooltip = {
    headerFormat: string; // Default: "<span style=\"font-size: 0.85em\">{point.x} - {point.x2}</span><br/>"
    pointFormat: string; // Default: "<span style=\"color:{point.color}\">●</span> {series.name}: <b>{point.yCategory}</b><br/>"
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
    borderRadius: number; // Default: 3
    colorByPoint: boolean; // Default: true
    data: PlotOptionsXrangeData;
    dataLabels: PlotOptionsXrangeDataLabels;
    partialFill: PlotOptionsXrangePartialFill;
    pointRange: any;
    tooltip: PlotOptionsXrangeTooltip;
  };
  // plotOptions.area
  type PlotOptionsArea = PlotOptionsLine & {
    fillColor: Color; // Default: "null"
    fillOpacity: number;
    lineColor: Color; // Default: "null"
    negativeFillColor: Color;
    softThreshold: boolean; // Default: "false"
    threshold: number; // Default: "0"
    trackByArea: boolean; // Default: "false"
  };
  // plotOptions.areaspline
  /** Exclude: step */
  type PlotOptionsAreaspline = PlotOptionsArea;
  // plotOptions.bar.dataLabels
  type PlotOptionsBarDataLabels = {
    align: string; // Default: "left"
    x: number; // Default: "5"
  };
  // plotOptions.bar
  type PlotOptionsBar = PlotOptionsColumn & {
    dataLabels: PlotOptionsBarDataLabels;
  };
  // plotOptions.candlestick.states.hover
  type PlotOptionsCandlestickStatesHover = PlotOptionsColumnStatesHover & {
    lineWidth: number; // Default: 2
  };
  // plotOptions.candlestick.states
  type PlotOptionsCandlestickStates = {
    hover: PlotOptionsCandlestickStatesHover;
  };
  // plotOptions.candlestick.tooltip
  type PlotOptionsCandlestickTooltip = PlotOptionsOhlcTooltip;
  // plotOptions.candlestick.dataGrouping
  type PlotOptionsCandlestickDataGrouping = {
    approximation: any; // Default: "ohlc"
  };
  // plotOptions.candlestick
  /** Exclude: borderColor,borderRadius,borderWidth */
  type PlotOptionsCandlestick = PlotOptionsOhlc & {
    dataGrouping: PlotOptionsCandlestickDataGrouping;
    lineColor: Color; // Default: "#000000"
    lineWidth: number; // Default: 1
    states: PlotOptionsCandlestickStates;
    stickyTracking: boolean; // Default: true
    threshold: any;
    tooltip: PlotOptionsCandlestickTooltip;
    upColor: Color; // Default: "#ffffff"
    upLineColor: Color; // Default: "null"
  };
  // plotOptions.column.states.hover
  /** Exclude: halo,lineWidth,lineWidthPlus,marker */
  type PlotOptionsColumnStatesHover = PlotOptionsSeriesStatesHover & {
    borderColor: Color;
    brightness: number; // Default: 0.1
    color: Color; // Default: "undefined"
  };
  // plotOptions.column.states.select
  /** Exclude: halo,lineWidth,lineWidthPlus,marker */
  type PlotOptionsColumnStatesSelect = {
    borderColor: Color; // Default: "#000000"
    color: Color; // Default: "#cccccc"
  };
  // plotOptions.column.states
  type PlotOptionsColumnStates = {
    hover: PlotOptionsColumnStatesHover;
    select: PlotOptionsColumnStatesSelect;
  };
  // plotOptions.column.dataLabels
  type PlotOptionsColumnDataLabels = {
    align: any;
    verticalAlign: any;
    y: any;
  };
  // plotOptions.column.tooltip
  type PlotOptionsColumnTooltip = {
    distance: number; // Default: 6
  };
  // plotOptions.column.dataGrouping
  type PlotOptionsColumnDataGrouping = {
    groupPixelWidth: number; // Default: "10"
  };
  // plotOptions.column
  /** Exclude: connectNulls,dashStyle,gapSize,gapUnit,linecap,lineWidth,marker,connectEnds,step */
  type PlotOptionsColumn = PlotOptionsLine & {
    borderColor: Color; // Default: "#ffffff"
    borderRadius: number; // Default: "0"
    borderWidth: number; // Default: "1"
    colorByPoint: boolean; // Default: "false"
    colors: Color[];
    crisp: boolean; // Default: true
    cropThreshold: number; // Default: 50
    dataGrouping: PlotOptionsColumnDataGrouping;
    dataLabels: PlotOptionsColumnDataLabels;
    depth: number; // Default: "25"
    edgeColor: Color;
    edgeWidth: number; // Default: "1"
    groupPadding: number; // Default: 0.2
    groupZPadding: number; // Default: "1"
    grouping: boolean; // Default: "true"
    marker: boolean; // Default: "true"
    maxPointWidth: number; // Default: "null"
    minPointLength: number; // Default: "0"
    pointPadding: number; // Default: 0.1
    pointRange: number; // Default: "null"
    pointWidth: number; // Default: "null"
    softThreshold: boolean;
    states: PlotOptionsColumnStates;
    stickyTracking: any;
    threshold: number; // Default: "0"
    tooltip: PlotOptionsColumnTooltip;
  };
  // plotOptions.flags.tooltip
  /** Exclude: changeDecimals,valueDecimals,valuePrefix,valueSuffix */
  type PlotOptionsFlagsTooltip = PlotOptionsSeriesTooltip & {
    pointFormat: string; // Default: "{point.text}<br/>"
  };
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
    allowOverlapX: any;
    fillColor: string; // Default: "#ffffff"
    lineColor: Color; // Default: "#000000"
    lineWidth: number; // Default: 1
    onKey: "y" | "open" | "high" | "low" | "close"; // Default: "y"
    onSeries: string; // Default: "undefined"
    pointRange: string; // Default: "undefined"
    shape: "flag" | "circlepin" | "squarepin"; // Default: "flag"
    stackDistance: number; // Default: 12
    states: PlotOptionsFlagsStates;
    style: PlotOptionsFlagsStyle; // Default: "{ "fontSize": "11px", "fontWeight": "bold" }"
    textAlign: "left" | "center" | "right"; // Default: "center"
    threshold: any;
    title: string; // Default: "A"
    tooltip: PlotOptionsFlagsTooltip;
    useHTML: boolean; // Default: "false"
    y: number; // Default: -30
  };
  // plotOptions.ohlc.tooltip
  type PlotOptionsOhlcTooltip = {
    pointFormat: any;
  };
  // plotOptions.ohlc.states.hover
  type PlotOptionsOhlcStatesHover = PlotOptionsColumnStatesHover & {
    lineWidth: number; // Default: 3
  };
  // plotOptions.ohlc.states
  type PlotOptionsOhlcStates = {
    hover: PlotOptionsOhlcStatesHover;
  };
  // plotOptions.ohlc.dataGrouping
  type PlotOptionsOhlcDataGrouping = {
    groupPixelWidth: number; // Default: "5"
  };
  // plotOptions.ohlc
  /** Exclude: borderColor,borderRadius,borderWidth,crisp */
  type PlotOptionsOhlc = PlotOptionsColumn & {
    dataGrouping: PlotOptionsOhlcDataGrouping;
    lineWidth: number; // Default: 1
    states: PlotOptionsOhlcStates;
    stickyTracking: Color; // Default: true
    threshold: any;
    tooltip: PlotOptionsOhlcTooltip;
    upColor: Color;
  };
  // plotOptions.pie.dataLabels
  /** Exclude: align,allowOverlap,staggerLines,step */
  type PlotOptionsPieDataLabels = PlotOptionsSeriesDataLabels & {
    connectorColor: string; // Default: "{point.color}"
    connectorPadding: number; // Default: "5"
    connectorWidth: number; // Default: "1"
    distance: number; // Default: 30
    enabled: boolean; // Default: true
    formatter: any;
    softConnector: number;
    x: number;
  };
  // plotOptions.pie.tooltip
  type PlotOptionsPieTooltip = {
    followPointer: boolean; // Default: true
  };
  // plotOptions.pie.states.hover
  type PlotOptionsPieStatesHover = PlotOptionsSeriesStatesHover & {
    brightness: number; // Default: 0.1
    shadow: any;
  };
  // plotOptions.pie.states
  type PlotOptionsPieStates = {
    hover: PlotOptionsPieStatesHover;
  };
  // plotOptions.pie.events
  type PlotOptionsPieEvents = {
    checkboxClick: Function;
    legendItemClick: Function;
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
    borderColor: Color; // Default: "#ffffff"
    borderWidth: number; // Default: 1
    center: (string | number)[]; // Default: "[null, null]"
    clip: any;
    colors: Color[];
    dataLabels: PlotOptionsPieDataLabels;
    depth: number; // Default: "0"
    endAngle: number; // Default: "null"
    events: PlotOptionsPieEvents;
    ignoreHiddenPoint: boolean; // Default: true
    innerSize: string | number; // Default: "0"
    minSize: number; // Default: "80"
    point: PlotOptionsPiePoint;
    showInLegend: boolean;
    size: string | number;
    slicedOffset: number; // Default: 10
    startAngle: number; // Default: "0"
    states: PlotOptionsPieStates;
    stickyTracking: any;
    tooltip: PlotOptionsPieTooltip;
  };
  // plotOptions.scatter.marker
  type PlotOptionsScatterMarker = {
    enabled: boolean; // Default: true
  };
  // plotOptions.scatter.tooltip
  type PlotOptionsScatterTooltip = {
    headerFormat: string; // Default: "<span class=\"highcharts-color-{point.colorIndex}\">●</span> <span class=\"highcharts-header\"> {series.name}</span><br/>"
    pointFormat: string; // Default: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
  };
  // plotOptions.scatter
  type PlotOptionsScatter = PlotOptionsLine & {
    findNearestPointBy: string; // Default: "xy"
    lineWidth: number; // Default: "0"
    marker: PlotOptionsScatterMarker;
    stickyTracking: boolean; // Default: "false"
    tooltip: PlotOptionsScatterTooltip;
  };
  // plotOptions.line
  type PlotOptionsLine = PlotOptionsSeries & {
    linecap: "round" | "butt" | "square"; // Default: "round"
  };
  // plotOptions.spline
  /** Exclude: step */
  type PlotOptionsSpline = PlotOptionsSeries;
  // plotOptions.scatter3d.tooltip
  type PlotOptionsScatter3dTooltip = {
    pointFormat: string; // Default: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>z: <b>{point.z}</b><br/>"
  };
  // plotOptions.scatter3d
  type PlotOptionsScatter3d = PlotOptionsScatter & {
    tooltip: PlotOptionsScatter3dTooltip;
  };
  // plotOptions.arearange.tooltip
  type PlotOptionsArearangeTooltip = {
    pointFormat: string; // Default: "<span style=\"color:{series.color}\">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>"
  };
  // plotOptions.arearange.dataLabels
  /** Exclude: x,y */
  type PlotOptionsArearangeDataLabels = PlotOptionsSeriesDataLabels & {
    align: any;
    verticalAlign: any;
    xHigh: number; // Default: "0"
    xLow: number; // Default: "0"
    yHigh: number; // Default: "-6"
    yLow: number; // Default: "16"
  };
  // plotOptions.arearange
  type PlotOptionsArearange = PlotOptionsArea & {
    dataLabels: PlotOptionsArearangeDataLabels;
    lineWidth: number; // Default: 1
    shadow: boolean | object;
    threshold: any; // Default: "null"
    tooltip: PlotOptionsArearangeTooltip;
    trackByArea: boolean; // Default: true
  };
  // plotOptions.areasplinerange
  /** Exclude: step */
  type PlotOptionsAreasplinerange = PlotOptionsArearange;
  // plotOptions.boxplot.tooltip
  type PlotOptionsBoxplotTooltip = {
    pointFormat: any;
  };
  // plotOptions.boxplot.states.hover
  type PlotOptionsBoxplotStatesHover = {
    brightness: any;
  };
  // plotOptions.boxplot.states
  type PlotOptionsBoxplotStates = {
    hover: PlotOptionsBoxplotStatesHover;
  };
  // plotOptions.boxplot
  type PlotOptionsBoxplot = PlotOptionsColumn & {
    fillColor: Color; // Default: "#ffffff"
    lineWidth: number; // Default: 1
    medianColor: Color; // Default: "null"
    medianWidth: number; // Default: 2
    states: PlotOptionsBoxplotStates;
    stemColor: Color; // Default: "null"
    stemDashStyle: "Solid" | "ShortDash" | "ShortDot" | "ShortDashDot" | "ShortDashDotDot" | "Dot" | "Dash" | "LongDash" | "DashDot" | "LongDashDot" | "LongDashDotDot"; // Default: "Solid"
    stemWidth: number; // Default: "null"
    threshold: any;
    tooltip: PlotOptionsBoxplotTooltip;
    whiskerColor: Color; // Default: "null"
    whiskerLength: number | string; // Default: "50%"
    whiskerWidth: number; // Default: 2
  };
  // plotOptions.bubble.dataLabels
  type PlotOptionsBubbleDataLabels = {
    formatter: any;
    inside: boolean; // Default: true
    verticalAlign: string; // Default: "middle"
  };
  // plotOptions.bubble.marker.states.hover
  type PlotOptionsBubbleMarkerStatesHover = {
    radiusPlus: any;
  };
  // plotOptions.bubble.marker.states
  type PlotOptionsBubbleMarkerStates = {
    hover: PlotOptionsBubbleMarkerStatesHover;
  };
  // plotOptions.bubble.marker
  /** Exclude: enabled,height,radius,width */
  type PlotOptionsBubbleMarker = PlotOptionsSeriesMarker & {
    lineColor: any;
    lineWidth: number; // Default: 1
    radius: any;
    states: PlotOptionsBubbleMarkerStates;
    symbol: "circle" | "square" | "diamond" | "triangle" | "triangle-down"; // Default: "circle"
  };
  // plotOptions.bubble.states.hover.halo
  type PlotOptionsBubbleStatesHoverHalo = {
    size: number; // Default: 5
  };
  // plotOptions.bubble.states.hover
  type PlotOptionsBubbleStatesHover = {
    halo: PlotOptionsBubbleStatesHoverHalo;
  };
  // plotOptions.bubble.states
  type PlotOptionsBubbleStates = {
    hover: PlotOptionsBubbleStatesHover;
  };
  // plotOptions.bubble.tooltip
  type PlotOptionsBubbleTooltip = {
    pointFormat: string; // Default: "({point.x}, {point.y}), Size: {point.z}"
  };
  // plotOptions.bubble
  type PlotOptionsBubble = PlotOptionsScatter & {
    dataLabels: PlotOptionsBubbleDataLabels;
    displayNegative: boolean; // Default: "true"
    marker: PlotOptionsBubbleMarker;
    maxSize: string; // Default: "20%"
    minSize: string; // Default: 8
    negativeColor: Color; // Default: "null"
    sizeBy: "area" | "width"; // Default: "area"
    sizeByAbsoluteValue: boolean; // Default: "false"
    softThreshold: boolean; // Default: "false"
    states: PlotOptionsBubbleStates;
    tooltip: PlotOptionsBubbleTooltip;
    turboThreshold: any;
    zMax: number; // Default: "null"
    zMin: number; // Default: "null"
    zThreshold: number; // Default: "0"
    zoneAxis: string; // Default: "z"
  };
  // plotOptions.columnrange.states
  type PlotOptionsColumnrangeStates = {
    hover: any;
  };
  // plotOptions.columnrange.dataLabels
  type PlotOptionsColumnrangeDataLabels = PlotOptionsArearangeDataLabels;
  // plotOptions.columnrange
  /** Exclude: negativeColor,stacking,softThreshold,threshold */
  type PlotOptionsColumnrange = PlotOptionsColumn & {
    dataLabels: PlotOptionsColumnrangeDataLabels;
    marker: any;
    pointRange: any;
    states: PlotOptionsColumnrangeStates;
  };
  // plotOptions.errorbar.tooltip
  type PlotOptionsErrorbarTooltip = {
    pointFormat: string; // Default: "<span style=\"color:{point.color}\">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>"
  };
  // plotOptions.errorbar
  type PlotOptionsErrorbar = PlotOptionsBoxplot & {
    color: Color; // Default: "#000000"
    grouping: any;
    linkedTo: string; // Default: ":previous"
    tooltip: PlotOptionsErrorbarTooltip;
    whiskerWidth: number; // Default: "null"
  };
  // plotOptions.gauge.dataLabels
  type PlotOptionsGaugeDataLabels = PlotOptionsSeriesDataLabels & {
    borderColor: Color; // Default: "#cccccc"
    borderRadius: number; // Default: 3
    borderWidth: number; // Default: 1
    crop: any;
    defer: any;
    enabled: boolean; // Default: true
    verticalAlign: string; // Default: "top"
    y: number; // Default: 15
    zIndex: number; // Default: 2
  };
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
  // plotOptions.gauge.tooltip
  type PlotOptionsGaugeTooltip = {
    headerFormat: any;
  };
  // plotOptions.gauge
  /** Exclude: animationLimit,boostThreshold,connectEnds,connectNulls,cropThreshold,dashStyle,findNearestPointBy,getExtremesFromAll,marker,pointPlacement,softThreshold,stacking,step,threshold,turboThreshold,zoneAxis,zones */
  type PlotOptionsGauge = PlotOptionsLine & {
    dataLabels: PlotOptionsGaugeDataLabels;
    dial: PlotOptionsGaugeDial;
    overshoot: number; // Default: "0"
    pivot: PlotOptionsGaugePivot;
    showInLegend: boolean;
    tooltip: PlotOptionsGaugeTooltip;
    wrap: boolean; // Default: "true"
  };
  // plotOptions.polygon.marker.states.hover
  type PlotOptionsPolygonMarkerStatesHover = {
    enabled: any;
  };
  // plotOptions.polygon.marker.states
  type PlotOptionsPolygonMarkerStates = {
    hover: PlotOptionsPolygonMarkerStatesHover;
  };
  // plotOptions.polygon.marker
  type PlotOptionsPolygonMarker = {
    enabled: any;
    states: PlotOptionsPolygonMarkerStates;
  };
  // plotOptions.polygon.tooltip
  type PlotOptionsPolygonTooltip = {
    followPointer: boolean; // Default: true
    pointFormat: any;
  };
  // plotOptions.polygon
  /** Exclude: softThreshold,threshold */
  type PlotOptionsPolygon = PlotOptionsScatter & {
    marker: PlotOptionsPolygonMarker;
    stickyTracking: any;
    tooltip: PlotOptionsPolygonTooltip;
    trackByArea: boolean; // Default: true
  };
  // plotOptions.waterfall.dataLabels
  type PlotOptionsWaterfallDataLabels = {
    inside: boolean; // Default: true
  };
  // plotOptions.waterfall.states.hover
  type PlotOptionsWaterfallStatesHover = {
    lineWidthPlus: any;
  };
  // plotOptions.waterfall.states
  type PlotOptionsWaterfallStates = {
    hover: PlotOptionsWaterfallStatesHover;
  };
  // plotOptions.waterfall
  type PlotOptionsWaterfall = PlotOptionsColumn & {
    borderColor: Color; // Default: "#333333"
    dashStyle: string; // Default: "dot"
    dataLabels: PlotOptionsWaterfallDataLabels;
    lineColor: Color; // Default: "#333333"
    lineWidth: number; // Default: 1
    states: PlotOptionsWaterfallStates;
    upColor: Color;
  };
  // plotOptions.heatmap.dataLabels
  type PlotOptionsHeatmapDataLabels = {
    crop: any;
    formatter: any;
    inside: boolean; // Default: true
    overflow: any;
    padding: any;
    verticalAlign: string; // Default: "middle"
  };
  // plotOptions.heatmap.tooltip
  type PlotOptionsHeatmapTooltip = {
    pointFormat: string; // Default: "{point.x}, {point.y}: {point.value}<br/>"
  };
  // plotOptions.heatmap.states.normal
  type PlotOptionsHeatmapStatesNormal = {
    animation: boolean; // Default: true
  };
  // plotOptions.heatmap.states.hover
  type PlotOptionsHeatmapStatesHover = {
    brightness: number; // Default: 0.2
    halo: any;
  };
  // plotOptions.heatmap.states
  type PlotOptionsHeatmapStates = {
    hover: PlotOptionsHeatmapStatesHover;
    normal: PlotOptionsHeatmapStatesNormal;
  };
  // plotOptions.heatmap
  /** Exclude: marker,pointRange */
  type PlotOptionsHeatmap = PlotOptionsScatter & {
    animation: any;
    borderWidth: any;
    color: Color; // Default: "null"
    colsize: number; // Default: "1"
    dataLabels: PlotOptionsHeatmapDataLabels;
    nullColor: Color; // Default: "#f7f7f7"
    pointPadding: number; // Default: "0"
    rowsize: number; // Default: "1"
    states: PlotOptionsHeatmapStates;
    tooltip: PlotOptionsHeatmapTooltip;
  };
  // plotOptions.mapbubble.tooltip
  type PlotOptionsMapbubbleTooltip = {
    pointFormat: string; // Default: "{point.name}: {point.z}"
  };
  // plotOptions.mapbubble
  type PlotOptionsMapbubble = PlotOptionsBubble & {
    animationLimit: number; // Default: 500
    color: Color;
    displayNegative: boolean; // Default: "true"
    maxSize: string; // Default: "20%"
    minSize: string; // Default: "8"
    negativeColor: Color; // Default: "null"
    sizeBy: "area" | "width"; // Default: "area"
    sizeByAbsoluteValue: boolean; // Default: "false"
    tooltip: PlotOptionsMapbubbleTooltip;
    zMax: number; // Default: "null"
    zMin: number; // Default: "null"
    zThreshold: number; // Default: "0"
  };
  // plotOptions.mapline
  type PlotOptionsMapline = PlotOptionsMap & {
    fillColor: Color; // Default: "none"
    lineWidth: number; // Default: 1
  };
  // plotOptions.mappoint.dataLabels.style
  type PlotOptionsMappointDataLabelsStyle = {
    color: string; // Default: "#000000"
  };
  // plotOptions.mappoint.dataLabels
  type PlotOptionsMappointDataLabels = {
    crop: any;
    defer: any;
    enabled: boolean; // Default: true
    format: any; // Default: "{point.name}"
    formatter: any;
    overflow: any;
    style: PlotOptionsMappointDataLabelsStyle;
  };
  // plotOptions.mappoint
  type PlotOptionsMappoint = PlotOptionsScatter & {
    dataLabels: PlotOptionsMappointDataLabels;
  };
  // plotOptions.map.dataLabels
  type PlotOptionsMapDataLabels = {
    crop: any;
    formatter: any;
    inside: boolean; // Default: true
    overflow: any;
    padding: any;
    verticalAlign: string; // Default: "middle"
  };
  // plotOptions.map.tooltip
  type PlotOptionsMapTooltip = {
    followPointer: boolean; // Default: true
    pointFormat: string; // Default: "{point.name}: {point.value}<br/>"
  };
  // plotOptions.map.states.normal
  type PlotOptionsMapStatesNormal = {
    animation: object | boolean; // Default: true
  };
  // plotOptions.map.states.hover
  type PlotOptionsMapStatesHover = {
    brightness: number; // Default: 0.2
    halo: any;
  };
  // plotOptions.map.states.select
  type PlotOptionsMapStatesSelect = {
    color: string; // Default: "#cccccc"
  };
  // plotOptions.map.states
  type PlotOptionsMapStates = {
    hover: PlotOptionsMapStatesHover;
    normal: PlotOptionsMapStatesNormal;
    select: PlotOptionsMapStatesSelect;
  };
  // plotOptions.map
  /** Exclude: marker */
  type PlotOptionsMap = PlotOptionsScatter & {
    allAreas: boolean; // Default: true
    animation: any;
    borderColor: Color; // Default: "#cccccc"
    borderWidth: number; // Default: 1
    dataLabels: PlotOptionsMapDataLabels;
    joinBy: string | string[]; // Default: "hc-key"
    nullColor: Color; // Default: "#f7f7f7"
    nullInteraction: boolean; // Default: "false"
    states: PlotOptionsMapStates;
    stickyTracking: any;
    tooltip: PlotOptionsMapTooltip;
  };
  // plotOptions
  type PlotOptions = {
    ad: PlotOptionsAd;
    area: PlotOptionsArea;
    arearange: PlotOptionsArearange;
    areaspline: PlotOptionsAreaspline;
    areasplinerange: PlotOptionsAreasplinerange;
    atr: PlotOptionsAtr;
    bar: PlotOptionsBar;
    bb: PlotOptionsBb;
    bellcurve: PlotOptionsBellcurve;
    boxplot: PlotOptionsBoxplot;
    bubble: PlotOptionsBubble;
    bullet: PlotOptionsBullet;
    candlestick: PlotOptionsCandlestick;
    cci: PlotOptionsCci;
    cmf: PlotOptionsCmf;
    column: PlotOptionsColumn;
    columnrange: PlotOptionsColumnrange;
    ema: PlotOptionsEma;
    errorbar: PlotOptionsErrorbar;
    flags: PlotOptionsFlags;
    funnel: PlotOptionsFunnel;
    gauge: PlotOptionsGauge;
    heatmap: PlotOptionsHeatmap;
    histogram: PlotOptionsHistogram;
    ikh: PlotOptionsIkh;
    line: PlotOptionsLine;
    macd: PlotOptionsMacd;
    map: PlotOptionsMap;
    mapbubble: PlotOptionsMapbubble;
    mapline: PlotOptionsMapline;
    mappoint: PlotOptionsMappoint;
    mfi: PlotOptionsMfi;
    momentum: PlotOptionsMomentum;
    ohlc: PlotOptionsOhlc;
    pareto: PlotOptionsPareto;
    pie: PlotOptionsPie;
    pivotpoints: PlotOptionsPivotpoints;
    polygon: PlotOptionsPolygon;
    priceenvelopes: PlotOptionsPriceenvelopes;
    psar: PlotOptionsPsar;
    pyramid: PlotOptionsPyramid;
    roc: PlotOptionsRoc;
    rsi: PlotOptionsRsi;
    sankey: PlotOptionsSankey;
    scatter: PlotOptionsScatter;
    scatter3d: PlotOptionsScatter3d;
    series: PlotOptionsSeries;
    sma: PlotOptionsSma;
    solidgauge: PlotOptionsSolidgauge;
    spline: PlotOptionsSpline;
    stochastic: PlotOptionsStochastic;
    streamgraph: PlotOptionsStreamgraph;
    sunburst: PlotOptionsSunburst;
    tilemap: PlotOptionsTilemap;
    treemap: PlotOptionsTreemap;
    variablepie: PlotOptionsVariablepie;
    variwide: PlotOptionsVariwide;
    vbp: PlotOptionsVbp;
    vector: PlotOptionsVector;
    vwap: PlotOptionsVwap;
    waterfall: PlotOptionsWaterfall;
    windbarb: PlotOptionsWindbarb;
    wma: PlotOptionsWma;
    wordcloud: PlotOptionsWordcloud;
    xrange: PlotOptionsXrange;
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
    data: SeriesFunnelData;
  };
  // series.pyramid.data
  /** Exclude: sliced */
  type SeriesPyramidData = SeriesPieData;
  // series.pyramid
  /** Exclude: dataParser,dataURL,stack,xAxis,yAxis */
  type SeriesPyramid = Series & PlotOptionsPyramid & {
    data: SeriesPyramidData;
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
    data: SeriesSankeyData;
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
    name: string; // Default: "undefined"
    sliced: boolean; // Default: "false"
    value: number; // Default: "undefined"
    weight: number; // Default: "undefined"
  };
  // series.sunburst
  /** Exclude: dataParser,dataURL,stack */
  type SeriesSunburst = Series & PlotOptionsSunburst & {
    data: SeriesSunburstData;
  };
  // series.treemap.data
  /** Exclude: x,y */
  type SeriesTreemapData = SeriesHeatmapData & {
    colorValue: number; // Default: "undefined"
    parent: string; // Default: "undefined"
    value: number;
  };
  // series.treemap
  /** Exclude: dataParser,dataURL,stack */
  type SeriesTreemap = Series & PlotOptionsTreemap & {
    data: SeriesTreemapData;
  };
  // series.tilemap.data
  /** Exclude: marker */
  type SeriesTilemapData = SeriesHeatmapData;
  // series.tilemap
  /** Exclude: joinBy,shadow,allAreas,mapData */
  type SeriesTilemap = Series & PlotOptionsTilemap & {
    data: SeriesTilemapData;
  };
  // series.variablepie.data
  /** Exclude: marker,x */
  type SeriesVariablepieData = SeriesPieData;
  // series.variablepie
  /** Exclude: dataParser,dataURL,stack,xAxis,yAxis */
  type SeriesVariablepie = Series & PlotOptionsVariablepie & {
    data: SeriesVariablepieData;
  };
  // series.variwide.data
  /** Exclude: marker */
  type SeriesVariwideData = SeriesLineData & {
    z: number;
  };
  // series.variwide
  type SeriesVariwide = Series & PlotOptionsVariwide & {
    data: SeriesVariwideData;
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
    data: SeriesWordcloudData;
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
    data: SeriesCandlestickData;
  };
  // series.column.states
  type SeriesColumnStates = {
    hover: any;
    select: any;
  };
  // series.column.data
  /** Exclude: marker */
  type SeriesColumnData = SeriesLineData;
  // series.column
  /** Exclude: dataParser,dataURL,marker */
  type SeriesColumn = Series & PlotOptionsColumn & {
    data: SeriesColumnData;
    states: SeriesColumnStates;
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
    data: SeriesFlagsData;
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
    data: SeriesOhlcData;
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
    data: SeriesPieData;
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
    data: SeriesArearangeData;
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
    data: SeriesBoxplotData;
  };
  // series.bubble.data
  /** Exclude: marker */
  type SeriesBubbleData = SeriesLineData & {
    z: number;
  };
  // series.bubble
  /** Exclude: dataParser,dataURL,stack */
  type SeriesBubble = Series & PlotOptionsBubble & {
    data: SeriesBubbleData;
  };
  // series.columnrange.data
  /** Exclude: marker */
  type SeriesColumnrangeData = SeriesArearangeData;
  // series.columnrange
  /** Exclude: dataParser,dataURL,stack */
  type SeriesColumnrange = Series & PlotOptionsColumnrange & {
    data: SeriesColumnrangeData;
  };
  // series.errorbar.data
  /** Exclude: dataLabels,drilldown,marker */
  type SeriesErrorbarData = SeriesArearangeData;
  // series.errorbar
  /** Exclude: dataParser,dataURL,stack */
  type SeriesErrorbar = Series & PlotOptionsErrorbar & {
    data: SeriesErrorbarData;
  };
  // series.gauge.data
  /** Exclude: drilldown,marker,x */
  type SeriesGaugeData = SeriesLineData;
  // series.gauge
  /** Exclude: dataParser,dataURL,stack */
  type SeriesGauge = Series & PlotOptionsGauge & {
    data: SeriesGaugeData;
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
    data: SeriesWaterfallData;
  };
  // series.heatmap.data
  /** Exclude: marker */
  type SeriesHeatmapData = SeriesLineData & {
    color: Color;
    pointPadding: number;
    value: number;
    x: number;
    y: number;
  };
  // series.heatmap
  /** Exclude: dataParser,dataURL,stack */
  type SeriesHeatmap = Series & PlotOptionsHeatmap & {
    data: SeriesHeatmapData;
  };
  // series.mapbubble.data
  /** Exclude: labelrank,middleX,middleY,path,value,x,y,lat,lon */
  type SeriesMapbubbleData = SeriesMappointData & {
    z: number;
  };
  // series.mapbubble
  /** Exclude: dataParser,dataURL */
  type SeriesMapbubble = Series & PlotOptionsMapbubble & {
    data: SeriesMapbubbleData;
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
    data: SeriesMappointData;
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
    ad: SeriesAd;
    area: SeriesArea;
    arearange: SeriesArearange;
    areaspline: SeriesAreaspline;
    areasplinerange: SeriesAreasplinerange;
    atr: SeriesAtr;
    bar: SeriesBar;
    bb: SeriesBb;
    bellcurve: SeriesBellcurve;
    boxplot: SeriesBoxplot;
    bubble: SeriesBubble;
    bullet: SeriesBullet;
    candlestick: SeriesCandlestick;
    cci: SeriesCci;
    cmf: SeriesCmf;
    column: SeriesColumn;
    columnrange: SeriesColumnrange;
    ema: SeriesEma;
    errorbar: SeriesErrorbar;
    flags: SeriesFlags;
    funnel: SeriesFunnel;
    gauge: SeriesGauge;
    heatmap: SeriesHeatmap;
    histogram: SeriesHistogram;
    id: string;
    ikh: SeriesIkh;
    index: number; // Default: "undefined"
    legendIndex: number;
    line: SeriesLine;
    macd: SeriesMacd;
    map: SeriesMap;
    mapData: object[];
    mapbubble: SeriesMapbubble;
    mapline: SeriesMapline;
    mappoint: SeriesMappoint;
    mfi: SeriesMfi;
    momentum: SeriesMomentum;
    name: string;
    ohlc: SeriesOhlc;
    pareto: SeriesPareto;
    pie: SeriesPie;
    pivotpoints: SeriesPivotpoints;
    polygon: SeriesPolygon;
    priceenvelopes: SeriesPriceenvelopes;
    psar: SeriesPsar;
    pyramid: SeriesPyramid;
    roc: SeriesRoc;
    rsi: SeriesRsi;
    sankey: SeriesSankey;
    scatter: SeriesScatter;
    scatter3d: SeriesScatter3d;
    sma: SeriesSma;
    solidgauge: SeriesSolidgauge;
    spline: SeriesSpline;
    stack: string; // Default: "null"
    stochastic: SeriesStochastic;
    streamgraph: SeriesStreamgraph;
    sunburst: SeriesSunburst;
    tilemap: SeriesTilemap;
    treemap: SeriesTreemap;
    type: null | "line" | "spline" | "column" | "area" | "areaspline" | "pie" | "arearange" | "areasplinerange" | "boxplot" | "bubble" | "columnrange" | "errorbar" | "funnel" | "gauge" | "scatter" | "waterfall";
    variablepie: SeriesVariablepie;
    variwide: SeriesVariwide;
    vbp: SeriesVbp;
    vector: SeriesVector;
    vwap: SeriesVwap;
    waterfall: SeriesWaterfall;
    windbarb: SeriesWindbarb;
    wma: SeriesWma;
    wordcloud: SeriesWordcloud;
    xAxis: number | string; // Default: "0"
    xrange: SeriesXrange;
    yAxis: number | string; // Default: "0"
    zIndex: number;
    zigzag: SeriesZigzag;
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
    allowOverlap: any;
    backgroundColor: Color; // Default: "rgba(0, 0, 0, 0.75)"
    borderColor: Color; // Default: "black"
    borderRadius: number; // Default: 1
    borderWidth: number; // Default: 1
    crop: any;
    distance: number; // Default: "undefined"
    format: string; // Default: "undefined"
    formatter: Function; // Default: "function () {\n	return defined(this.y) ? this.y : 'Annotation label';\n}"
    overflow: "none" | "justify"; // Default: "justify"
    padding: number; // Default: 5
    shadow: boolean | object;
    shape: string; // Default: "callout"
    style: AnnotationsLabelOptionsStyle;
    text: string; // Default: "undefined"
    useHTML: boolean; // Default: "false"
    verticalAlign: "top" | "middle" | "bottom"; // Default: "bottom"
    x: any;
    y: number; // Default: -16
  };
  // annotations.shapeOptions
  type AnnotationsShapeOptions = {
    fill: Color; // Default: "rgba(0, 0, 0, 0.75)"
    height: number;
    r: any;
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
    columns: any[][];
    complete: Function;
    csv: string;
    dateFormat: string;
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
    rows: any[][];
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
    enabled: any;
    lineColor: Color; // Default: "#cccccc"
    lineDashStyle: string; // Default: "Solid"
    lineWidth: number; // Default: 4
    x: any;
    y: any;
  };
  // yAxis.labels
  type YAxisLabels = XAxisLabels & {
    align: "left" | "center" | "right";
    distance: number; // Default: "-25"
    x: number; // Default: -8
    y: number;
  };
  // yAxis.title
  type YAxisTitle = XAxisTitle & {
    margin: number; // Default: "40"
    rotation: number; // Default: 270
    text: string; // Default: "Values"
  };
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
    allowOverlap: any;
    enabled: any;
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
    enabled: boolean; // Default: "false"
    margin: number; // Default: "10"
    showFull: boolean; // Default: "true"
    size: number; // Default: "14"
    zIndex: number; // Default: "3"
  };
  // yAxis
  /** Exclude: ordinal,overscroll */
  type YAxis = XAxis & {
    angle: number; // Default: "0"
    endOnTick: boolean; // Default: true
    gridLineInterpolation: "circle" | "polygon"; // Default: "null"
    gridLineWidth: number; // Default: 1
    height: number | string; // Default: "null"
    labels: YAxisLabels;
    lineColor: any;
    lineWidth: any;
    max: any;
    maxColor: Color; // Default: "#003399"
    maxLength: string | number; // Default: "100%"
    maxPadding: number; // Default: 0.05
    min: any;
    minColor: Color; // Default: "#e6ebf5"
    minLength: number | string; // Default: "10%"
    minPadding: number; // Default: 0.05
    opposite: any;
    plotBands: YAxisPlotBands;
    plotLines: YAxisPlotLines;
    resize: YAxisResize;
    reversedStacks: boolean; // Default: "true"
    scrollbar: YAxisScrollbar;
    showLastLabel: boolean; // Default: true
    softMax: number;
    softMin: number;
    stackLabels: YAxisStackLabels;
    startOnTick: boolean; // Default: true
    stops: any[][];
    tickPixelInterval: number; // Default: 72
    tickWidth: number; // Default: "0"
    title: YAxisTitle;
    tooltipValueFormat: any; // Default: "undefined"
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
  type ChartParallelAxesTitle = {
    reserveSpace: any;
    text: any;
  };
  // chart.parallelAxes.labels
  type ChartParallelAxesLabels = {
    align: string; // Default: "center"
    reserveSpace: any;
    x: any;
    y: number; // Default: 4
  };
  // chart.parallelAxes
  /** Exclude: alternateGridColor,breaks,id,gridLineColor,gridLineDashStyle,gridLineWidth,minorGridLineColor,minorGridLineDashStyle,minorGridLineWidth,plotBands,plotLines,angle,gridLineInterpolation,maxColor,maxZoom,minColor,scrollbar,stackLabels,stops */
  type ChartParallelAxes = YAxis & {
    labels: ChartParallelAxesLabels;
    lineWidth: number; // Default: 1
    offset: any;
    title: ChartParallelAxesTitle;
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
    alpha: number; // Default: "0"
    axisLabelPosition: null | "auto"; // Default: "default"
    beta: number; // Default: "0"
    depth: number; // Default: 100
    enabled: boolean; // Default: "false"
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
    borderRadius: number; // Default: "0"
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
    parallelAxes: ChartParallelAxes;
    parallelCoordinates: any;
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
    symbolFill: Color; // Default: "#666666"
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
    showTable: any;
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
    borderRadius: number; // Default: "0"
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
    shadow: boolean | object; // Default: "false"
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
    x: number; // Default: "0"
    y: number; // Default: "0"
  };
  // noData.position
  type NoDataPosition = {
    align: "left" | "center" | "right"; // Default: "center"
    verticalAlign: "top" | "middle" | "bottom"; // Default: "middle"
    x: number; // Default: "0"
    y: number; // Default: "0"
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
    pointDescriptionThreshold: number | boolean;
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
    position3d: string; // Default: "offset"
    reserveSpace: boolean; // Default: "null"
    rotation: number; // Default: "0"
    skew3d: any;
    staggerLines: number; // Default: "null"
    step: number; // Default: "null"
    style: XAxisLabelsStyle;
    useHTML: boolean; // Default: "false"
    x: any;
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
    position3d: string;
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
    endOnTick: any;
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
    startOnTick: any;
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
  type NavigatorSeriesDataGrouping = PlotOptionsSeriesDataGrouping & {
    approximation: string; // Default: "average"
    enabled: boolean; // Default: true
    groupPixelWidth: number; // Default: 2
    smoothed: boolean; // Default: true
    units: any;
  };
  // navigator.series.dataLabels
  type NavigatorSeriesDataLabels = PlotOptionsSeriesDataLabels & {
    enabled: any;
    zIndex: number; // Default: 2
  };
  // navigator.series.marker
  type NavigatorSeriesMarker = {
    enabled: any;
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
    pointRange: any;
    threshold: number;
    type: string;
  };
  // navigator.xAxis.labels.style
  type NavigatorXAxisLabelsStyle = {
    color: string; // Default: "#999999"
  };
  // navigator.xAxis.labels
  type NavigatorXAxisLabels = {
    align: string; // Default: "left"
    style: NavigatorXAxisLabelsStyle;
    x: number; // Default: 3
    y: number; // Default: -4
  };
  // navigator.xAxis
  /** Exclude: linkedTo,maxZoom,minRange,opposite,range,scrollbar,showEmpty,maxRange */
  type NavigatorXAxis = XAxis & {
    className: string; // Default: "highcharts-navigator-xaxis"
    crosshair: any;
    gridLineColor: string; // Default: "#e6e6e6"
    gridLineWidth: number; // Default: 1
    labels: NavigatorXAxisLabels;
    lineWidth: any;
    overscroll: number; // Default: "0"
    tickLength: any;
    tickPixelInterval: number; // Default: 200
  };
  // navigator.yAxis.labels
  type NavigatorYAxisLabels = {
    enabled: any;
  };
  // navigator.yAxis.title
  type NavigatorYAxisTitle = {
    text: any;
  };
  // navigator.yAxis
  /** Exclude: height,linkedTo,maxZoom,minRange,ordinal,range,showEmpty,scrollbar,top,units,maxRange */
  type NavigatorYAxis = YAxis & {
    className: string; // Default: "highcharts-navigator-yaxis"
    crosshair: any;
    endOnTick: any;
    gridLineWidth: any;
    labels: NavigatorYAxisLabels;
    maxPadding: number; // Default: 0.1
    minPadding: number; // Default: 0.1
    startOnTick: any;
    tickLength: any;
    tickWidth: any;
    title: NavigatorYAxisTitle;
  };
  // navigator
  type Navigator = {
    adaptToUpdatedData: boolean; // Default: "true"
    baseSeries: any; // Default: "0"
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
    xAxis: NavigatorXAxis;
    yAxis: NavigatorYAxis;
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
    text: string;
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
    crosshairs: any; // Default: "true"
    dateTimeLabelFormats: TooltipDateTimeLabelFormats;
    enabled: boolean; // Default: true
    followPointer: boolean;
    followTouchMove: boolean;
    footerFormat: any;
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
    undefined: any;
    width: number; // Default: 28
    zIndex: number; // Default: 7
  };
  // rangeSelector.inputPosition
  type RangeSelectorInputPosition = {
    align: "left" | "center" | "right"; // Default: "right"
    x: any;
    y: any;
  };
  // rangeSelector.buttonPosition
  type RangeSelectorButtonPosition = {
    align: "left" | "center" | "right"; // Default: "left"
    x: any;
    y: any;
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
    floating: any;
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
    x: any;
    y: any;
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
    barBorderRadius: number; // Default: "0"
    barBorderWidth: number; // Default: 1
    buttonArrowColor: Color; // Default: "#333333"
    buttonBackgroundColor: Color; // Default: "#e6e6e6"
    buttonBorderColor: Color; // Default: "#cccccc"
    buttonBorderRadius: number; // Default: "0"
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
    x1: any;
    x2: any;
    y1: any;
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
    innerRadius: number | string; // Default: "0"
    outerRadius: number | string; // Default: "105%"
    shape: "solid" | "arc"; // Default: "circle"
  };
  // pane
  type Pane = {
    background: PaneBackground;
    center: (string | number)[]; // Default: "["50%", "50%"]"
    endAngle: number;
    size: number | string; // Default: "85%"
    startAngle: number;
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
  type ColorAxisLabels = XAxisLabels & {
    overflow: null | "justify"; // Default: "justify"
    rotation: any;
  };
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
    allowDecimals: boolean; // Default: "true"
    dataClassColor: "tween" | "category"; // Default: "tween"
    dataClasses: ColorAxisDataClasses;
    endOnTick: boolean; // Default: true
    gridLineColor: Color; // Default: "#e6e6e6"
    gridLineWidth: number; // Default: 1
    labels: ColorAxisLabels;
    marker: ColorAxisMarker;
    max: number;
    maxColor: Color; // Default: "#003399"
    maxPadding: number;
    min: number;
    minColor: Color; // Default: "#e6ebf5"
    minPadding: number;
    reversed: boolean;
    showInLegend: boolean; // Default: true
    startOnTick: boolean; // Default: true
    stops: any[][];
    tickInterval: number;
    tickLength: number; // Default: 5
    tickPixelInterval: number; // Default: 72
    type: "linear" | "logarithmic"; // Default: "linear"
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
    x: number; // Default: "0"
  };
  // mapNavigation.buttons.zoomIn
  type MapNavigationButtonsZoomIn = MapNavigationButtonOptions & {
    onclick: Function;
    text: string; // Default: "+"
    y: number; // Default: "0"
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
    colorAxis: ColorAxis;
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
    yAxis: YAxis;
    zAxis: ZAxis;
  };
}