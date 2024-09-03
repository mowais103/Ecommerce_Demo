import React, {useCallback, useMemo} from 'react';
import {AtomView} from '../atoms/AtomView';
import {AtomText} from '../atoms/AtomText';
import {FlatList, StyleSheet} from 'react-native';
import {
  DEFAULT_SCROLL_VIEW_PROPS,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from '../../styles/common';
import {useNavigation} from '@react-navigation/native';
import {roundOff} from '../../lib/utils';

type CollectionScrollProps = {
  collections: any[];
};

const styles = StyleSheet.create({
  columnWrapperStyle: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

const ItemSeparatorComponent = () => <AtomView pR="xs" />;

const CollectionScroll = ({collections}: CollectionScrollProps) => {
  const navigation = useNavigation<any>();

  // responsive circle style
  const getCircleStyle = useMemo(() => {
    const dim = WINDOW_WIDTH > WINDOW_HEIGHT ? WINDOW_WIDTH : WINDOW_HEIGHT;
    const width = roundOff(dim * 0.16);
    const height = roundOff(dim * 0.16);
    const borderRadius = roundOff(dim / 2);
    return {width, height, borderRadius};
  }, []);

  const renderCollection = useCallback(
    ({item}: any) => {
      const onPressCategory = () =>
        navigation.navigate('ProductListing', {url: item?.url});

      return (
        <AtomView
          onPress={onPressCategory}
          mV="small"
          justifyContent="center"
          alignItems="center"
          backgroundColor="pineGreen"
          style={getCircleStyle}>
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
    [navigation, getCircleStyle],
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
