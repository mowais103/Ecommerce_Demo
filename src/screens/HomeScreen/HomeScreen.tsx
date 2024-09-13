import React, {useCallback, useEffect, useState} from 'react';
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
import {Colors, DEFAULT_SCROLL_VIEW_PROPS, WINDOW_WIDTH} from '../../styles';
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

  const renderItem = useCallback(
    ({index}: any) =>
      index === 0 ? (
        <>
          <Divider />
          <AtomView pV="large" pH="medium">
            <ListHeader
              title={'Shop New Arrivals'}
              icon="arrowRight"
              iconStyle={{tintColor: Colors.coffeeBrown}}
            />
            <Spacer vertical="small" />
            <NewArrivals data={newArrivals} />
          </AtomView>
        </>
      ) : index === 1 ? (
        <AtomView pV="small" pH="medium">
          <ListHeader title={'Explore Hot Categories'} />
          <Spacer vertical="medium" />
          <CollectionScroll collections={categories} />
        </AtomView>
      ) : index === 2 ? (
        <AtomView pV="medium">
          <AppBanner image={Images.banner} />
        </AtomView>
      ) : index === 3 ? (
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
      ) : null,
    [categories, newArrivals],
  );

  if (loading) {
    return;
  }

  return (
    <AtomScreenContainer>
      <FlatList
        {...DEFAULT_SCROLL_VIEW_PROPS}
        data={[1, 1, 1, 1]} // render screen as flatlist with 4 items
        renderItem={renderItem}
        ListHeaderComponent={renderCarousel()}
      />
    </AtomScreenContainer>
  );
};

export {HomeScreen};
