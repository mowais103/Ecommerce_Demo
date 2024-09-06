import React from 'react';
import {AtomScreenContainer} from '../../components/atoms/AtomScreenContainer';
import {CartItem} from './CartItem';
import {AtomView} from '../../components/atoms/AtomView';

const cartData = [
  {
    productId: 1,
    image: 'https://picsum.photos/seed/picsum/1800/1400',
    title: 'abc',
    price: '',
    brand: 'avc',
    qty: '2',
  },
  {
    productId: 2,
    image: 'https://picsum.photos/seed/picsum/1800/1400',
    title: 'dfdf',
    price: '17',
    brand: 'dcd',
    qty: '2',
  },
  {
    productId: 3,
    image: 'https://picsum.photos/seed/picsum/1800/1400',
    title: 'wedc',
    price: '23',
    brand: 'xcdc',
    qty: '2',
  },
];

const CartScreen = () => {
  console.log('hello');
  return (
    <AtomScreenContainer>
      <AtomView mAll="medium" flex={1}>
        <CartItem cartData={cartData} />
      </AtomView>
    </AtomScreenContainer>
  );
};

export {CartScreen};
