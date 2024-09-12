import React from 'react';
import {AtomView} from '../atoms/AtomView';
import {AtomText} from '../atoms/AtomText';
import {useNavigation} from '@react-navigation/native';
import {Category} from '../../types/apiDataTypes';
import {RootNavigation} from '../../types/navTypes';
import {getCollectionCircleStyle} from '../../styles/utils';

type CollectionScrollProps = {
  collection: Category;
};

const CollectionCircle = ({collection}: CollectionScrollProps) => {
  const navigation = useNavigation<RootNavigation>();

  const onPressCategory = () =>
    navigation.navigate('ProductListing', {
      url: collection?.url,
      name: collection.name,
    });

  return (
    <AtomView
      onPress={onPressCategory}
      mV="small"
      justifyContent="center"
      alignItems="center"
      backgroundColor="pineGreen"
      style={getCollectionCircleStyle()}>
      <AtomText
        color="white"
        fontWeight={'bold'}
        text={collection?.name}
        numberOfLines={2}
        textTransform="uppercase"
        size="small"
      />
    </AtomView>
  );
};

export {CollectionCircle};
