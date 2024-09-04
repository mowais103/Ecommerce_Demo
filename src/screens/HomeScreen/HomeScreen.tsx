import React, {Fragment, useCallback, useEffect, useState} from 'react';
import {AtomScreenContainer} from '../../components/atoms/AtomScreenContainer';
import {CarouselSlider} from '../../components/molecules/CarouselSlider/CarouselSlider';
import {AtomImage} from '../../components/atoms/AtomImage';
import {DEFAULT_SCROLL_VIEW_PROPS, WINDOW_WIDTH} from '../../styles/common';
import {AtomView} from '../../components/atoms/AtomView';
import {ProductCard} from '../../components/molecules/ProductCard';
import {ListHeader} from '../../components/molecules/ListHeader';
import Video from 'react-native-video';
import {Endpoints, getData} from '../../async';
import {Divider} from '../../components/atoms/AtomDivider';
import {CollectionScroll} from '../../components/molecules/CollectionScroll';
import {video_url} from './constants';
import {FlatList} from 'react-native';
import {Spacer} from '../../components/atoms/AtomSpacer';
import {useImageAspectRatio} from '../../lib/hooks';
import {AppBanner} from '../../components/molecules/AppBanner';
import {Images} from '../../assets';

const HomeScreen = () => {
  const [newArrivals, setNewArrivals] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const fetchNewArrivals = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getData(`${Endpoints.getProducts}?limit=10`);
      if (res?.products) {
        setNewArrivals(res?.products);
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
      if (res) {
        setCategories(res);
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

  const renderCarouselItem = useCallback(
    ({item}: any) => (
      <AtomImage
        src={item?.images[0]}
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
        data={newArrivals ?? []}
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
          <ProductCard data={newArrivals} />
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
