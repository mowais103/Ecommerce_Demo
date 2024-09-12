import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
  StyleSheet,
} from 'react-native';
import {Colors, DEFAULT_SCROLL_VIEW_PROPS} from '../../styles';
import {Product, RootStackScreenProps} from '../../types';
import {
  AtomScreenContainer,
  AtomText,
  AtomView,
  ProductCard,
} from '../../components';
import {useAppSelector} from '../../lib';
import {getData} from '../../async';
import {ListLoadingPlaceholder} from './ListLoadingPlaceholder';
import {selectAllFavItems} from '../../redux/slice/product/productSlice';

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
  },
});

type ProductListingProps = {
  route: RootStackScreenProps<'ProductListing'>['route'];
};

const ItemSeparatorComponent = () => <AtomView mR="small" />;

const ListEmptyComponent = () => (
  <AtomView flex={1} justifyContent="center" alignItems="center" mH="large">
    <AtomText size="large" textAlign="center" text={'No Products Found'} />
  </AtomView>
);

const ProductListing = ({route}: ProductListingProps) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState<number>(1);
  const [hasMoreLoading, setHasMoreLoading] = useState(false);

  const favItem = useAppSelector(selectAllFavItems);

  const {url, favorite} = route.params;

  const fetchProducts = async (pageNo: number) => {
    const endPointToUse = url.split('/dummyjson.com')[1];
    const skip = (pageNo - 1) * 10;
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

  useEffect(() => {
    !favorite && loadProducts();
  }, [page]); // Do not add other dependencies here

  const renderProduct: ListRenderItem<Product> = useCallback(
    ({item}: ListRenderItemInfo<Product>) => <ProductCard product={item} />,
    [],
  );

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

  if (loading) {
    return <ListLoadingPlaceholder />;
  }

  return (
    <AtomScreenContainer>
      <FlatList
        keyExtractor={(item, index) => `${item.id}-${index}`}
        {...DEFAULT_SCROLL_VIEW_PROPS}
        numColumns={2}
        data={favorite ? favItem : product}
        renderItem={renderProduct}
        onEndReached={!favorite ? handleLoadMore : null}
        ListFooterComponent={!favorite ? renderFooter : null}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </AtomScreenContainer>
  );
};

export {ProductListing};
