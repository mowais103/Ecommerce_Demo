import {Platform, ScrollViewProps} from 'react-native';
import {TFontSize, TIconSize, TSpacing} from '../types/common';

export const IS_IOS = Platform.OS === 'ios';

const DEFAULT_SCROLL_VIEW_PROPS: Pick<
  ScrollViewProps,
  'showsVerticalScrollIndicator' | 'showsHorizontalScrollIndicator'
> = {
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
};

const Colors = {
  pineGreen: '#294F47',
  white: '#FFFFFF',
  black: '#000000',
  silver: '#A8B2AF',
};

const FontSizes: Record<TFontSize, number> = {
  xs: 8,
  small: 12,
  medium: 16,
  large: 20,
  xl: 24,
  xxl: 32,
};

const STDSpacing: Record<TSpacing, number> = {
  xs: 5,
  small: 8,
  medium: 16,
  large: 32,
  xl: 48,
};

const IconSizes: Record<TIconSize, number> = {
  small: 12,
  medium: 16,
  large: 20,
};

export {Colors, FontSizes, STDSpacing, DEFAULT_SCROLL_VIEW_PROPS, IconSizes};
