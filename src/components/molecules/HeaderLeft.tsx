import React from 'react';
import {AtomIcon} from '../atoms/AtomIcon';
import {Colors} from '../../styles/common';

const HeaderLeft = ({onPressBack}: {onPressBack: () => void}) => (
  <AtomIcon
    icon={'arrowBack'}
    tintColor={Colors.white}
    size="xxl"
    onPress={onPressBack}
  />
);

export {HeaderLeft};
