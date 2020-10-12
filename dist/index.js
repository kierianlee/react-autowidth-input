Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function mergeRefs(refs) {
    return function (value) {
        refs.forEach(function (ref) {
            if (typeof ref === "function") {
                ref(value);
            }
            else if (ref != null) {
                ref.current = value;
            }
        });
    };
}
var sizerStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    visibility: "hidden",
    height: 0,
    overflow: "scroll",
    whiteSpace: "pre",
};
/**
 * Automatically sized input field.
 */
var AutowidthInput = React.forwardRef(function (_a, forwardedRef) {
    var _b, _c, _d;
    var _e = _a.extraWidth, extraWidth = _e === void 0 ? 16 : _e, wrapperClassName = _a.wrapperClassName, wrapperStyleProp = _a.wrapperStyle, onAutosize = _a.onAutosize, placeholderIsMinWidth = _a.placeholderIsMinWidth, props = __rest(_a, ["extraWidth", "wrapperClassName", "wrapperStyle", "onAutosize", "placeholderIsMinWidth"]);
    var inputRef = React.useRef(null);
    var sizerRef = React.useRef(null);
    var placeholderSizerRef = React.useRef(null);
    var _f = React.useState(""), input = _f[0], setInput = _f[1];
    var _g = React.useState(0), inputWidth = _g[0], setInputWidth = _g[1];
    var usedValue = (_b = props.value) !== null && _b !== void 0 ? _b : input;
    var handleInput = function (e) {
        setInput(e.target.value);
        if (props.onChange)
            props.onChange(e);
    };
    /* Copy styles of the input field to the sizer, ensuring that the width of the input adjusts accordingly */
    React.useLayoutEffect(function () {
        if (inputRef.current && sizerRef.current) {
            var computedStyle = window.getComputedStyle(inputRef.current);
            sizerRef.current.style.fontSize = computedStyle.fontSize;
            sizerRef.current.style.fontFamily = computedStyle.fontFamily;
            sizerRef.current.style.fontWeight = computedStyle.fontWeight;
            sizerRef.current.style.fontStyle = computedStyle.fontStyle;
            sizerRef.current.style.letterSpacing =
                computedStyle.letterSpacing;
            sizerRef.current.style.textTransform =
                computedStyle.textTransform;
        }
    }, []);
    React.useEffect(function () {
        var _a, _b;
        var sizerWidth = (_a = sizerRef.current) === null || _a === void 0 ? void 0 : _a.scrollWidth;
        var placeholderWidth = (_b = placeholderSizerRef.current) === null || _b === void 0 ? void 0 : _b.scrollWidth;
        if (sizerWidth && usedValue.length) {
            /* If the input field has content, update the sizer to match its width  */
            var width = sizerWidth;
            if (placeholderIsMinWidth &&
                placeholderWidth &&
                sizerWidth < placeholderWidth &&
                placeholderSizerRef.current) {
                width = placeholderWidth;
            }
            if (width) {
                setInputWidth(width + +extraWidth);
                if (onAutosize)
                    onAutosize(width);
            }
        }
        else if (props.placeholder && placeholderWidth) {
            /* If no input value exists, check for placeholder value and update the sizer accordingly  */
            setInputWidth(placeholderWidth + +extraWidth);
            if (onAutosize)
                onAutosize(placeholderWidth);
        }
        else if (sizerRef.current) {
            /* If no input value or placeholder exists, update the sizer to the width of the "extraWidth" prop (default is 16) */
            setInputWidth(+extraWidth);
            if (onAutosize)
                onAutosize(+extraWidth);
        }
    }, [
        usedValue,
        props.placeholder,
        extraWidth,
        placeholderIsMinWidth,
        onAutosize,
        setInputWidth,
    ]);
    var wrapperStyle = __assign(__assign({}, wrapperStyleProp), { position: "relative", display: (_d = (_c = props.style) === null || _c === void 0 ? void 0 : _c.display) !== null && _d !== void 0 ? _d : "inline-block" });
    var inputStyle = __assign({ boxSizing: "content-box", width: inputWidth }, props.style);
    return (React__default['default'].createElement("div", { className: wrapperClassName, style: wrapperStyle, "data-testid": "wrapper" },
        React__default['default'].createElement("div", { style: sizerStyle, ref: sizerRef, "data-testid": "sizer" }, usedValue),
        React__default['default'].createElement("input", __assign({}, props, { ref: mergeRefs([inputRef, forwardedRef]), value: usedValue, style: inputStyle, onChange: handleInput, "data-testid": "input" })),
        props.placeholder ? (React__default['default'].createElement("div", { ref: placeholderSizerRef, style: sizerStyle, "data-testid": "placeholder-sizer" }, props.placeholder)) : null));
});
AutowidthInput.propTypes = {
    className: PropTypes__default['default'].string,
    defaultValue: PropTypes__default['default'].any,
    extraWidth: PropTypes__default['default'].oneOfType([
        // additional width for input element
        PropTypes__default['default'].number,
        PropTypes__default['default'].string,
    ]),
    id: PropTypes__default['default'].string,
    wrapperClassName: PropTypes__default['default'].string,
    wrapperStyle: PropTypes__default['default'].object,
    minWidth: PropTypes__default['default'].oneOfType([
        // minimum width for input element
        PropTypes__default['default'].number,
        PropTypes__default['default'].string,
    ]),
    onAutosize: PropTypes__default['default'].func,
    onChange: PropTypes__default['default'].func,
    placeholder: PropTypes__default['default'].string,
    placeholderIsMinWidth: PropTypes__default['default'].bool,
    style: PropTypes__default['default'].object,
    value: PropTypes__default['default'].string,
};

exports.default = AutowidthInput;
//# sourceMappingURL=index.js.map
