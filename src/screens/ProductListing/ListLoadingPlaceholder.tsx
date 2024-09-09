import React from 'react';
import {AtomView} from '../../components';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {WINDOW_WIDTH} from '../../styles';

const ListLoadingPlaceholder = () => (
  <AtomView flexDirection="row" scroll={true} flexWrap="wrap">
    {Array.from(Array(12).keys()).map(key => (
      <SkeletonPlaceholder key={key}>
        <SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item
            width={WINDOW_WIDTH / 2}
            height={WINDOW_WIDTH / 2}
          />
          <SkeletonPlaceholder.Item
            marginTop={15}
            marginBottom={25}
            marginLeft={25}>
            <SkeletonPlaceholder.Item
              width={72}
              height={16}
              alignSelf="center"
            />
            <SkeletonPlaceholder.Item width={164} height={18} marginTop={10} />
            <SkeletonPlaceholder.Item
              width={82}
              height={13}
              alignSelf="center"
              marginTop={8}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    ))}
  </AtomView>
);

export {ListLoadingPlaceholder};
