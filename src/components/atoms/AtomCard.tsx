import React, {ReactNode} from 'react';
import {AtomImage} from '../../components/atoms/AtomImage';
import {AtomView} from '../../components/atoms/AtomView';
import {ImageStyle, StyleProp, ViewStyle} from 'react-native';

type AtomCardProps = {
  image: string;
  wrapStyle: StyleProp<ViewStyle>;
  imgStyle: ImageStyle;
  renderBelowCard?: ReactNode;
  onPressCard?: () => void;
};

const AtomCard = ({
  image,
  wrapStyle,
  imgStyle,
  renderBelowCard,
  onPressCard,
}: AtomCardProps) => {
  return (
    <AtomView onPress={onPressCard} pV="small">
      <AtomImage src={image} wrapStyle={wrapStyle} imgStyle={imgStyle} />
      {renderBelowCard ? renderBelowCard : null}
    </AtomView>
  );
};

export {AtomCard};
