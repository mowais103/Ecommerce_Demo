import React from 'react';
import {ImageStyle, StyleProp, ViewStyle} from 'react-native';
import {AtomCard} from '../atoms/AtomCard';
import {WINDOW_WIDTH} from '../../styles/common';
import {AtomView} from '../atoms/AtomView';

type AppBannerProps = {
  image: string;
  wrapStyle?: StyleProp<ViewStyle>;
  imgStyle?: ImageStyle;
  onPressBanner?: () => void;
};

const AppBanner = ({
  image,
  wrapStyle,
  imgStyle,
  onPressBanner,
}: AppBannerProps) => (
  <AtomView pB="medium">
    <AtomCard
      image={image}
      wrapStyle={wrapStyle ? wrapStyle : {width: WINDOW_WIDTH - 16}}
      imgStyle={
        imgStyle
          ? imgStyle
          : {
              width: WINDOW_WIDTH - 16,
              aspectRatio: 1800 / 1400,
            }
      }
      onPressCard={onPressBanner}
    />
  </AtomView>
);

export {AppBanner};
