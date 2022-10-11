"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _SvgIcon = _interopRequireDefault(require("./SvgIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Icon = props => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    onPress: props === null || props === void 0 ? void 0 : props.onPress,
    disabled: (props === null || props === void 0 ? void 0 : props.disable) || false
  }, /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
    size: props === null || props === void 0 ? void 0 : props.size,
    name: props.name,
    primaryColor: props === null || props === void 0 ? void 0 : props.primaryColor,
    secondaryColor: props === null || props === void 0 ? void 0 : props.secondaryColor,
    opacity: props === null || props === void 0 ? void 0 : props.opacity
  }));
};
var _default = Icon;
exports.default = _default;
//# sourceMappingURL=Icon.js.map