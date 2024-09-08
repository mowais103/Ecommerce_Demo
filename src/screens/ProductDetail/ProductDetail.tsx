import React, {useCallback, useMemo, useState} from 'react';
import {AtomScreenContainer} from '../../components/atoms/AtomScreenContainer';
import {AtomView} from '../../components/atoms/AtomView';
import {WINDOW_WIDTH} from '../../styles/common';
import {AtomImage} from '../../components/atoms/AtomImage';
import {CarouselSlider} from '../../components/molecules/CarouselSlider/CarouselSlider';
import {RootStackScreenProps} from '../../types/navTypes';
import {Divider} from '../../components/atoms/AtomDivider';
import {AtomText} from '../../components/atoms/AtomText';
import {AtomButton} from '../../components/atoms/AtomButton';
import {Pill} from '../../components/molecules/Pill';
import {Description} from './Description';
import {calculateOriginalPrice} from '../../lib/utils';
import {itemAdded} from '../../redux/slice/cart/cartSlice';
import {useAppDispatch} from '../../lib/hooks/common';

type ProductDetailProps = {
  route: RootStackScreenProps<'ProductDetail'>['route'];
  navigation: RootStackScreenProps<'ProductDetail'>['navigation'];
};

const ProductDetail = ({route, navigation}: ProductDetailProps) => {
  const [showProductDetails, setShowProductDetails] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const {product} = route.params;

  const renderCarouselItem = useCallback(({item}: any) => {
    return (
      <AtomView>
        <AtomImage
          src={item}
          imgStyle={{width: WINDOW_WIDTH, aspectRatio: 0.8}}
        />
        <Divider />
      </AtomView>
    );
  }, []);

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

  const addToCart = useCallback(() => {
    if (product.id) {
      const itemToAdd = {
        id: product.id,
        title: product.title,
        image: product.thumbnail,
        brand: product.brand,
        price: product.price,
        qty: 1,
      };
      dispatch(itemAdded(itemToAdd));
      navigation.navigate('CartScreen');
    }
  }, [product, dispatch, navigation]);

  const renderProductDetails = useCallback(
    () => (
      <AtomView pAll="medium" flex={1}>
        <AtomText
          text={product.title}
          pB="small"
          textTransform="uppercase"
          fontWeight={'500'}
        />
        <AtomView flexDirection="row" pB="medium">
          <AtomText text={`$${product.price}`} pR="medium" fontWeight={'400'} />
          <AtomText
            text={`$${originalPrice}`}
            lineThrough={true}
            color="black30"
            fontWeight={'semibold'}
          />
        </AtomView>
        {renderPills()}
      </AtomView>
    ),
    [originalPrice, product.price, product.title, renderPills],
  );

  if (!product) {
    return null;
  }

  return (
    <AtomScreenContainer>
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
        <AtomText
          text={product.availabilityStatus}
          color={product.availabilityStatus === 'In Stock' ? 'black30' : 'red'}
          fontWeight={'semibold'}
          pL="medium"
        />
        <Description
          description={product.description}
          showProductDetails={showProductDetails}
          onPress={() => setShowProductDetails(!showProductDetails)}
        />
      </AtomView>
      <AtomButton text="ADD TO CART" onPress={addToCart} />
    </AtomScreenContainer>
  );
};

export {ProductDetail};
