import React, {useCallback} from 'react';
import {AtomText} from '../../components/atoms/AtomText';
import {FlatList, StyleSheet} from 'react-native';
import {DEFAULT_SCROLL_VIEW_PROPS} from '../../styles/common';
import {AtomView} from '../../components/atoms/AtomView';
import {AtomCard} from '../../components/atoms/AtomCard';
import {Divider} from '../../components/atoms/AtomDivider';
import {
  itemAdded,
  itemRemoved,
  selectAllItems,
} from '../../redux/slice/cart/cartSlice';
import {useAppDispatch, useAppSelector} from '../../lib/hooks/common';
import {Quantifier} from '../../components/molecules/Quantifier';

const styles = StyleSheet.create({
  containerStyle: {
    marginRight: 24,
    width: '30%',
  },
  imgStyle: {width: '100%', aspectRatio: 1},
});

const ItemSeparatorComponent = () => <Divider />;

const CartItem = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectAllItems);

  const renderCartItem = useCallback(
    ({item}: any) => {
      const onIncrementItemQty = () => {
        dispatch(itemAdded(item));
      };

      const OnDecrementItemQty = () => {
        dispatch(itemRemoved(item));
      };

      return (
        <AtomView flexDirection="row" mAll="xs" pV="small">
          <AtomCard
            image={item.image}
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
    />
  );
};

export {CartItem};
