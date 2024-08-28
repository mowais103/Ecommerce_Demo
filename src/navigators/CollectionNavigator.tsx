import React from 'react';
import {COMMON_HEADER_OPTIONS} from '../styles/constants';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CollectionsTabParamList} from '../types/navTypes';

const Stack = createNativeStackNavigator<CollectionsTabParamList>();

const Collections = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        ...COMMON_HEADER_OPTIONS,
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerTitle: 'SHOP BUDDY'}}
      />
    </Stack.Navigator>
  );
};

export {Collections};
