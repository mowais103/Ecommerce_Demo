import React from 'react';
import {AtomScreenContainer, AtomText} from '../../components';

const SignInScreen = () => {
  console.log('hello');
  return (
    <AtomScreenContainer screenHeader={false}>
      <AtomText text={'sign in'} />
    </AtomScreenContainer>
  );
};

export {SignInScreen};
