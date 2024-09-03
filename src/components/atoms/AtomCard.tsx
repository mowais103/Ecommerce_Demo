import React, {ReactNode} from 'react';
import {AtomImage} from '../../components/atoms/AtomImage';
import {AtomView} from '../../components/atoms/AtomView';
import {ImageStyle, StyleProp, ViewStyle} from 'react-native';

type AtomCardProps = {
  image: string;
  imgStyle: ImageStyle;
  renderBelowCard?: ReactNode;
  onPressCard?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};

const AtomCard = ({
  image,
  imgStyle,
  renderBelowCard,
  containerStyle,
  onPressCard,
}: AtomCardProps) => {
  return (
    <AtomView onPress={onPressCard} style={containerStyle}>
      <AtomImage src={image} imgStyle={imgStyle} />
      {renderBelowCard ? renderBelowCard : null}
    </AtomView>
  );
};

export {AtomCard};
