import React from 'react';
import {ImageStyle} from 'react-native';
import {AtomCard} from '../atoms/AtomCard';
import {WINDOW_WIDTH} from '../../styles/common';
import {AtomView} from '../atoms/AtomView';

type AppBannerProps = {
  image: string;
  imgStyle?: ImageStyle;
  onPressBanner?: () => void;
};

const AppBanner = ({image, imgStyle, onPressBanner}: AppBannerProps) => (
  <AtomView pB="medium">
    <AtomCard
      image={image}
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
