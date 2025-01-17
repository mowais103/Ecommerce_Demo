import {NavigationProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Product} from './apiDataTypes';

type RootStackParamList = {
  SignInScreen: undefined;
  SignUpScreen: undefined;
  TabNavigator: undefined;
  ProductDetail: {product: Product};
  ProductListing: {url: string; name?: string; favorite?: boolean};
  CartScreen: undefined;
};

type BottomTabParamList = {
  Home: undefined;
  Collections: undefined;
  Favorites: undefined;
  Cart: undefined;
};

type HomeStackParamList = {
  HomeScreen: undefined;
};

type CollectionsStackParamList = {
  CollectionScreen: undefined;
};

type CartStackParamList = {
  CartScreen: undefined;
};

type FavoritesStackParamList = {
  ProductListing: {url: string; name?: string; favorite?: boolean};
};

type RootNavigation = NavigationProp<RootStackParamList>;
type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

type BottomTabNavigation = NavigationProp<BottomTabParamList>;
type BottomTabScreenProps<T extends keyof BottomTabParamList> =
  NativeStackScreenProps<BottomTabParamList, T>;

type HomeStackNavigation = NavigationProp<HomeStackParamList>;
type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  NativeStackScreenProps<HomeStackParamList, T>;

type CollectionStackNavigation = NavigationProp<CollectionsStackParamList>;
type CollectionStackScreenProps<T extends keyof CollectionsStackParamList> =
  NativeStackScreenProps<CollectionsStackParamList, T>;

type CartStackNavigation = NavigationProp<CartStackParamList>;
type CartStackScreenProps<T extends keyof CartStackParamList> =
  NativeStackScreenProps<CartStackParamList, T>;

export type {
  RootStackParamList,
  RootNavigation,
  RootStackScreenProps,
  BottomTabParamList,
  HomeStackParamList,
  CollectionsStackParamList,
  CartStackParamList,
  FavoritesStackParamList,
  BottomTabNavigation,
  BottomTabScreenProps,
  HomeStackNavigation,
  HomeStackScreenProps,
  CollectionStackNavigation,
  CollectionStackScreenProps,
  CartStackNavigation,
  CartStackScreenProps,
};
