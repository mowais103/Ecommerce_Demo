import React, {useCallback, useState} from 'react';
import {WINDOW_WIDTH} from '../../styles/common';
import {AtomView} from '../atoms/AtomView';
import {AtomCard} from '../atoms/AtomCard';
import {AtomText} from '../atoms/AtomText';
import {LayoutAnimation, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  useAppDispatch,
  useAppSelector,
  useImageAspectRatio,
} from '../../lib/hooks';
import {Product} from '../../types/apiDataTypes';
import {RootNavigation} from '../../types/navTypes';
import {
  selectAllFavItems,
  toggleFavItem,
} from '../../redux/slice/product/productSlice';
import {calculateOriginalPrice} from '../../lib';
import {isSelected} from '../../screens';

const styles = StyleSheet.create({
  productTitle: {
    minHeight: 50,
  },
  containerStyle: {
    borderColor: 'silver',
    borderWidth: 1,
    flex: 1 / 2,
  },
});

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({product}: ProductCardProps) => {
  const navigation = useNavigation<RootNavigation>();
  const [selected, setSelected] = useState(false);

  const dispatch = useAppDispatch();
  const favItem = useAppSelector(selectAllFavItems);

  const aspectRatio = useImageAspectRatio(product?.thumbnail);

  const originalPrice = calculateOriginalPrice(
    product.price,
    product.discountPercentage,
  );

  const onFavoritePress = useCallback(() => {
    LayoutAnimation.easeInEaseOut();
    setSelected(!selected);
    dispatch(toggleFavItem(product));
  }, [dispatch, product, selected]);

  const isFavorite = isSelected(favItem, product.id) || selected;

  const onPressCard = () => navigation.navigate('ProductDetail', {product});

  const renderBelowCard = useCallback(
    () => (
      <AtomView pH="medium" width={WINDOW_WIDTH / 2} flex={1 / 2}>
        <AtomText
          text={product.brand}
          textAlign="center"
          color="brown"
          pV="small"
          size="small"
          textTransform="uppercase"
          numberOfLines={1}
          fontWeight="500"
        />
        <AtomText
          text={product.title}
          style={styles.productTitle}
          textAlign="center"
          textTransform="capitalize"
          numberOfLines={2}
          fontWeight="semibold"
        />
        <AtomView
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          pB="small">
          <AtomText
            text={`$${product.price}`}
            fontWeight="400"
            pR="medium"
            color="coffeeBrown"
          />
          <AtomText
            text={`$${originalPrice}`}
            size="small"
            fontWeight="500"
            lineThrough={true}
            color="black30"
          />
        </AtomView>
      </AtomView>
    ),
    [product.brand, product.price, product.title, originalPrice],
  );

  return (
    <AtomCard
      favIcon={isFavorite ? 'favoriteActive' : 'favoriteInActive'}
      focused={isFavorite}
      containerStyle={styles.containerStyle}
      onPressCard={onPressCard}
      onPressFavIcon={onFavoritePress}
      image={product.thumbnail}
      imgStyle={{width: WINDOW_WIDTH / 2, aspectRatio}}
      renderBelowCard={renderBelowCard()}
    />
  );
};

export {ProductCard};
