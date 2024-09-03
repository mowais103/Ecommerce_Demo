import {memoize} from 'underscore';
import {TIconSize} from '../types/common';
import {IconSizes} from '../styles/common';

const getSquareDims = memoize((n: number) => ({width: n, height: n}));

const getIconDims = (size: TIconSize) => {
  return getSquareDims(IconSizes[size]);
};

const calculateOriginalPrice = (
  discountedPrice: string,
  discountPercentage: string,
) => {
  const originalPrice =
    (Number(discountedPrice) * 100) / (100 - Number(discountPercentage));
  return originalPrice.toFixed(2);
};

const roundOff = (val: number) => Math.round(Number(val));

export {getIconDims, calculateOriginalPrice, roundOff};
