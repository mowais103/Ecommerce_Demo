import React from 'react';
import {AtomIcon} from '../atoms/AtomIcon';
import {Colors} from '../../styles/common';
import {useNavigation} from '@react-navigation/native';

const HeaderLeft = ({
  isHeaderlessScreen = false,
}: {
  isHeaderlessScreen?: boolean;
}) => {
  const navigation = useNavigation();
  return (
    <AtomIcon
      mL={isHeaderlessScreen ? 'medium' : undefined}
      icon={'arrowBack'}
      tintColor={isHeaderlessScreen ? Colors.pineGreen : Colors.white}
      size="xxl"
      onPress={() => navigation.goBack()}
    />
  );
};

export {HeaderLeft};
