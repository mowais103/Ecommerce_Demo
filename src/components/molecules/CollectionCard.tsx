import React, {ReactNode, useCallback} from 'react';
import {CarouselSlider} from './CarouselSlider/CarouselSlider';
import {WINDOW_WIDTH} from '../../styles/common';
import {AtomView} from '../atoms/AtomView';
import {AtomCard} from '../atoms/AtomCard';

type CollectionsProps = {
  data: any[];
  leftElement?: ReactNode;
  RightElement?: ReactNode;
};

const ItemSeparatorComponent = () => <AtomView mR="small" />;

const CollectionCard = ({
  data,
  leftElement,
  RightElement,
}: CollectionsProps) => {
  const renderCollection = useCallback(
    ({item}) => (
      <AtomCard
        image={item.image}
        wrapStyle={{width: WINDOW_WIDTH - 90}}
        imgStyle={{
          width: WINDOW_WIDTH - 90,
          height: WINDOW_WIDTH - 250,
        }}
      />
    ),
    [],
  );

  const renderCard = () => (
    <CarouselSlider
      horizontal={true}
      data={data}
      renderItem={renderCollection}
      ItemSeparatorComponent={ItemSeparatorComponent}
    />
  );

  if (leftElement || RightElement) {
    return (
      <>
        <AtomView
          pV="small"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          {leftElement ? leftElement : null}
          {RightElement ? RightElement : null}
        </AtomView>
        {renderCard()}
      </>
    );
  }

  return renderCard();
};

export {CollectionCard};
