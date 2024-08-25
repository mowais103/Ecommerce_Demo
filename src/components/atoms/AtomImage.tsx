import React, {useState} from 'react';
import {ViewStyle, StyleProp, ImageStyle, Image} from 'react-native';
import {AtomView} from './AtomView';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

type AtomImageProps = {
  src: string;
  wrapStyle?: StyleProp<ViewStyle>;
  imgStyle?: ImageStyle;
  noRadius?: boolean;
  loading?: boolean;
};

const AtomImage = ({wrapStyle, src, imgStyle, noRadius}: AtomImageProps) => {
  const [loading, setLoading] = useState(false);

  const renderLoadingPlaceholder = () => (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item
        flexDirection="column"
        alignItems="center"
        justifyContent="center">
        <SkeletonPlaceholder.Item
          width={imgStyle?.width}
          height={imgStyle?.height}
          borderRadius={noRadius ? 0 : 10}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );

  return (
    <>
      {loading ? renderLoadingPlaceholder() : null}
      <AtomView style={wrapStyle}>
        <Image
          source={{uri: src}}
          style={imgStyle}
          resizeMode="cover"
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />
      </AtomView>
    </>
  );
};

export {AtomImage};
