import React from 'react';
import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools'; // eslint-disable-line import/no-extraneous-dependencies

import { Provider } from 'react-redux';
import Home from 'home/home.ui';
import rootReducer from 'common/store/root.reducer';

const store = createStore(rootReducer, devToolsEnhancer());

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
