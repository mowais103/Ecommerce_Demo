import React, {useCallback} from 'react';
import {DEFAULT_SCROLL_VIEW_PROPS, WINDOW_WIDTH} from '../../styles/common';
import {AtomView} from '../atoms/AtomView';
import {AtomCard} from '../atoms/AtomCard';
import {AtomText} from '../atoms/AtomText';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useImageAspectRatio} from '../../lib/hooks';

type ProductCardProps = {
  data: any[];
};

const ItemSeparatorComponent = () => <AtomView pR="xs" />;

const ProductCard = ({data}: ProductCardProps) => {
  const navigation = useNavigation();

  const aspectRatio = useImageAspectRatio(data[0]?.thumbnail ?? undefined);

  const renderProduct = useCallback(
    ({item}: any) => {
      const onPressCard = () =>
        navigation.navigate('ProductDetail', {productId: item.id});

      const renderBelowCard = () => (
        <AtomView width={WINDOW_WIDTH / 2.6} pV="small">
          <AtomText
            text={item.title}
            textAlign="center"
            textTransform="capitalize"
            size="small"
            numberOfLines={2}
            fontWeight="semibold"
          />
          <AtomText
            text={item.brand}
            textAlign="center"
            size="small"
            pT="xxs"
            numberOfLines={1}
            fontWeight="400"
          />
          <AtomText
            text={`$${item.price}`}
            textAlign="center"
            size="small"
            pT="xxs"
            color="red"
            fontWeight="400"
          />
        </AtomView>
      );

      return (
        <AtomCard
          onPressCard={onPressCard}
          image={item.thumbnail}
          wrapStyle={{width: WINDOW_WIDTH / 2.6}}
          imgStyle={{width: WINDOW_WIDTH / 2.6, aspectRatio}}
          renderBelowCard={renderBelowCard()}
        />
      );
    },
    [navigation, aspectRatio],
  );

  return (
    <FlatList
      {...DEFAULT_SCROLL_VIEW_PROPS}
      horizontal={true}
      data={data}
      renderItem={renderProduct}
      ItemSeparatorComponent={ItemSeparatorComponent}
    />
  );
};

export {ProductCard};
