import React, {ReactNode} from 'react';
import {
  GestureResponderEvent,
  ScrollViewProps,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {TColor, TSpacing} from '../../types/styleTypes';
import {
  Colors,
  DEFAULT_SCROLL_VIEW_PROPS,
  IS_IOS,
  STDSpacing,
} from '../../styles/common';
import {debounce} from 'underscore';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {memo} from 'react';

const DEFAULT_DEBOUNCE_TIME = 500;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
});

type AtomViewProps = ViewProps &
  TouchableOpacityProps & {
    children?: ReactNode;
    onPress?: () => void;
    flex?: ViewStyle['flex'];
    flexDirection?: ViewStyle['flexDirection'];
    flexWrap?: ViewStyle['flexWrap'];
    justifyContent?: ViewStyle['justifyContent'];
    alignItems?: ViewStyle['alignItems'];
    backgroundColor?: TColor;
    width?: ViewStyle['width'];
    height?: ViewStyle['height'];
    borderColor?: TColor;
    borderWidth?: number;
    borderRadius?: TSpacing;
    activeOpacity?: TouchableOpacityProps['activeOpacity'];
    opacity?: ViewStyle['opacity'];
    position?: ViewStyle['position'];
    top?: ViewStyle['top'];
    bottom?: ViewStyle['bottom'];
    right?: ViewStyle['right'];
    left?: ViewStyle['left'];
    zIndex?: ViewStyle['zIndex'];
    hasShadow?: boolean;
    shadowColor?: TColor;
    pL?: TSpacing;
    pR?: TSpacing;
    pT?: TSpacing;
    pB?: TSpacing;
    pAll?: TSpacing;
    pH?: TSpacing;
    pV?: TSpacing;
    mL?: TSpacing;
    mR?: TSpacing;
    mT?: TSpacing;
    mB?: TSpacing;
    mAll?: TSpacing;
    mH?: TSpacing;
    mV?: TSpacing;
    debounceTime?: number;
    scroll?: boolean;
    scrollViewProps?: ScrollViewProps;
    horizontal?: boolean;
  };

const AtomView = memo(
  ({
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
    mAll,
    mB,
    mH,
    mL,
    mR,
    mT,
    mV,
    backgroundColor,
    flex,
    flexWrap,
    flexDirection,
    justifyContent,
    alignItems,
    position,
    zIndex,
    width,
    height,
    top,
    right,
    bottom,
    left,
    activeOpacity = 0.7,
    opacity,
    debounceTime = DEFAULT_DEBOUNCE_TIME,
    scroll,
    scrollViewProps,
    horizontal,
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

    if (mL) {
      viewStyle = {...viewStyle, marginLeft: STDSpacing[mL]};
    }
    if (mR) {
      viewStyle = {...viewStyle, marginRight: STDSpacing[mR]};
    }
    if (mT) {
      viewStyle = {...viewStyle, marginTop: STDSpacing[mT]};
    }
    if (mB) {
      viewStyle = {...viewStyle, marginBottom: STDSpacing[mB]};
    }
    if (mAll) {
      viewStyle = {...viewStyle, margin: STDSpacing[mAll]};
    }
    if (mH) {
      viewStyle = {...viewStyle, marginHorizontal: STDSpacing[mH]};
    }
    if (mV) {
      viewStyle = {...viewStyle, marginVertical: STDSpacing[mV]};
    }

    if (zIndex) {
      viewStyle = {...viewStyle, zIndex};
    }

    if (backgroundColor) {
      viewStyle = {...viewStyle, backgroundColor: Colors[backgroundColor]};
    }

    if (flexDirection) {
      viewStyle = {...viewStyle, flexDirection};
    }

    if (alignItems) {
      viewStyle = {...viewStyle, alignItems};
    }

    if (justifyContent) {
      viewStyle = {...viewStyle, justifyContent};
    }

    if (flex) {
      viewStyle = {...viewStyle, flex};
    }

    if (flexWrap) {
      viewStyle = {...viewStyle, flexWrap};
    }

    if (width) {
      viewStyle = {...viewStyle, width};
    }

    if (height) {
      viewStyle = {...viewStyle, height};
    }

    if (borderRadius) {
      viewStyle = {...viewStyle, borderRadius: STDSpacing[borderRadius]};
    }

    if (opacity) {
      viewStyle = {...viewStyle, opacity};
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

    const handleOnPress = (event: GestureResponderEvent) =>
      debouncedPress(event);

    const renderBody = () => (
      <View style={[style, {...viewStyle}]} {...rest}>
        {children}
      </View>
    );

    if (scroll) {
      return (
        <KeyboardAwareScrollView
          horizontal={horizontal}
          contentContainerStyle={styles.contentContainerStyle}
          {...DEFAULT_SCROLL_VIEW_PROPS}
          style={[styles.container, scrollViewProps && scrollViewProps.style]}
          keyboardShouldPersistTaps={'handled'}
          enableOnAndroid={true}
          extraHeight={IS_IOS ? 180 : undefined}>
          {renderBody()}
        </KeyboardAwareScrollView>
      );
    }

    return onPress ? (
      <TouchableOpacity
        {...rest}
        style={[style, {...viewStyle}]}
        onPress={handleOnPress}
        activeOpacity={activeOpacity}>
        {children}
      </TouchableOpacity>
    ) : (
      renderBody()
    );
  },
);

export {AtomView};
