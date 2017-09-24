import React from 'react';

import { Provider } from 'react-redux';
import Home from 'containers/home/home.ui';

import store from 'store/store';

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
