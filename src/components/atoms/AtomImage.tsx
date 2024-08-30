import React, {useState} from 'react';
import {ViewStyle, StyleProp, ImageStyle, Image} from 'react-native';
import {AtomView} from './AtomView';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

type AtomImageProps = {
  src: string;
  wrapStyle: StyleProp<ViewStyle>;
  imgStyle: ImageStyle;
};

const AtomImage = ({wrapStyle, src, imgStyle}: AtomImageProps) => {
  const [loading, setLoading] = useState(false);

  const renderLoadingPlaceholder = () => (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item
        flexDirection="column"
        alignItems="center"
        justifyContent="center">
        <SkeletonPlaceholder.Item
          aspectRatio={imgStyle?.aspectRatio}
          width={imgStyle?.width}
          height={imgStyle?.height}
          borderRadius={imgStyle?.borderRadius}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );

  return (
    <AtomView flexDirection="row" style={wrapStyle}>
      {loading ? renderLoadingPlaceholder() : null}
      {src ? (
        <Image
          source={{uri: src}}
          style={imgStyle}
          resizeMode="cover"
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />
      ) : null}
    </AtomView>
  );
};

export {AtomImage};
