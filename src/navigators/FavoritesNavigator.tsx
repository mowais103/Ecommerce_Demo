import React from 'react';
import {COMMON_HEADER_OPTIONS} from '../styles/constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductListing} from '../screens';
import {FavoritesStackParamList} from '../types';

const Stack = createNativeStackNavigator<FavoritesStackParamList>();

const Favorites = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProductListing"
      screenOptions={{
        ...COMMON_HEADER_OPTIONS,
      }}>
      <Stack.Screen
        initialParams={{favorite: true}}
        name="ProductListing"
        component={ProductListing}
        options={{headerTitle: 'FAVORITES'}}
      />
    </Stack.Navigator>
  );
};

export {Favorites};
