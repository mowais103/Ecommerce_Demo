import React, {useCallback, useMemo, useState} from 'react';
import {ListRenderItem, ListRenderItemInfo, StyleSheet} from 'react-native';
import {Colors, WINDOW_WIDTH} from '../../styles';
import {Product, RootStackScreenProps} from '../../types';
import {
  calculateOriginalPrice,
  useAppDispatch,
  useAppSelector,
} from '../../lib';
import {
  AtomButton,
  AtomImage,
  AtomScreenContainer,
  AtomText,
  AtomView,
  CarouselSlider,
  Divider,
  HeaderLeft,
  ListHeader,
  Pill,
} from '../../components';
import {itemAdded} from '../../redux/slice/cart/cartSlice';
import {Description} from './Description';
import {
  selectAllFavItems,
  toggleFavItem,
} from '../../redux/slice/product/productSlice';
import {isSelected} from './utils';

const styles = StyleSheet.create({
  imgStyle: {
    width: WINDOW_WIDTH,
    aspectRatio: 0.8,
  },
});

type ProductDetailProps = {
  route: RootStackScreenProps<'ProductDetail'>['route'];
  navigation: RootStackScreenProps<'ProductDetail'>['navigation'];
};

const ProductDetail = ({route, navigation}: ProductDetailProps) => {
  const [showProductDetails, setShowProductDetails] = useState<boolean>(false);
  const [product, setProduct] = useState<Product>(route.params.product);
  const [fav, setFav] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const favItem = useAppSelector(selectAllFavItems);
  const isFavorite = fav || isSelected(favItem, product.id);

  const originalPrice = calculateOriginalPrice(
    product.price,
    product.discountPercentage,
  );

  // push brand names at start of tags array
  const newTagArray = useMemo(() => {
    return [product?.brand, ...product?.tags];
  }, [product?.brand, product?.tags]);

  const renderPills = useCallback(
    () => (
      <AtomView scroll={true} horizontal={true} flexDirection="row">
        {newTagArray.map((tag: string, index: number) => (
          <Pill key={index} name={tag} />
        ))}
      </AtomView>
    ),
    [newTagArray],
  );

  const renderCarouselItem: ListRenderItem<string> = useCallback(
    ({item}: ListRenderItemInfo<string>) => (
      <AtomView>
        <AtomImage src={item} imgStyle={styles.imgStyle} />
        <Divider />
      </AtomView>
    ),
    [],
  );

  const onPressFavorite = useCallback(() => {
    setFav(!fav);
    setProduct(product);
    dispatch(toggleFavItem(product));
  }, [dispatch, product, fav]);

  const renderProductDetails = useCallback(
    () => (
      <>
        <AtomView pAll="medium" flex={1}>
          <ListHeader
            iconStyle={{tintColor: Colors.red}}
            title={product.title}
            icon={isFavorite ? 'favoriteActive' : 'favoriteInActive'}
            onPressIcon={onPressFavorite}
          />
          <AtomView flexDirection="row" mV="small" flex={1}>
            <AtomText
              text={`$${product.price}`}
              pR="medium"
              fontWeight={'400'}
            />
            <AtomText
              text={`$${originalPrice}`}
              lineThrough={true}
              color="black30"
              fontWeight={'semibold'}
            />
          </AtomView>

          {renderPills()}
        </AtomView>
        <AtomText
          text={product.availabilityStatus}
          color={product.availabilityStatus === 'In Stock' ? 'black30' : 'red'}
          fontWeight={'semibold'}
          pL="medium"
        />
      </>
    ),
    [
      originalPrice,
      product.price,
      product.title,
      renderPills,
      product.availabilityStatus,
      onPressFavorite,
      isFavorite,
    ],
  );

  const addToCart = useCallback(() => {
    setProduct(product);
    dispatch(itemAdded(product));
    navigation.navigate('CartScreen');
  }, [product, dispatch, navigation]);

  const onPressDescription = useCallback(() => {
    setShowProductDetails(!showProductDetails);
  }, [showProductDetails]);

  if (!product) {
    return null;
  }

  return (
    <AtomScreenContainer screenHeader={false}>
      <HeaderLeft isHeaderlessScreen={true} />
      <AtomView scroll={true}>
        <CarouselSlider
          loop={true}
          horizontal={true}
          data={product.images ?? []}
          renderItem={renderCarouselItem}
          showDots={true}
          keyExtractor={(item, index) => `${item}-${index}`}
        />
        {renderProductDetails()}

        <Description
          description={product.description}
          showProductDetails={showProductDetails}
          onPress={onPressDescription}
        />
      </AtomView>
      <AtomButton text="ADD TO CART" onPress={addToCart} />
    </AtomScreenContainer>
  );
};

export {ProductDetail};
