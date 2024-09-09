import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';
import {COMMON_HEADER_OPTIONS} from '../styles';
import {
  CartScreen,
  ProductDetail,
  ProductListing,
  SignInScreen,
} from '../screens';
import {TabNavigator} from './TabNavigator';
import {HeaderLeft} from '../components';

const RootNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const isSignedIn = true; // add logic here later
  return (
    <Stack.Navigator
      initialRouteName="SignInScreen"
      screenOptions={{
        ...COMMON_HEADER_OPTIONS,
        headerLeft: () => <HeaderLeft />,
      }}>
      {!isSignedIn ? (
        <>
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
        </>
      ) : (
        <>
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProductListing"
            component={ProductListing}
            options={({route}) => ({title: route.params.name?.toUpperCase()})}
          />
          <Stack.Screen
            name="CartScreen"
            component={CartScreen}
            options={{headerTitle: 'CART'}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export {RootNavigator};
