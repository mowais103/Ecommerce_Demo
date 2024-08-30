import React from 'react';
import {TIcons} from '../../types/common';
import {AtomView} from '../atoms/AtomView';
import {AtomText} from '../atoms/AtomText';
import {AtomIcon} from '../atoms/AtomIcon';
import {Colors} from '../../styles/common';

const ListHeader = ({title, icon}: {title: string; icon?: TIcons}) => (
  <AtomView
    pH="xs"
    pT="medium"
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center">
    <AtomText
      text={title}
      textTransform={'uppercase'}
      color="coffeeBrown"
      fontWeight={'400'}
      letterSpacing={1}
      size="medium"
    />
    <AtomIcon
      icon={icon ?? 'arrowRight'}
      tintColor={Colors.coffeeBrown}
      size="xxl"
    />
  </AtomView>
);

export {ListHeader};
