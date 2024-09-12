import React from 'react';
import {AtomScreenContainer, AtomView} from '../../components';
import {useAppSelector} from '../../lib';

import {CartItem} from './CartItem';

const CartScreen = () => {
  const totalPrice = useAppSelector(state => state.cart.totalPrice);
  return (
    <AtomScreenContainer>
      <AtomView mH="medium" flex={1}>
        <CartItem totalPrice={totalPrice} />
      </AtomView>
    </AtomScreenContainer>
  );
};

export {CartScreen};
