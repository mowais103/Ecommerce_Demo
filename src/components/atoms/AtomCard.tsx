import React, {ReactNode} from 'react';
import {AtomImage} from '../../components/atoms/AtomImage';
import {AtomView} from '../../components/atoms/AtomView';
import {ImageStyle, StyleProp, ViewStyle} from 'react-native';
import {TColor, TIcons} from '../../types/styleTypes';
import {Images} from '../../assets';
import {AtomIcon} from './AtomIcon';
import {Colors} from '../../styles';

type AtomCardProps = {
  image: string | keyof typeof Images;
  imgStyle: ImageStyle;
  renderBelowCard?: ReactNode;
  onPressCard?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  backgroundColor?: TColor;
  favIcon?: TIcons;
  onPressFavIcon?: () => void;
  focused?: boolean;
};

const AtomCard = ({
  image,
  imgStyle,
  renderBelowCard,
  containerStyle,
  backgroundColor,
  favIcon,
  onPressCard,
  onPressFavIcon,
  focused,
}: AtomCardProps) => {
  return (
    <AtomView
      onPress={onPressCard}
      style={containerStyle}
      backgroundColor={backgroundColor}>
      {favIcon ? (
        <AtomView
          position="absolute"
          flex={1}
          zIndex={1}
          right={10}
          top={10}
          onPress={onPressFavIcon}>
          <AtomIcon
            icon={favIcon}
            size="xl"
            tintColor={focused ? Colors.red : undefined}
          />
        </AtomView>
      ) : null}
      <AtomImage src={image} imgStyle={imgStyle} />
      {renderBelowCard ? renderBelowCard : null}
    </AtomView>
  );
};

export {AtomCard};
