import React from 'react';
import { Provider } from 'react-redux';

import {
  StaticRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import MainPage from './main-page';

import store from '../store';
import '../i18n';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default App;
