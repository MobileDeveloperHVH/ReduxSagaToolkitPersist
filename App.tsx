import React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import Navigation from './src/navigation';

import {persists, store} from './src/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persists}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
