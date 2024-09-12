import React, {Fragment, useCallback, useEffect, useState} from 'react';
import {Endpoints, getData} from '../../async';
import {Product} from '../../types';
import {useImageAspectRatio} from '../../lib';
import {FlatList, ListRenderItem, ListRenderItemInfo} from 'react-native';
import {
  AppBanner,
  AtomImage,
  AtomScreenContainer,
  AtomView,
  CarouselSlider,
  Divider,
  ListHeader,
  Spacer,
} from '../../components';
import {DEFAULT_SCROLL_VIEW_PROPS, WINDOW_WIDTH} from '../../styles';
import Video from 'react-native-video';
import {video_url} from './constants';
import {Images} from '../../assets';
import {NewArrivals} from './NewArrivals';
import {CollectionScroll} from './CollectionScroll';

const HomeScreen = () => {
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);
  const [categories, setCategories] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const fetchNewArrivals = useCallback(async () => {
    setLoading(true);
    try {
      const res: any = await getData(`${Endpoints.getProducts}?limit=10`);
      if (res.data) {
        setNewArrivals(res.data.products);
        setLoading(false);
      }
    } catch (e) {
      console.warn(e);
      setLoading(false);
    }
  }, []);

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
    fetchNewArrivals();
    fetchCollections();
  }, [fetchNewArrivals, fetchCollections]);

  const aspectRatio = useImageAspectRatio(
    newArrivals[0]?.thumbnail ? newArrivals[0]?.thumbnail : '',
  );

  const renderCarouselItem: ListRenderItem<Product> = useCallback(
    ({item}: ListRenderItemInfo<Product>) => (
      <AtomImage
        src={item.images[0]}
        imgStyle={{
          width: WINDOW_WIDTH,
          aspectRatio,
        }}
      />
    ),
    [aspectRatio],
  );

  const renderCarousel = useCallback(
    () => (
      <CarouselSlider
        loop={true}
        horizontal={true}
        data={newArrivals}
        renderItem={renderCarouselItem}
        showDots={true}
        keyExtractor={(item, index) => `${item.id}-${index}`}
      />
    ),
    [newArrivals, renderCarouselItem],
  );

  const renderContentBelowCarousel = useCallback(
    () => (
      <Fragment>
        <Divider />
        <AtomView pV="large" pH="medium">
          <ListHeader title={'Shop New Arrivals'} icon="arrowRight" />
          <Spacer vertical="small" />
          <NewArrivals data={newArrivals} />

          <Spacer vertical="medium" />
          <ListHeader title={'Browse Hot Categories'} />
          <Spacer vertical="medium" />

          <CollectionScroll collections={categories} />
          <Spacer vertical="medium" />
          <AppBanner image={Images.banner} />
        </AtomView>

        <Video
          source={{
            uri: video_url,
          }}
          paused={false}
          repeat={true}
          muted={true}
          style={{
            width: WINDOW_WIDTH,
            height: WINDOW_WIDTH / 1,
          }}
          onError={e => console.log(e)}
          poster={'https://picsum.photos/seed/picsum/1800/1400'}
        />
      </Fragment>
    ),
    [categories, newArrivals],
  );

  if (loading) {
    return;
  }

  return (
    <AtomScreenContainer>
      <FlatList
        {...DEFAULT_SCROLL_VIEW_PROPS}
        data={[]}
        renderItem={() => null}
        ListHeaderComponent={renderCarousel()}
        ListFooterComponent={renderContentBelowCarousel()}
      />
    </AtomScreenContainer>
  );
};

export {HomeScreen};
