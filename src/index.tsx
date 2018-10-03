import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import configureStore from './store/configureStore';
import { initialState } from './store/initialState';
import Home from './Container/Home';

export const history = createBrowserHistory();

injectGlobal`
  body {
    margin: 0;
    @media only screen and (min-width: 321px) {
      margin: 0 3em;
    }
    background: #f5f7fa;
  }
`;

render(
  <Provider store={configureStore(initialState)}>
    <Home />
  </Provider>,
  document.getElementById('app'),
);
