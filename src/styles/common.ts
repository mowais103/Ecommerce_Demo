import {
  Dimensions,
  FlatListProps,
  Platform,
  ScrollViewProps,
} from 'react-native';
import {TFontSize, TIconSize, TSpacing} from '../types/styleTypes';

const IS_IOS = Platform.OS === 'ios';

const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} = Dimensions.get('window');

const DEFAULT_SCROLL_VIEW_PROPS: Pick<
  ScrollViewProps,
  'showsVerticalScrollIndicator' | 'showsHorizontalScrollIndicator'
> = {
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
};

const SNAPPING_FULL_SCREEN_FLAT_LIST_PROPS: Partial<FlatListProps<any>> = {
  overScrollMode: 'auto',
  decelerationRate: 'fast',
  snapToAlignment: 'start',
  snapToInterval: WINDOW_WIDTH,
};

const Colors = {
  pineGreen: '#294F47',
  white: '#FFFFFF',
  black: '#000000',
  silver: '#A8B2AF',
  grey: '#BABFBE',
  red: '#FF0000',
  coffeeBrown: '#4C262E',
  lightGrey: '#F5F4F3',
  brown: '#AC866B',
  black30: 'rgba(0, 0, 0, 0.3)',
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
  xxs: 4,
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
  xl: 24,
  xxl: 32,
};

export {
  Colors,
  FontSizes,
  STDSpacing,
  DEFAULT_SCROLL_VIEW_PROPS,
  IconSizes,
  IS_IOS,
  WINDOW_WIDTH,
  WINDOW_HEIGHT,
  SNAPPING_FULL_SCREEN_FLAT_LIST_PROPS,
};
