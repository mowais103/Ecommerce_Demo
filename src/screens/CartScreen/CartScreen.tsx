import React from 'react';
import {AtomScreenContainer} from '../../components/atoms/AtomScreenContainer';
import {CartItem} from './CartItem';
import {AtomView} from '../../components/atoms/AtomView';
import {AtomText} from '../../components/atoms/AtomText';
import {useAppSelector} from '../../lib/hooks/common';
import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/common';
import {AtomButton} from '../../components/atoms/AtomButton';

const styles = StyleSheet.create({
  priceContainer: {
    borderTopWidth: 1,
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
