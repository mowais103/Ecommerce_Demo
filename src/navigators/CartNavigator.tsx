import React from 'react';
import {COMMON_HEADER_OPTIONS} from '../styles/constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CartStackParamList} from '../types';
import {CartScreen} from '../screens';

const Stack = createNativeStackNavigator<CartStackParamList>();

const Cart = () => {
  return (
    <Stack.Navigator
      initialRouteName="CartScreen"
      screenOptions={{
        ...COMMON_HEADER_OPTIONS,
      }}>
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{headerTitle: 'CART'}}
      />
    </Stack.Navigator>
  );
};

export {Cart};
