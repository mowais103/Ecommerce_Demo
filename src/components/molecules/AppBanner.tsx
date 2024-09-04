import React from 'react';
import {ImageStyle} from 'react-native';
import {AtomCard} from '../atoms/AtomCard';
import {WINDOW_WIDTH} from '../../styles/common';
import {AtomView} from '../atoms/AtomView';
import {Images} from '../../assets';

type AppBannerProps = {
  image: string | keyof typeof Images;
  imgStyle?: ImageStyle;
  onPressBanner?: () => void;
};

const AppBanner = ({image, imgStyle, onPressBanner}: AppBannerProps) => (
  <AtomView justifyContent="center" alignItems="center">
    <AtomCard
      image={image}
      imgStyle={
        imgStyle
          ? imgStyle
          : {
              width: WINDOW_WIDTH,
              height: WINDOW_WIDTH,
            }
      }
      onPressCard={onPressBanner}
    />
  </AtomView>
);

export {AppBanner};
