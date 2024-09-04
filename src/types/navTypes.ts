import {NavigationProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  SignInScreen: undefined;
  TabNavigator: undefined;
  ProductDetail: {productId: string};
  ProductListing: {url: string};
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
  HomeScreen: undefined;
};

type FavoritesStackParamList = {
  HomeScreen: undefined;
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
};
