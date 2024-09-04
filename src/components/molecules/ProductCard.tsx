import React, {useCallback} from 'react';
import {DEFAULT_SCROLL_VIEW_PROPS, WINDOW_WIDTH} from '../../styles/common';
import {AtomView} from '../atoms/AtomView';
import {AtomCard} from '../atoms/AtomCard';
import {AtomText} from '../atoms/AtomText';
import {FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useImageAspectRatio} from '../../lib/hooks';

const styles = StyleSheet.create({
  productTitle: {
    minHeight: 50,
  },
  containerStyle: {
    borderColor: 'silver',
    borderWidth: 0.2,
  },
});

type ProductCardProps = {
  data: any[];
};

const ProductCard = ({data}: ProductCardProps) => {
  const navigation = useNavigation<any>();

  const aspectRatio = useImageAspectRatio(
    data[0]?.thumbnail ? data[0]?.thumbnail : '',
  );

  const renderProduct = useCallback(
    ({item}: any) => {
      const onPressCard = () =>
        navigation.navigate('ProductDetail', {productId: item.id});

      const renderBelowCard = () => (
        <AtomView width={WINDOW_WIDTH / 2} pAll="small">
          <AtomText
            style={styles.productTitle}
            text={item.title}
            pV="xs"
            textAlign="center"
            textTransform="capitalize"
            numberOfLines={2}
            fontWeight="semibold"
          />
          <AtomText
            text={item.brand}
            textAlign="center"
            size="small"
            numberOfLines={1}
            pV="xs"
            fontWeight="400"
            color="pineGreen"
          />
          <AtomText
            text={`$${item.price}`}
            textAlign="center"
            color="pineGreen"
            fontWeight="bold"
          />
        </AtomView>
      );

      return (
        <AtomCard
          containerStyle={styles.containerStyle}
          onPressCard={onPressCard}
          image={item.thumbnail}
          imgStyle={{width: WINDOW_WIDTH / 2, aspectRatio}}
          renderBelowCard={renderBelowCard()}
        />
      );
    },
    [navigation, aspectRatio],
  );

  return (
    <FlatList
      {...DEFAULT_SCROLL_VIEW_PROPS}
      horizontal={true}
      data={data}
      renderItem={renderProduct}
      keyExtractor={(product, index) => `${product.id}-${index}`}
    />
  );
};

export {ProductCard};
