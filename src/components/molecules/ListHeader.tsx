import React from 'react';
import {TIcons} from '../../types/styleTypes';
import {AtomView} from '../atoms/AtomView';
import {AtomText} from '../atoms/AtomText';
import {AtomIcon} from '../atoms/AtomIcon';
import {Colors} from '../../styles/common';

const ListHeader = ({title, icon}: {title: string; icon?: TIcons}) => (
  <AtomView
    flexDirection="row"
    justifyContent="space-between"
    flex={1}
    alignItems="center">
    <AtomText
      text={title}
      textTransform={'uppercase'}
      color="coffeeBrown"
      fontWeight={'400'}
    />
    {icon ? (
      <AtomIcon icon={icon} tintColor={Colors.coffeeBrown} size="xxl" />
    ) : null}
  </AtomView>
);

export {ListHeader};
