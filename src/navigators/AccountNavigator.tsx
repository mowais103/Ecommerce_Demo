import React from 'react';
import {COMMON_HEADER_OPTIONS} from '../styles/constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AccountStackParamList} from '../types';
import {AccountScreen} from '../screens/AcoountScreen';

const Stack = createNativeStackNavigator<AccountStackParamList>();

const Account = () => {
  return (
    <Stack.Navigator
      initialRouteName="AccountScreen"
      screenOptions={{
        ...COMMON_HEADER_OPTIONS,
      }}>
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{headerTitle: 'ACCOUNT'}}
      />
    </Stack.Navigator>
  );
};

export {Account};
