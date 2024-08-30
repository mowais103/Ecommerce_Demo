import React, {useCallback, useRef, useState} from 'react';
import {
  Animated,
  FlatListProps,
  LayoutAnimation,
  NativeSyntheticEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {AtomView} from '../../atoms/AtomView';
import PagingIndicator from './PagingIndicator';
import {
  DEFAULT_SCROLL_VIEW_PROPS,
  SNAPPING_FULL_SCREEN_FLAT_LIST_PROPS,
  WINDOW_WIDTH,
} from '../../../styles/common';

export interface IAtomCarouselProps extends FlatListProps<any> {
  showDots?: boolean;
  useSquares?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  loop?: boolean;
  data: any[];
  renderBelowFlatList?: () => React.ReactNode;
}

const CarouselSlider = ({
  data = [],
  showDots,
  horizontal,
  loop,
  pagingEnabled,
  containerStyle,
  ...rest
}: IAtomCarouselProps) => {
  const [scrollX, setScrollX] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<Animated.FlatList<any>>(null);

  const isLooping = () => loop && horizontal && data.length > 1;
  const dotAnimValue = useRef(
    new Animated.Value(isLooping() ? WINDOW_WIDTH : 0),
  ).current;

  const getPagingEnabled = () => {
    if (pagingEnabled !== undefined) {
      return pagingEnabled;
    }

    if (horizontal) {
      return true;
    }

    return false;
  };

  const onScrollListener = (event: NativeSyntheticEvent<any>): void => {
    dotAnimValue.setValue(event.nativeEvent.contentOffset.x);
    setScrollX(event.nativeEvent.contentOffset.x);
  };

  const onViewableItemsChanged = useRef(({viewableItems}: any) => {
    setActiveIndex(viewableItems[0].index);
  }).current;

  const scrollToOffset = (offset: number, animated = false) => {
    flatListRef.current?.scrollToOffset({
      offset,
      animated,
    });
  };

  const scrollToIndex = useCallback((index: number, animated = false) => {
    scrollToOffset(WINDOW_WIDTH * index, animated);
  }, []);

  const scrollTo = useCallback(
    (index: number) => {
      LayoutAnimation.easeInEaseOut();
      setActiveIndex(index);
      scrollToIndex(index, true);
    },
    [scrollToIndex],
  );

  const getItemLayout = (_, index: number) => {
    return {
      length: WINDOW_WIDTH,
      offset: WINDOW_WIDTH * index,
      index,
    };
  };

  const renderDots = () => {
    if (!showDots) {
      return null;
    }

    if (isLooping()) {
      return (
        <PagingIndicator
          count={data.length}
          activeIndex={activeIndex}
          onChange={scrollTo}
        />
      );
    }

    return null;
  };

  return (
    <AtomView
      justifyContent="center"
      alignItems="center"
      style={containerStyle}>
      <Animated.FlatList
        {...rest}
        {...[DEFAULT_SCROLL_VIEW_PROPS, SNAPPING_FULL_SCREEN_FLAT_LIST_PROPS]}
        data={data}
        onMomentumScrollEnd={() => {
          Animated.event([{nativeEvent: {contentOffset: {x: dotAnimValue}}}], {
            useNativeDriver: true,
            listener: onScrollListener,
          });
        }}
        scrollEventThrottle={16}
        ref={flatListRef}
        initialNumToRender={Math.min(data.length, 3)}
        pagingEnabled={getPagingEnabled()}
        bounces={false}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={isLooping() ? 1 : 0}
        onViewableItemsChanged={onViewableItemsChanged}
        getItemLayout={getItemLayout}
      />
      {renderDots()}
    </AtomView>
  );
};

export {CarouselSlider};
