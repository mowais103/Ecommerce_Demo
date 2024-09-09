import React from 'react';
import {COMMON_HEADER_OPTIONS} from '../styles/constants';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../types/navTypes';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const Home = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        ...COMMON_HEADER_OPTIONS,
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerTitle: 'LAZADA'}}
      />
    </Stack.Navigator>
  );
};

export {Home};
