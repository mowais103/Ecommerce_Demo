import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navTypes';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import {COMMON_HEADER_OPTIONS} from '../styles/constants';

const RootNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        ...COMMON_HEADER_OPTIONS,
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: 'SHOP BUDDY',
        }}
      />
    </Stack.Navigator>
  );
};

export {RootNavigator};
