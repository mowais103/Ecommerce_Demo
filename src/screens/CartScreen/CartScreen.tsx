import React from 'react';
import {
  AtomButton,
  AtomScreenContainer,
  AtomText,
  AtomView,
} from '../../components';
import {useAppSelector} from '../../lib';
import {StyleSheet} from 'react-native';

import {CartItem} from './CartItem';
import {Colors} from '../../styles';

const styles = StyleSheet.create({
  priceContainer: {
    borderBottomWidth: 1,
    borderColor: Colors.coffeeBrown,
  },
});

const CartScreen = () => {
  const totalPrice = useAppSelector(state => state.cart.totalPrice);
  const hasProductsInCart = totalPrice > 0;
  return (
    <AtomScreenContainer>
      {hasProductsInCart ? (
        <AtomView mH="medium" flex={1}>
          <CartItem />
          <AtomView
            pV="medium"
            style={styles.priceContainer}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-end">
            <AtomText text={'TOTAL'} fontWeight={'semibold'} />
            <AtomText
              text={`$${totalPrice.toFixed(2)}`}
              fontWeight={'bold'}
              color="pineGreen"
            />
          </AtomView>
          <AtomButton text="Proceed to Checkout" onPress={() => null} />
        </AtomView>
      ) : (
        <AtomView
          flex={1}
          justifyContent="center"
          alignItems="center"
          mH="large">
          <AtomText
            size="large"
            textAlign="center"
            text={
              'Your Cart is Empty, Start shopping and add favorites to cart'
            }
          />
        </AtomView>
      )}
    </AtomScreenContainer>
  );
};

export {CartScreen};
