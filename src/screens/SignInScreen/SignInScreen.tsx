import React from 'react';
import {AtomScreenContainer} from '../../components/atoms/AtomScreenContainer';
import {AtomText} from '../../components/atoms/AtomText';

const SignInScreen = () => {
  console.log('hello');
  return (
    <AtomScreenContainer screenHeader={false}>
      <AtomText text={'sign in'} />
    </AtomScreenContainer>
  );
};

export {SignInScreen};
