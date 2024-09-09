import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navTypes';
import {TabNavigator} from './TabNavigator';
import {SignInScreen} from '../screens/SignInScreen/SignInScreen';
import {ProductDetail} from '../screens/ProductDetail/ProductDetail';
import {COMMON_HEADER_OPTIONS} from '../styles/constants';
import {HeaderLeft} from '../components/molecules/HeaderLeft';
import {ProductListing} from '../screens/ProductListing/ProductListing';
import {CartScreen} from '../screens/CartScreen/CartScreen';

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
