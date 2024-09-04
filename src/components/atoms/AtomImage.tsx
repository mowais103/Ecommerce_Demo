import React, {useCallback, useState} from 'react';
import {
  ViewStyle,
  StyleProp,
  ImageStyle,
  Image,
  StyleSheet,
} from 'react-native';
import {AtomView} from './AtomView';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Images} from '../../assets';

const styles = StyleSheet.create({
  loadingImgStyle: {
    zIndex: 1,
    position: 'absolute',
  },
});

type AtomImageProps = {
  src: string | keyof typeof Images;
  wrapStyle?: StyleProp<ViewStyle>;
  imgStyle: ImageStyle;
};

const AtomImage = ({wrapStyle, src, imgStyle}: AtomImageProps) => {
  const [loading, setLoading] = useState(false);

  const renderLoadingPlaceholder = useCallback(
    () => (
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
            borderRightWidth={imgStyle?.borderRightWidth}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    ),
    [imgStyle],
  );

  return (
    <AtomView style={wrapStyle}>
      {loading ? renderLoadingPlaceholder() : null}
      {src ? (
        <Image
          source={typeof src === 'string' ? {uri: src} : src}
          style={[imgStyle, loading ? styles.loadingImgStyle : null]}
          resizeMode="cover"
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />
      ) : null}
    </AtomView>
  );
};

export {AtomImage};
