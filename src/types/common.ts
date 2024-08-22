import {Colors} from '../styles/common';

type TStandardSizes =
  | 'xxs'
  | 'xs'
  | 'small'
  | 'medium'
  | 'large'
  | 'xl'
  | 'xxl';

type TSpacing = Exclude<TStandardSizes, 'xxs' | 'xxl'>;

type TColor = keyof typeof Colors;

type TFontSize = Exclude<TStandardSizes, 'xxs'>;

export type {TSpacing, TColor, TFontSize, TStandardSizes};
