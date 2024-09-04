import React, {useCallback} from 'react';
import {DEFAULT_SCROLL_VIEW_PROPS} from '../../styles/common';
import {AtomView} from '../atoms/AtomView';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AtomText} from '../atoms/AtomText';

type CollectionCardProps = {
  collection: any[];
};

const ItemSeparatorComponent = () => <AtomView mB="medium" />;

const CollectionCard = ({collection}: CollectionCardProps) => {
  const navigation = useNavigation<any>();

  const renderCollection = useCallback(
    ({item}: any) => {
      const onPressCategory = () =>
        navigation.navigate('ProductListing', {url: item?.url});

      return (
        <AtomView
          onPress={onPressCategory}
          justifyContent="center"
          pV="xl"
          backgroundColor="pineGreen">
          <AtomText
            color="white"
            fontWeight={400}
            pL="medium"
            text={item?.name}
            numberOfLines={2}
            textTransform="uppercase"
            letterSpacing={2}
          />
        </AtomView>
      );
    },
    [navigation],
  );
  return (
    <FlatList
      {...DEFAULT_SCROLL_VIEW_PROPS}
      data={collection}
      renderItem={renderCollection}
      ItemSeparatorComponent={ItemSeparatorComponent}
      keyExtractor={(item, index) => `${item.url}-${index}`}
    />
  );
};

export {CollectionCard};
