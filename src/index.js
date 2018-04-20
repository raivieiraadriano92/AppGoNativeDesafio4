import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import 'config/DevToolsConfig';
import 'config/ReactotronConfig';
import store from 'store';
import Routes from 'routes';

const App = () => (
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <Routes />
    </PersistGate>
  </Provider>
);

export default App;
