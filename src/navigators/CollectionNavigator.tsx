import React from 'react';
import {COMMON_HEADER_OPTIONS} from '../styles/constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CollectionsStackParamList} from '../types';
import {CollectionScreen} from '../screens';

const Stack = createNativeStackNavigator<CollectionsStackParamList>();

const Collections = () => {
  return (
    <Stack.Navigator
      initialRouteName="CollectionScreen"
      screenOptions={{
        ...COMMON_HEADER_OPTIONS,
      }}>
      <Stack.Screen
        name="CollectionScreen"
        component={CollectionScreen}
        options={{headerTitle: ' OUR COLLECTIONS'}}
      />
    </Stack.Navigator>
  );
};

export {Collections};
