import React, {useCallback} from 'react';
import {AtomView} from '../../components/atoms/AtomView';
import {
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
  StyleSheet,
} from 'react-native';
import {DEFAULT_SCROLL_VIEW_PROPS} from '../../styles/common';
import {Category} from '../../types/apiDataTypes';
import {CollectionCircle} from '../../components/molecules/CollectionCircle';

type CollectionScrollProps = {
  collections: Category[];
};

const styles = StyleSheet.create({
  columnWrapperStyle: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

const ItemSeparatorComponent = () => <AtomView pR="xs" />;

const CollectionScroll = ({collections}: CollectionScrollProps) => {
  const renderCollection: ListRenderItem<Category> = useCallback(
    ({item}: ListRenderItemInfo<Category>) => (
      <CollectionCircle collection={item} />
    ),
    [],
  );

  return (
    <FlatList
      columnWrapperStyle={styles.columnWrapperStyle}
      {...DEFAULT_SCROLL_VIEW_PROPS}
      numColumns={2}
      data={collections.slice(0, 4)}
      renderItem={renderCollection}
      ItemSeparatorComponent={ItemSeparatorComponent}
      keyExtractor={category => category?.url}
    />
  );
};

export {CollectionScroll};
