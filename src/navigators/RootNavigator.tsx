import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navTypes';
import {TabNavigator} from './TabNavigator';
import {SignInScreen} from '../screens/SignInScreen/SignInScreen';

const RootNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const isSignedIn = true; // add logic here later
  return (
    <Stack.Navigator
      initialRouteName="SignInScreen"
      screenOptions={{headerShown: false}}>
      {!isSignedIn ? (
        <>
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </>
      )}
    </Stack.Navigator>
  );
};

export {RootNavigator};
