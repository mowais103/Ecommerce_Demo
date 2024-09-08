import {memoize} from 'underscore';
import {roundOff} from '../lib/utils';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from './common';

const getCircleStyle = memoize(() => {
  const dim = WINDOW_WIDTH > WINDOW_HEIGHT ? WINDOW_WIDTH : WINDOW_HEIGHT;
  const width = roundOff(dim * 0.16);
  const height = roundOff(dim * 0.16);
  const borderRadius = roundOff(dim / 2);
  return {width, height, borderRadius};
});

export {getCircleStyle};
