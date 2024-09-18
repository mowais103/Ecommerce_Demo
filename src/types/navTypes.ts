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
  Account: undefined;
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

type AccountStackParamList = {
  AccountScreen: undefined;
};

export type RootNavigation = NavigationProp<RootStackParamList>;
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type BottomTabNavigation = NavigationProp<BottomTabParamList>;
export type BottomTabScreenProps<T extends keyof BottomTabParamList> =
  NativeStackScreenProps<BottomTabParamList, T>;

export type HomeStackNavigation = NavigationProp<HomeStackParamList>;
export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  NativeStackScreenProps<HomeStackParamList, T>;

export type CollectionStackNavigation =
  NavigationProp<CollectionsStackParamList>;
export type CollectionStackScreenProps<
  T extends keyof CollectionsStackParamList,
> = NativeStackScreenProps<CollectionsStackParamList, T>;

export type AccountStackNavigation = NavigationProp<AccountStackParamList>;
export type AccountStackScreenProps<T extends keyof AccountStackParamList> =
  NativeStackScreenProps<AccountStackParamList, T>;

export type CartStackNavigation = NavigationProp<CartStackParamList>;
export type CartStackScreenProps<T extends keyof CartStackParamList> =
  NativeStackScreenProps<CartStackParamList, T>;

export type FavoritesStackNavigation = NavigationProp<FavoritesStackParamList>;
export type FavoritesStackScreenProps<T extends keyof FavoritesStackParamList> =
  NativeStackScreenProps<FavoritesStackParamList, T>;

export type {
  RootStackParamList,
  BottomTabParamList,
  HomeStackParamList,
  CollectionsStackParamList,
  AccountStackParamList,
  CartStackParamList,
  FavoritesStackParamList,
};
