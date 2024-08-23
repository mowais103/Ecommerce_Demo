import React, {ReactNode} from 'react';
import {
  GestureResponderEvent,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {TColor, TSpacing} from '../../types/common';
import {Colors, STDSpacing} from '../../styles/common';
import {debounce} from 'underscore';

const DEFAULT_DEBOUNCE_TIME = 100;

type AtomViewProps = ViewProps &
  TouchableOpacityProps & {
    children?: ReactNode;
    onPress?: () => void;
    flex?: ViewStyle['flex'];
    flexDirection?: ViewStyle['flexDirection'];
    justifyContent?: ViewStyle['justifyContent'];
    alignItems?: ViewStyle['alignItems'];
    backgroundColor?: TColor;
    width?: ViewStyle['width'];
    height?: ViewStyle['height'];
    borderColor?: TColor;
    borderWidth?: number;
    borderRadius?: TSpacing;
    activeOpacity?: TouchableOpacityProps['activeOpacity'];
    position?: ViewStyle['position'];
    top?: ViewStyle['top'];
    bottom?: ViewStyle['bottom'];
    right?: ViewStyle['right'];
    left?: ViewStyle['left'];
    hasShadow?: boolean;
    shadowColor?: TColor;
    pL?: TSpacing;
    pR?: TSpacing;
    pT?: TSpacing;
    pB?: TSpacing;
    pAll?: TSpacing;
    pH?: TSpacing;
    pV?: TSpacing;
    debounceTime?: number;
  };

const AtomView = ({
  children,
  onPress,
  borderColor,
  borderWidth,
  borderRadius,
  pL,
  pB,
  pAll,
  pR,
  pV,
  pH,
  pT,
  backgroundColor,
  position,
  top,
  right,
  bottom,
  left,
  activeOpacity = 0.7,
  debounceTime = DEFAULT_DEBOUNCE_TIME,
  style,
  ...rest
}: AtomViewProps) => {
  let viewStyle: ViewStyle = {};

  if (pL) {
    viewStyle = {paddingLeft: STDSpacing[pL]};
  }
  if (pR) {
    viewStyle = {...viewStyle, paddingRight: STDSpacing[pR]};
  }
  if (pT) {
    viewStyle = {...viewStyle, paddingTop: STDSpacing[pT]};
  }
  if (pB) {
    viewStyle = {...viewStyle, paddingBottom: STDSpacing[pB]};
  }
  if (pAll) {
    viewStyle = {...viewStyle, padding: STDSpacing[pAll]};
  }
  if (pH) {
    viewStyle = {...viewStyle, paddingHorizontal: STDSpacing[pH]};
  }
  if (pV) {
    viewStyle = {...viewStyle, paddingVertical: STDSpacing[pV]};
  }
  if (backgroundColor) {
    viewStyle = {...viewStyle, backgroundColor: Colors[backgroundColor]};
  }
  if (borderRadius) {
    viewStyle = {...viewStyle, borderRadius: STDSpacing[borderRadius]};
  }

  if (position) {
    viewStyle = {
      ...viewStyle,
      position,
      right: right,
      left: left,
      bottom: bottom,
      top: top,
    };
  }
  if (borderColor) {
    viewStyle = {
      ...viewStyle,
      borderColor,
      borderWidth: borderWidth ?? 1,
    };
  }

  const debouncedPress = debounce(
    (event: GestureResponderEvent) => {
      onPress ? onPress(event) : () => null;
    },
    debounceTime || DEFAULT_DEBOUNCE_TIME, // to satisfy TypeScript
    true,
  );

  const handleOnPress = (event: GestureResponderEvent) => debouncedPress(event);

  if (onPress) {
    return (
      <TouchableOpacity
        style={[style, viewStyle]}
        {...rest}
        onPress={handleOnPress}
        activeOpacity={activeOpacity}>
        {children}
      </TouchableOpacity>
    );
  }

  return <View>{children}</View>;
};

export {AtomView};
