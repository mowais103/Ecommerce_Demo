import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navTypes';
import {TabNavigator} from './TabNavigator';
import {SignInScreen} from '../screens/SignInScreen/SignInScreen';
import {ProductDetail} from '../screens/ProductDetail/ProductDetail';
import {COMMON_HEADER_OPTIONS} from '../styles/constants';
import {HeaderLeft} from '../components/molecules/HeaderLeft';
import {useNavigation} from '@react-navigation/native';
import {ProductListing} from '../screens/ProductListing/ProductListing';

const RootNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const navigation = useNavigation();

  const isSignedIn = true; // add logic here later
  return (
    <Stack.Navigator
      initialRouteName="SignInScreen"
      screenOptions={{
        ...COMMON_HEADER_OPTIONS,
        headerLeft: () => (
          <HeaderLeft onPressBack={() => navigation.goBack()} />
        ),
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
            options={{headerTitle: 'SHOP BUDDY'}}
          />
          <Stack.Screen
            name="ProductListing"
            component={ProductListing}
            options={{headerTitle: 'SHOP BUDDY'}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export {RootNavigator};
