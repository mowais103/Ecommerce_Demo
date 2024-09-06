import React from 'react';
import {COMMON_HEADER_OPTIONS} from '../styles/constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CartStackParamList} from '../types/navTypes';
import {CartScreen} from '../screens/CartScreen/CartScreen';

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
        options={{headerTitle: 'SHOP BUDDY'}}
      />
    </Stack.Navigator>
  );
};

export {Cart};
