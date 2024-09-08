import React from 'react';
import {Pressable} from 'react-native';
import {AtomView} from '../../atoms/AtomView';
import {TColor} from '../../../types/styleTypes';

type PagingIndicatorProps = {
  count: number;
  activeIndex: number;
  onChange: (index: number) => void;
  useSquare?: boolean;
  activeDotColor?: TColor;
  inActiveDotColor?: TColor;
};

const PagingIndicator = ({
  count,
  activeIndex,
  onChange,
  useSquare,
  activeDotColor = 'pineGreen',
  inActiveDotColor = 'grey',
}: PagingIndicatorProps) => {
  return (
    <AtomView flexDirection="row" position="absolute" bottom={10}>
      {Array.from({length: count}).map((_, index) => {
        const indexToUse = activeIndex === index;
        return (
          <Pressable onPress={() => onChange(index)} key={index}>
            <AtomView
              key={index}
              backgroundColor={indexToUse ? activeDotColor : inActiveDotColor}
              height={useSquare ? 2 : 8}
              width={indexToUse ? 16 : 8}
              opacity={indexToUse ? 1 : 0.8}
              borderRadius={indexToUse ? 'small' : 'xxs'}
              mH={'xs'}
              pH={useSquare ? 'medium' : undefined}
            />
          </Pressable>
        );
      })}
    </AtomView>
  );
};

export default React.memo(PagingIndicator);
