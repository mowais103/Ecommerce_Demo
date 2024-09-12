import React, {useCallback} from 'react';
import {
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
  StyleSheet,
} from 'react-native';
import {
  AtomButton,
  AtomCard,
  AtomText,
  AtomView,
  Divider,
  Quantifier,
} from '../../components';
import {useAppDispatch, useAppSelector} from '../../lib';
import {
  itemAdded,
  itemRemoved,
  selectAllItems,
} from '../../redux/slice/cart/cartSlice';
import {DEFAULT_SCROLL_VIEW_PROPS} from '../../styles';
import {Product} from '../../types';

const styles = StyleSheet.create({
  containerStyle: {
    marginRight: 24,
    width: '30%',
  },
  imgStyle: {width: '100%', aspectRatio: 1},
  contentContainerStyle: {
    flexGrow: 1,
  },
  ListFooterComponentStyle: {
    justifyContent: 'flex-end',
    flexGrow: 1,
  },
});

const ItemSeparatorComponent = () => <Divider />;

const ListEmptyComponent = () => (
  <AtomView mH="large" flex={1} justifyContent="center" alignItems="center">
    <AtomText
      size="large"
      textAlign="center"
      text={'Your cart is empty, shop and add products to cart'}
    />
  </AtomView>
);

const CartItem = ({totalPrice}: {totalPrice: number}) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectAllItems);

  const ListFooterComponent = useCallback(
    () => (
      <AtomView>
        <AtomView
          pV="medium"
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
    ),
    [totalPrice],
  );

  const renderCartItem: ListRenderItem<Product> = useCallback(
    ({item}: ListRenderItemInfo<Product>) => {
      const onIncrementItemQty = () => {
        dispatch(itemAdded(item));
      };

      const OnDecrementItemQty = () => {
        dispatch(itemRemoved(item));
      };

      return (
        <AtomView flexDirection="row" mAll="small" pV="small" flex={1}>
          <AtomCard
            image={item.thumbnail}
            containerStyle={styles.containerStyle}
            imgStyle={styles.imgStyle}
          />
          <AtomView flex={1}>
            <AtomText
              text={item.title}
              pV="xs"
              textTransform="capitalize"
              numberOfLines={2}
              fontWeight="semibold"
            />
            <AtomText
              text={item.brand}
              pV="xs"
              numberOfLines={1}
              fontWeight="400"
              color="pineGreen"
              size="small"
              textTransform="uppercase"
            />
            <AtomText
              text={`$${item.price}`}
              color="pineGreen"
              fontWeight="bold"
              pV="small"
            />
            <Quantifier
              itemQty={item.qty}
              onIncrement={onIncrementItemQty}
              OnDecrement={OnDecrementItemQty}
            />
          </AtomView>
        </AtomView>
      );
    },
    [dispatch],
  );

  return (
    <FlatList
      {...DEFAULT_SCROLL_VIEW_PROPS}
      data={cartItems}
      renderItem={renderCartItem}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListFooterComponent={cartItems.length ? ListFooterComponent : null}
      ListEmptyComponent={ListEmptyComponent}
      ListFooterComponentStyle={styles.ListFooterComponentStyle}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
};

export {CartItem};
