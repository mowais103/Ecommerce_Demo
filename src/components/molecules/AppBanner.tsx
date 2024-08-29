import React from 'react';
import {AtomImage} from '../atoms/AtomImage';
import {AtomView} from '../atoms/AtomView';
import {ImageStyle, StyleProp, ViewStyle} from 'react-native';

type AppBannerProps = {
  image: string;
  wrapStyle: StyleProp<ViewStyle>;
  imgStyle: ImageStyle;
  onPressBanner?: () => void;
};

const AppBanner = ({
  image,
  wrapStyle,
  imgStyle,
  onPressBanner,
}: AppBannerProps) => (
  <AtomView onPress={onPressBanner} pV="large">
    <AtomImage src={image} wrapStyle={wrapStyle} imgStyle={imgStyle} />
  </AtomView>
);

export {AppBanner};
