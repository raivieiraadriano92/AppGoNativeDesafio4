import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import sagas from './sagas';
import reducers from './ducks';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: [], // Lista do que você não quer
};

const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = [
  sagaMiddleware,
];

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
const store = createAppropriateStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export default { store, persistor };
