import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction';

import * as actions from './app/actions';
import rootReducer from './reducers';
import rootSaga from './app/sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['appReducer'],
};

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware);
const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = composeWithDevTools({
  name: 'BibleApp Store',
  trace: true,
});

const store = createStore(persistedReducer, composeEnhancers(middleware));
const persistedStore = persistStore(store);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export {store, persistedStore, actions};
