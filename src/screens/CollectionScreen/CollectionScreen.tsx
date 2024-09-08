import React, {useCallback, useEffect, useState} from 'react';
import {AtomScreenContainer} from '../../components/atoms/AtomScreenContainer';
import {AtomView} from '../../components/atoms/AtomView';
import {SearchBar} from '../../components/molecules/SearchBar';
import {CollectionStackScreenProps} from '../../types/navTypes';
import {Spacer} from '../../components/atoms/AtomSpacer';
import {CollectionCard} from '../../components/molecules/CollectionCard';
import {Endpoints, getData} from '../../async';
import {CategoryObject} from '../../types/apiDataTypes';

type CollectionScreenProps = CollectionStackScreenProps<'CollectionScreen'>;

const CollectionScreen = ({}: CollectionScreenProps) => {
  const [value, setValue] = useState<string>('');
  const [categories, setCategories] = useState<CategoryObject | any>({});
  const [loading, setLoading] = useState(false);

  const fetchCollections = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getData(Endpoints.getProductsCategories);
      if (res.data) {
        setCategories(res.data);
        setLoading(false);
        return;
      }
    } catch (e) {
      console.warn(e);
      setLoading(false);
      return;
    }
  }, []);

  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  if (loading) {
    return;
  }

  return (
    <AtomScreenContainer>
      <AtomView pAll="medium" flex={1}>
        <SearchBar
          value={value}
          onChangeText={val => setValue(val)}
          onPressClose={() => setValue('')}
        />
        <Spacer vertical="medium" />
        <CollectionCard collection={categories} />
      </AtomView>
    </AtomScreenContainer>
  );
};

export {CollectionScreen};
