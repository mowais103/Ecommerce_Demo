import React, {useCallback} from 'react';
import {AtomView} from '../atoms/AtomView';
import {AtomText} from '../atoms/AtomText';
import {
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
  StyleSheet,
} from 'react-native';
import {DEFAULT_SCROLL_VIEW_PROPS} from '../../styles/common';
import {useNavigation} from '@react-navigation/native';
import {Category} from '../../types/apiDataTypes';
import {RootNavigation} from '../../types/navTypes';
import {getCircleStyle} from '../../styles/utils';

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
  const navigation = useNavigation<RootNavigation>();

  const renderCollection: ListRenderItem<Category> = useCallback(
    ({item}: ListRenderItemInfo<Category>) => {
      const onPressCategory = () =>
        navigation.navigate('ProductListing', {url: item?.url});

      return (
        <AtomView
          onPress={onPressCategory}
          mV="small"
          justifyContent="center"
          alignItems="center"
          backgroundColor="pineGreen"
          style={getCircleStyle()}>
          <AtomText
            color="white"
            fontWeight={'bold'}
            text={item?.name}
            numberOfLines={2}
            textTransform="uppercase"
            size="small"
          />
        </AtomView>
      );
    },
    [navigation],
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
