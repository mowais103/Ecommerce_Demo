import React, {useCallback} from 'react';
import {DEFAULT_SCROLL_VIEW_PROPS, WINDOW_WIDTH} from '../../styles/common';
import {AtomView} from '../atoms/AtomView';
import {AtomCard} from '../atoms/AtomCard';
import {AtomText} from '../atoms/AtomText';
import {FlatList, StyleSheet} from 'react-native';

type ProductCardProps = {
  data: any[];
};

const styles = StyleSheet.create({
  img: {
    width: WINDOW_WIDTH / 2.5,
    height: WINDOW_WIDTH / 1.6,
    borderRadius: 8,
  },
  wrap: {
    width: WINDOW_WIDTH / 2.5,
    height: WINDOW_WIDTH / 1.6,
    borderRadius: 8,
  },
});

const ItemSeparatorComponent = () => <AtomView pR="small" />;

const ProductCard = ({data}: ProductCardProps) => {
  const renderProduct = useCallback(({item}) => {
    const renderBelowCard = () => (
      <AtomView width={WINDOW_WIDTH / 2.5} pV="small">
        <AtomText
          text={item.title}
          textAlign="center"
          textTransform="uppercase"
          size="small"
          numberOfLines={2}
        />
        <AtomText
          text={item.title}
          textAlign="center"
          size="small"
          lineThrough={true}
          pT="xs"
        />
        <AtomText
          text={item.title}
          textAlign="center"
          size="xs"
          numberOfLines={1}
        />
      </AtomView>
    );

    return (
      <AtomCard
        image={item.image}
        wrapStyle={styles.wrap}
        imgStyle={styles.img}
        renderBelowCard={renderBelowCard()}
      />
    );
  }, []);

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
