import React from 'react';
import { Pressable } from 'react-native';
import SvgIcon from './SvgIcon';
const Icon = props => {
  return /*#__PURE__*/React.createElement(Pressable, {
    onPress: props === null || props === void 0 ? void 0 : props.onPress,
    disabled: (props === null || props === void 0 ? void 0 : props.disable) || false
  }, /*#__PURE__*/React.createElement(SvgIcon, {
    size: props === null || props === void 0 ? void 0 : props.size,
    name: props.name,
    primaryColor: props === null || props === void 0 ? void 0 : props.primaryColor,
    secondaryColor: props === null || props === void 0 ? void 0 : props.secondaryColor,
    opacity: props === null || props === void 0 ? void 0 : props.opacity
  }));
};
export default Icon;
//# sourceMappingURL=Icon.js.map