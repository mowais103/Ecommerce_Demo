import React from 'react';
import {Image, ImageProps, ImageStyle, TouchableOpacity} from 'react-native';
import {TIcons, TIconSize} from '../../types/common';
import {getIconDims} from '../../lib/utils';
import {Icons} from '../../assets/icons';

type AppIconProps = Omit<ImageProps, 'source'> & {
  icon: TIcons;
  style?: ImageStyle;
  onPress?: () => void;
  size?: TIconSize;
};

const AtomIcon = ({
  resizeMode = 'contain',
  icon,
  style,
  onPress,
  size,
  ...rest
}: AppIconProps) => {
  let iconStyle = [];

  if (size) {
    iconStyle.push(getIconDims(size));
  } else {
    iconStyle.push(style);
  }

  if (onPress) {
    return (
      <TouchableOpacity
        style={[style, {...iconStyle}]}
        hitSlop={20}
        {...rest}
        activeOpacity={0.7}
        onPress={onPress}>
        <Image
          resizeMode={resizeMode}
          style={[{...iconStyle}, style]}
          source={Icons[icon]}
          {...rest}
        />
      </TouchableOpacity>
    );
  }

  return (
    <Image
      resizeMode={resizeMode}
      style={[...iconStyle, style]}
      source={Icons[icon]}
      {...rest}
    />
  );
};

export {AtomIcon};
