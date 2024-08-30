import React, {useCallback} from 'react';
import {AtomScreenContainer} from '../../components/atoms/AtomScreenContainer';
import {CarouselSlider} from '../../components/molecules/CarouselSlider/CarouselSlider';
import {AtomImage} from '../../components/atoms/AtomImage';
import {WINDOW_WIDTH} from '../../styles/common';
import {AtomView} from '../../components/atoms/AtomView';
import {CollectionCard} from '../../components/molecules/CollectionCard';
import {AppBanner} from '../../components/molecules/AppBanner';
import {ProductCard} from '../../components/molecules/ProductCard';
import {ListHeader} from '../../components/molecules/ListHeader';
import Video from 'react-native-video';

const video_url =
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4';

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
  const renderCarouselItem = useCallback(
    ({item}) => (
      <AtomImage
        src={item.image}
        wrapStyle={{width: WINDOW_WIDTH}}
        imgStyle={{
          width: WINDOW_WIDTH,
          aspectRatio: 1800 / 1400,
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
          data={data}
          renderItem={renderCarouselItem}
          showDots={true}
        />
        <AtomView pAll="small">
          <ListHeader title={data[0].title} icon="arrowRight" />
          <ProductCard data={data} />
          <ListHeader title={data[1].title} icon="arrowRight" />
          <CollectionCard data={data} />
          <AppBanner image="https://picsum.photos/1800/1400" />
          <ListHeader title={data[2].title} icon="arrowRight" />
          <ProductCard data={data} />
        </AtomView>

        <Video
          source={{
            uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
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
      </AtomView>
    </AtomScreenContainer>
  );
};

export {HomeScreen};
