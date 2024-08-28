import {NavigationProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  SignInScreen: undefined;
  TabNavigator: undefined;
};

type BottomTabParamList = {
  Home: undefined;
  Collections: undefined;
  Favorites: undefined;
  Cart: undefined;
};

type HomeTabParamList = {
  HomeScreen: undefined;
};

type CollectionsTabParamList = {
  HomeScreen: undefined;
};

type CartTabParamList = {
  HomeScreen: undefined;
};

type FavoritesTabParamList = {
  HomeScreen: undefined;
};

type RootNavigation = NavigationProp<RootStackParamList>;
type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

type BottomTabNavigation = NavigationProp<BottomTabParamList>;
type BottomTabScreenProps<T extends keyof BottomTabParamList> =
  NativeStackScreenProps<BottomTabParamList, T>;

export type {
  RootStackParamList,
  RootNavigation,
  RootStackScreenProps,
  BottomTabParamList,
  HomeTabParamList,
  CollectionsTabParamList,
  CartTabParamList,
  FavoritesTabParamList,
  BottomTabNavigation,
  BottomTabScreenProps,
};
