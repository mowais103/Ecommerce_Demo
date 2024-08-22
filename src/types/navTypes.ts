import {NavigationProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  HomeScreen: undefined;
  AddTransactionScreen: undefined;
};

type RootNavigation = NavigationProp<RootStackParamList>;
type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type {RootStackParamList, RootNavigation, RootStackScreenProps};
