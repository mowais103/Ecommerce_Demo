import React from 'react';
import {ViewProps, ActivityIndicator} from 'react-native';
import {Colors} from '../../styles/common';
import {AtomView} from './AtomView';
import {AtomText, AtomTextProps} from './AtomText';
import {TColor} from '../../types/styleTypes';

type AtomButtonProps = {
  onPress: () => void;
  text: string;
  atomTextProps?: AtomTextProps;
  backgroundColor?: TColor;
  hasShadow?: boolean;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewProps['style'];
} & ViewProps;

const AtomButton = ({
  onPress,
  text,
  loading = false,
  backgroundColor = 'pineGreen',
  atomTextProps,
  disabled,
  style,

  ...rest
}: AtomButtonProps) => {
  const isDisabled = !!disabled || !!loading;

  const DEFAULT_ATOM_TEXT_PROPS: Partial<AtomTextProps> = {
    color: 'white',
    size: 'medium',
    textAlign: 'center',
    letterSpacing: 4,
    fontWeight: '400',
  };

  const allAtomTextProps = {...DEFAULT_ATOM_TEXT_PROPS, ...atomTextProps};

  const renderLoading = () => {
    if (!loading) {
      return null;
    }

    return <ActivityIndicator color={Colors.white} />;
  };

  return (
    <AtomView
      {...rest}
      mAll="medium"
      opacity={disabled ? 0.3 : undefined}
      style={[style]}
      backgroundColor={backgroundColor}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={isDisabled}
      justifyContent="center"
      flexDirection="row"
      alignItems="center"
      borderRadius="xs"
      pAll="medium">
      <AtomText text={text} {...allAtomTextProps} flex={1} />
      {renderLoading()}
    </AtomView>
  );
};

export {AtomButton};
