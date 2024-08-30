import React, {useCallback} from 'react';
import {DEFAULT_SCROLL_VIEW_PROPS, WINDOW_WIDTH} from '../../styles/common';
import {AtomView} from '../atoms/AtomView';
import {AtomCard} from '../atoms/AtomCard';
import {FlatList} from 'react-native';

type CollectionsProps = {
  data: any[];
};

const ItemSeparatorComponent = () => <AtomView mR="small" />;

const CollectionCard = ({data}: CollectionsProps) => {
  const renderCollection = useCallback(
    ({item}) => (
      <AtomView pB="large">
        <AtomCard
          image={item.image}
          wrapStyle={{width: WINDOW_WIDTH - 90}}
          imgStyle={{
            width: WINDOW_WIDTH - 90,
            height: WINDOW_WIDTH - 250,
          }}
        />
      </AtomView>
    ),
    [],
  );

  return (
    <FlatList
      {...DEFAULT_SCROLL_VIEW_PROPS}
      horizontal={true}
      data={data}
      renderItem={renderCollection}
      ItemSeparatorComponent={ItemSeparatorComponent}
    />
  );
};

export {CollectionCard};
