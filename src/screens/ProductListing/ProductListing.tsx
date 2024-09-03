import React, {useCallback, useEffect, useState} from 'react';
import {AtomText} from '../../components/atoms/AtomText';
import {AtomView} from '../../components/atoms/AtomView';
import {FlatList, StyleSheet} from 'react-native';
import {DEFAULT_SCROLL_VIEW_PROPS, WINDOW_WIDTH} from '../../styles/common';
import {RootStackScreenProps} from '../../types/navTypes';
import {getData} from '../../async';
import {AtomCard} from '../../components/atoms/AtomCard';
import {AtomScreenContainer} from '../../components/atoms/AtomScreenContainer';
import {useImageAspectRatio} from '../../lib/hooks';
import {calculateOriginalPrice} from '../../lib/utils';
import {ListLoadingPlaceholder} from './ListLoadingPlaceholder';

const styles = StyleSheet.create({
  containerStyle: {
    borderColor: 'silver',
    borderWidth: 0.2,
    width: WINDOW_WIDTH / 2,
  },
  imgStyle: {
    width: WINDOW_WIDTH / 2,
    marginTop: 16,
  },
});

type ProductListingProps = {
  route: RootStackScreenProps<'ProductListing'>['route'];
  navigation: RootStackScreenProps<'ProductListing'>['navigation'];
};

const ItemSeparatorComponent = () => <AtomView mR="small" />;

const ProductListing = ({route, navigation}: ProductListingProps) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<any>({});

  const {url} = route.params;
  const endPointToUse = url.split('/dummyjson.com')[1]; //  split url as we have base url already defined

  const aspectRatio = useImageAspectRatio(
    product[0]?.thumbnail ? product[0]?.thumbnail : '',
  );

  const fetchProductsByCategory = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getData(endPointToUse);
      if (res?.products) {
        setProduct(res.products);
        // setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.warn(e);
    }
  }, [endPointToUse]);

  useEffect(() => {
    fetchProductsByCategory();
  }, [fetchProductsByCategory]);

  const renderProduct = useCallback(
    ({item}: any) => {
      const onPressCard = () =>
        navigation.navigate('ProductDetail', {productId: item.id});

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
