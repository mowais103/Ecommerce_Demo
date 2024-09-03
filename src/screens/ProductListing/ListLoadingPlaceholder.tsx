import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {WINDOW_WIDTH} from '../../styles/common';
import {AtomView} from '../../components/atoms/AtomView';

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
            marginLeft={15}>
            <SkeletonPlaceholder.Item
              width={118}
              height={16}
              borderRadius={2}
            />
            <SkeletonPlaceholder.Item
              width={156}
              height={25}
              borderRadius={2}
              marginTop={10}
            />
            <SkeletonPlaceholder.Item
              width={118}
              height={13}
              borderRadius={2}
              marginTop={5}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    ))}
  </AtomView>
);

export {ListLoadingPlaceholder};
