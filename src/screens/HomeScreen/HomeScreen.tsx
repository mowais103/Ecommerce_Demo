import React from 'react';
import {AtomScreenContainer} from '../../components/atoms/AtomScreenContainer';
import {AtomText} from '../../components/atoms/AtomText';

const HomeScreen = () => {
  console.log('hello');
  return (
    <AtomScreenContainer>
      <AtomText text={'Hello'} />
    </AtomScreenContainer>
  );
};

export {HomeScreen};
