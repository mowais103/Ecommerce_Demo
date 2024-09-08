import React, {ReactNode} from 'react';
import {AtomImage} from '../../components/atoms/AtomImage';
import {AtomView} from '../../components/atoms/AtomView';
import {ImageStyle, StyleProp, ViewStyle} from 'react-native';
import {TColor} from '../../types/common';
import {Images} from '../../assets';

type AtomCardProps = {
  image: string | keyof typeof Images;
  imgStyle: ImageStyle;
  renderBelowCard?: ReactNode;
  onPressCard?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  backgroundColor?: TColor;
};

const AtomCard = ({
  image,
  imgStyle,
  renderBelowCard,
  containerStyle,
  backgroundColor,
  onPressCard,
}: AtomCardProps) => {
  return (
    <AtomView
      onPress={onPressCard}
      style={containerStyle}
      backgroundColor={backgroundColor}>
      <AtomImage src={image} imgStyle={imgStyle} />
      {renderBelowCard ? renderBelowCard : null}
    </AtomView>
  );
};

export {AtomCard};
