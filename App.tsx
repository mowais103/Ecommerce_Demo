/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {RootNavigator} from './src/navigators/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
