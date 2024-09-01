import React, {useCallback, useEffect, useState} from 'react';
import {AtomScreenContainer} from '../../components/atoms/AtomScreenContainer';
import {CarouselSlider} from '../../components/molecules/CarouselSlider/CarouselSlider';
import {AtomImage} from '../../components/atoms/AtomImage';
import {WINDOW_WIDTH} from '../../styles/common';
import {AtomView} from '../../components/atoms/AtomView';
import {ProductCard} from '../../components/molecules/ProductCard';
import {ListHeader} from '../../components/molecules/ListHeader';
import Video from 'react-native-video';
import {Endpoints, getData} from '../../async';
import {Divider} from '../../components/atoms/AtomDivider';

const video_url =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4';

const data = [
  {
    title: 'Explore Nature',
    description:
      'Discover the beauty of nature with breathtaking landscapes and stunning views.',
    image: 'https://picsum.photos/1800/1400',
    color: '#f72585',
  },
  {
    title: 'Adventure Awaits',
    description:
      'Embark on thrilling adventures and create unforgettable memories.',
    image: 'https://picsum.photos/1800/1400',
    color: '#4361ee',
  },
  {
    title: 'Relax and Unwind',
    description:
      'Indulge in relaxation and find inner peace in serene and tranquil environments.',
    image: 'https://picsum.photos/1800/1400',
    color: '#4cc9f0',
  },
  {
    title: 'Relax and Unwind',
    description:
      'Indulge in relaxation and find inner peace in serene and tranquil environments.',
    image: 'https://picsum.photos/1800/1400',
    color: '#4cc9f0',
  },
];

const HomeScreen = () => {
  const [newArrivals, setNewArrivals] = useState<any>([]);

  const fetchNewArrivals = useCallback(async () => {
    try {
      const res = await getData(`${Endpoints.getProducts}?limit=10`);
      if (res?.products) {
        setNewArrivals(res?.products);
      }
    } catch (e) {
      console.warn(e);
    }
  }, []);

  useEffect(() => {
    fetchNewArrivals();
  }, [fetchNewArrivals]);

  const renderCarouselItem = useCallback(
    ({item}: any) => (
      <AtomImage
        src={item.images[0]}
        wrapStyle={{width: WINDOW_WIDTH, aspectRatio: 1}}
        imgStyle={{
          width: WINDOW_WIDTH,
          aspectRatio: 1,
        }}
      />
    ),
    [],
  );

  return (
    <AtomScreenContainer>
      <AtomView scroll={true}>
        <CarouselSlider
          loop={true}
          horizontal={true}
          data={newArrivals}
          renderItem={renderCarouselItem}
          showDots={true}
          keyExtractor={(item, index) => `${item}-${index}`}
        />
        <Divider />
        <AtomView pV="large" pH="medium">
          <ListHeader title={'Shop New Arrivals'} icon="arrowRight" />
          <ProductCard data={newArrivals} />
        </AtomView>

        {!__DEV__ ? (
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
        ) : null}
      </AtomView>
    </AtomScreenContainer>
  );
};

export {HomeScreen};
