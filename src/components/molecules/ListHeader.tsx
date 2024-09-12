import React from 'react';
import {TIcons} from '../../types/styleTypes';
import {AtomView} from '../atoms/AtomView';
import {AtomText, AtomTextProps} from '../atoms/AtomText';
import {AtomIcon} from '../atoms/AtomIcon';
import {ImageStyle} from 'react-native';

type ListHeaderProps = {
  title: string;
  icon?: TIcons;
  onPressIcon?: () => void;
  iconStyle?: ImageStyle;
  textStyle?: AtomTextProps;
};

const ListHeader = ({
  title,
  icon,
  onPressIcon,
  textStyle,
  iconStyle,
}: ListHeaderProps) => (
  <AtomView
    flexDirection="row"
    justifyContent="space-between"
    flex={1}
    alignItems="center">
    <AtomText
      text={title}
      textTransform={'uppercase'}
      fontWeight={'500'}
      style={textStyle}
    />
    {icon ? (
      <AtomIcon
        icon={icon}
        size="xxl"
        onPress={onPressIcon}
        style={iconStyle}
      />
    ) : null}
  </AtomView>
);

export {ListHeader};
