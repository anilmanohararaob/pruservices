import React from 'react';
import {
  ImageStyle,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';
import SvgIcon from './SvgIcon';

export interface IconProps {
  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle>;

  /**
   * Style overrides for the icon container
   */

  containerStyle?: StyleProp<ViewStyle>;

  /**
   * The name of the icon
   */

  icon?: null;
  name?: string;
  image?: any;
  size?: number;
  type?: string;
  onPress?: any;
  primaryColor?: string;
  secondaryColor?: string;
  opacity?: string;
  disable?:boolean
}
const Icon: React.FC<IconProps> = (props: any) => {

  return (
      <Pressable onPress={props?.onPress} disabled={props?.disable || false}>
          <SvgIcon
            size={props?.size}
            name={props.name}
            primaryColor={props?.primaryColor}
            secondaryColor={props?.secondaryColor}
            opacity={props?.opacity}
          />
      </Pressable>
  );
};
export default Icon;
