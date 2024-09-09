import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
  StyleSheet,
} from 'react-native';
import {Colors, DEFAULT_SCROLL_VIEW_PROPS, WINDOW_WIDTH} from '../../styles';
import {Product, RootStackScreenProps} from '../../types';
import {
  AtomCard,
  AtomScreenContainer,
  AtomText,
  AtomView,
} from '../../components';
import {calculateOriginalPrice, useImageAspectRatio} from '../../lib';
import {getData} from '../../async';
import {ListLoadingPlaceholder} from './ListLoadingPlaceholder';

const styles = StyleSheet.create({
  containerStyle: {
    borderColor: Colors.silver,
    borderWidth: 0.2,
    width: WINDOW_WIDTH / 2,
  },
});

type ProductListingProps = {
  route: RootStackScreenProps<'ProductListing'>['route'];
  navigation: RootStackScreenProps<'ProductListing'>['navigation'];
};

const ItemSeparatorComponent = () => <AtomView mR="small" />;

const ProductListing = ({route, navigation}: ProductListingProps) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<Product[]>([]);

  const {url} = route.params;
  const endPointToUse = url.split('/dummyjson.com')[1]; //  split url as we have base url already defined

  const aspectRatio = useImageAspectRatio(
    product[0]?.thumbnail ? product[0]?.thumbnail : '',
  );

  const fetchProductsByCategory = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getData(endPointToUse);
      if (res.data) {
        setProduct(res.data.products);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.warn(e);
    }
  }, [endPointToUse]);

  useEffect(() => {
    fetchProductsByCategory();
  }, [fetchProductsByCategory]);

  const renderProduct: ListRenderItem<Product> = useCallback(
    ({item}: ListRenderItemInfo<Product>) => {
      const onPressCard = () =>
        navigation.navigate('ProductDetail', {product: item});

      const originalPrice = calculateOriginalPrice(
        item.price,
        item.discountPercentage,
      );

      const renderBelowCard = () => (
        <AtomView mAll="small">
          <AtomText
            text={item.brand}
            textAlign="center"
            color="brown"
            pV="small"
            size="small"
            numberOfLines={1}
            fontWeight="500"
          />
          <AtomText
            text={item.title}
            textAlign="center"
            textTransform="capitalize"
            numberOfLines={2}
            fontWeight="semibold"
          />
          <AtomView
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            pT="medium">
            <AtomText
              text={`$${item.price}`}
              fontWeight="400"
              pR="medium"
              color="coffeeBrown"
            />
            <AtomText
              text={`$${originalPrice}`}
              size="small"
              fontWeight="400"
              lineThrough={true}
              color="black30"
            />
          </AtomView>
        </AtomView>
      );

      return (
        <AtomCard
          onPressCard={onPressCard}
          containerStyle={styles.containerStyle}
          image={item.thumbnail}
          imgStyle={{width: WINDOW_WIDTH / 2, marginTop: 16, aspectRatio}}
          renderBelowCard={renderBelowCard()}
        />
      );
    },
    [navigation, aspectRatio],
  );

  if (loading) {
    return <ListLoadingPlaceholder />;
  }

  return (
    <AtomScreenContainer>
      <FlatList
        keyExtractor={(item, index) => `${item.id}-${index}`}
        {...DEFAULT_SCROLL_VIEW_PROPS}
        numColumns={2}
        data={product}
        renderItem={renderProduct}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </AtomScreenContainer>
  );
};

export {ProductListing};
