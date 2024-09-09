import {StyleProp, TextStyle} from 'react-native';
import {Colors, IS_IOS} from './common';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

const HEADER_TITLE_STYLE: StyleProp<
  Pick<TextStyle, 'fontFamily'> & {
    color?: string;
  }
> = {
  color: Colors.white,
  fontFamily: IS_IOS ? 'Avenir-BlackOblique' : 'serif',
};

const COMMON_HEADER_OPTIONS: NativeStackNavigationOptions = {
  headerBackTitleVisible: false,
  headerTitleStyle: HEADER_TITLE_STYLE,
  headerStyle: {backgroundColor: Colors.pineGreen},
  headerTitleAlign: 'center',
};

export {COMMON_HEADER_OPTIONS};
