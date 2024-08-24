import {memoize} from 'underscore';
import {TIconSize} from '../types/common';
import {IconSizes} from '../styles/common';

const getSquareDims = memoize((n: number) => ({width: n, height: n}));

const getIconDims = (size: TIconSize) => {
  return getSquareDims(IconSizes[size]);
};

export {getIconDims};
