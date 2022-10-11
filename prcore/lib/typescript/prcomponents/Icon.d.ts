import React from 'react';
import { ImageStyle, StyleProp, ViewStyle } from 'react-native';
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
    disable?: boolean;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
