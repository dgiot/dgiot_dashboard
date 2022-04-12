"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YearRangeControlRenderer = void 0;
var tslib_1 = require("tslib");
var react_1 = (0, tslib_1.__importDefault)(require("react"));
var Item_1 = require("./Item");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var tpl_builtin_1 = require("../../utils/tpl-builtin");
var InputDateRange_1 = (0, tslib_1.__importDefault)(require("./InputDateRange"));
var DateRangePicker_1 = (0, tslib_1.__importDefault)(require("../../components/DateRangePicker"));
var YearRangeControl = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(YearRangeControl, _super);
    function YearRangeControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YearRangeControl.prototype.render = function () {
        var _a = this.props, className = _a.className, ns = _a.classPrefix, defaultValue = _a.defaultValue, defaultData = _a.defaultData, minDate = _a.minDate, maxDate = _a.maxDate, minDuration = _a.minDuration, maxDuration = _a.maxDuration, data = _a.data, format = _a.format, rest = (0, tslib_1.__rest)(_a, ["className", "classPrefix", "defaultValue", "defaultData", "minDate", "maxDate", "minDuration", "maxDuration", "data", "format"]);
        return (react_1.default.createElement("div", { className: (0, classnames_1.default)(ns + "DateRangeControl", className) },
            react_1.default.createElement(DateRangePicker_1.default, (0, tslib_1.__assign)({ viewMode: "years", format: "YYYY", inputFormat: "YYYY", placeholder: "YearRange.placeholder", ranges: "thisyear,lastYear", classPrefix: ns, data: data }, rest, { minDate: minDate ? (0, tpl_builtin_1.filterDate)(minDate, data, format) : undefined, maxDate: maxDate ? (0, tpl_builtin_1.filterDate)(maxDate, data, format) : undefined, minDuration: minDuration ? (0, tpl_builtin_1.parseDuration)(minDuration) : undefined, maxDuration: maxDuration ? (0, tpl_builtin_1.parseDuration)(maxDuration) : undefined }))));
    };
    return YearRangeControl;
}(InputDateRange_1.default));
exports.default = YearRangeControl;
var YearRangeControlRenderer = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(YearRangeControlRenderer, _super);
    function YearRangeControlRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YearRangeControlRenderer.defaultProps = {
        format: 'X',
        joinValues: true,
        delimiter: ',',
        timeFormat: '',
        inputFormat: 'YYYY',
        dateFormat: 'YYYY'
    };
    YearRangeControlRenderer = (0, tslib_1.__decorate)([
        (0, Item_1.FormItem)({
            type: 'input-year-range'
        })
    ], YearRangeControlRenderer);
    return YearRangeControlRenderer;
}(YearRangeControl));
exports.YearRangeControlRenderer = YearRangeControlRenderer;
//# sourceMappingURL=./renderers/Form/InputYearRange.js.map
