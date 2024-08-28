import {Icons} from '../assets/icons';
import {Colors} from '../styles/common';

type TStandardSizes =
  | 'xxs'
  | 'xs'
  | 'small'
  | 'medium'
  | 'large'
  | 'xl'
  | 'xxl';

type TSpacing = Exclude<TStandardSizes, 'xxl'>;

type TColor = keyof typeof Colors;
type TIcons = keyof typeof Icons;

type TFontSize = Exclude<TStandardSizes, 'xxs'>;

type TIconSize = Exclude<TStandardSizes, 'xxs' | 'xs' | 'xl' | 'xxl'>;

export type {TSpacing, TColor, TFontSize, TStandardSizes, TIconSize, TIcons};
