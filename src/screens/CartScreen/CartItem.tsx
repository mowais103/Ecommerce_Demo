import React from 'react';
import {AtomText} from '../../components/atoms/AtomText';
import {FlatList, StyleSheet} from 'react-native';
import {DEFAULT_SCROLL_VIEW_PROPS} from '../../styles/common';
import {AtomView} from '../../components/atoms/AtomView';
import {AtomCard} from '../../components/atoms/AtomCard';
import {Quantifier} from '../../components/molecules/Quantifier';
import {Divider} from '../../components/atoms/AtomDivider';
import {Images} from '../../assets';

const styles = StyleSheet.create({
  containerStyle: {
    marginRight: 16,
    flex: 1,
  },
  imgStyle: {width: '100%', height: '100%'},
});

const ItemSeparatorComponent = () => <Divider />;

const CartItem = ({cartData}: any) => {
  const renderCartItem = ({item}: any) => {
    return (
      <AtomView flexDirection="row" mAll="xs" flex={1} pV="medium">
        <AtomCard
          image={Images.banner}
          containerStyle={styles.containerStyle}
          imgStyle={styles.imgStyle}
        />
        <AtomView>
          <AtomText
            text={item.title}
            pV="xs"
            textTransform="capitalize"
            numberOfLines={2}
            fontWeight="semibold"
          />
          <AtomText
            text={item.brand}
            textTransform="uppercase"
            pV="xs"
            numberOfLines={1}
            fontWeight="400"
            color="pineGreen"
          />
          <AtomText
            text={`$${item.price}`}
            color="pineGreen"
            fontWeight="bold"
            pV="small"
          />
          <Quantifier itemQty={item.qty} />
        </AtomView>
      </AtomView>
    );
  };

  return (
    <FlatList
      {...DEFAULT_SCROLL_VIEW_PROPS}
      data={cartData}
      renderItem={renderCartItem}
      keyExtractor={(item, index) => `${item.productId}-${index}`}
      ItemSeparatorComponent={ItemSeparatorComponent}
    />
  );
};

export {CartItem};
