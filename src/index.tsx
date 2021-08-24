/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistedStore} from './store';
import AppNavigator from './navigation';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}
