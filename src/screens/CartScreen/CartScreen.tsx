import React from 'react';
import {AtomScreenContainer} from '../../components/atoms/AtomScreenContainer';
import {CartItem} from './CartItem';
import {AtomView} from '../../components/atoms/AtomView';

const CartScreen = () => {
  console.log('hello');
  return (
    <AtomScreenContainer>
      <AtomView mAll="medium" flex={1}>
        <CartItem />
      </AtomView>
    </AtomScreenContainer>
  );
};

export {CartScreen};
