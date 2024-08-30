import {StyleProp, TextStyle} from 'react-native';
import {Colors, FontSizes} from './common';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

const HEADER_TITLE_STYLE: StyleProp<
  Pick<TextStyle, 'fontSize' | 'fontFamily'> & {
    color?: string;
  }
> = {
  fontSize: FontSizes.medium,
  color: Colors.white,
  fontFamily: 'Oswald',
};

const COMMON_HEADER_OPTIONS: NativeStackNavigationOptions = {
  headerBackTitleVisible: false,
  headerTitleStyle: HEADER_TITLE_STYLE,
  headerStyle: {backgroundColor: Colors.pineGreen},
  headerTitleAlign: 'center',
};

export {COMMON_HEADER_OPTIONS};
