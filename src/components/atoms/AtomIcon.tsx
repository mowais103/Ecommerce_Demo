import React from 'react';
import {
  Image,
  ImageProps,
  ImageStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {TIcons, TIconSize, TSpacing} from '../../types/common';
import {getIconDims} from '../../lib/utils';
import {Icons} from '../../assets/icons';
import {STDSpacing} from '../../styles/common';
import {AtomView} from './AtomView';

type AppIconProps = Omit<ImageProps, 'source'> & {
  icon: TIcons;
  style?: ImageStyle;
  onPress?: () => void;
  size?: TIconSize;
  mAll?: TSpacing;
  mB?: TSpacing;
  mH?: TSpacing;
  mL?: TSpacing;
  mR?: TSpacing;
  mT?: TSpacing;
  mV?: TSpacing;
  alignSelf?: ViewStyle['alignSelf'];
};

const AtomIcon = ({
  resizeMode = 'contain',
  icon,
  style,
  onPress,
  mAll,
  mB,
  mH,
  mL,
  mR,
  mT,
  mV,
  alignSelf,
  size,
  ...rest
}: AppIconProps) => {
  let otherStyle: ViewStyle = {};

  if (mL) {
    otherStyle = {...otherStyle, marginLeft: STDSpacing[mL]};
  }
  if (mR) {
    otherStyle = {...otherStyle, marginRight: STDSpacing[mR]};
  }
  if (mT) {
    otherStyle = {...otherStyle, marginTop: STDSpacing[mT]};
  }
  if (mB) {
    otherStyle = {...otherStyle, marginBottom: STDSpacing[mB]};
  }
  if (mAll) {
    otherStyle = {...otherStyle, margin: STDSpacing[mAll]};
  }
  if (mH) {
    otherStyle = {...otherStyle, marginHorizontal: STDSpacing[mH]};
  }
  if (mV) {
    otherStyle = {...otherStyle, marginVertical: STDSpacing[mV]};
  }

  if (alignSelf) {
    otherStyle = {...otherStyle, alignSelf};
  }

  let iconStyle = [];

  if (size) {
    iconStyle.push(getIconDims(size));
  } else {
    iconStyle.push(style);
  }

  if (onPress) {
    return (
      <TouchableOpacity
        style={[style, ...iconStyle, {...otherStyle}]}
        hitSlop={20}
        {...rest}
        activeOpacity={0.7}
        onPress={onPress}>
        <Image
          resizeMode={resizeMode}
          style={[...iconStyle, style]}
          source={Icons[icon]}
          {...rest}
        />
      </TouchableOpacity>
    );
  }

  return (
    <AtomView style={{...otherStyle}}>
      <Image
        resizeMode={resizeMode}
        style={[style, ...iconStyle]}
        source={Icons[icon]}
        {...rest}
      />
    </AtomView>
  );
};

export {AtomIcon};
