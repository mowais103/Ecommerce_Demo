import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
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
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState<number>(1);
  const [hasMoreLoading, setHasMoreLoading] = useState(false);

  const {url} = route.params;
  const endPointToUse = url.split('/dummyjson.com')[1];

  const aspectRatio = useImageAspectRatio(
    product[0]?.thumbnail ? product[0]?.thumbnail : '',
  );

  const fetchProducts = async (page: number) => {
    const skip = (page - 1) * 10;
    try {
      const response = await getData(`${endPointToUse}?limit=10&skip=${skip}`);
      const data = await response.data;
      return data?.products;
    } catch (error) {
      console.error(error);
    }
  };

  const loadProducts = async () => {
    const isInitialPage = page === 1;
    if (!loading && hasMore) {
      isInitialPage ? setLoading(true) : setHasMoreLoading(true);
      const newProducts = await fetchProducts(page);
      if (newProducts.length > 0) {
        setProduct(prevProducts => [...prevProducts, ...newProducts]);
      } else {
        setHasMore(false);
      }
      isInitialPage ? setLoading(false) : setHasMoreLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (hasMore && !loading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const renderFooter = () => {
    return hasMoreLoading ? (
      <AtomView pV="small">
        <ActivityIndicator size="small" color={Colors.pineGreen} />
      </AtomView>
    ) : (
      <AtomText
        text={'No More Products'}
        pV="small"
        alignSelf="center"
        color={'black30'}
      />
    );
  };

  useEffect(() => {
    loadProducts();
  }, [page]);

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
        onEndReached={handleLoadMore}
        ListFooterComponent={renderFooter}
      />
    </AtomScreenContainer>
  );
};

export {ProductListing};
