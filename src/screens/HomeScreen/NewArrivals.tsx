import React, {useCallback} from 'react';
import {FlatList, ListRenderItem, ListRenderItemInfo} from 'react-native';
import {ProductCard} from '../../components';
import {Product} from '../../types';
import {DEFAULT_SCROLL_VIEW_PROPS} from '../../styles';

type NewArrivalsProps = {
  data: Product[];
};

const NewArrivals = ({data}: NewArrivalsProps) => {
  const renderNewArrivals: ListRenderItem<Product> = useCallback(
    ({item}: ListRenderItemInfo<Product>) => <ProductCard product={item} />,
    [],
  );

  return (
    <FlatList
      data={data}
      renderItem={renderNewArrivals}
      horizontal={true}
      {...DEFAULT_SCROLL_VIEW_PROPS}
    />
  );
};

export {NewArrivals};
