import React from 'react';
import {AtomImage} from '../../components/atoms/AtomImage';
import {AtomView} from '../../components/atoms/AtomView';
import {ImageStyle, StyleProp, ViewStyle} from 'react-native';

type AtomCardProps = {
  image: string;
  leftComponent?: React.ReactNode;
  RightComponent?: React.ReactNode;
  wrapStyle: StyleProp<ViewStyle>;
  imgStyle: ImageStyle;
  itemSeparator?: boolean;
  renderBelowCard?: React.ReactNode;
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
    <AtomView onPress={onPressCard}>
      <AtomImage src={image} wrapStyle={wrapStyle} imgStyle={imgStyle} />
      {renderBelowCard ? renderBelowCard : null}
    </AtomView>
  );
};

export {AtomCard};
