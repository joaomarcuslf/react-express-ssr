import React from 'react';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import SwitchApp from './router';

import storeCreator from './store';

import i18n from './i18n';

import { getPosts } from './actions/posts';
import { getProjects } from './actions/projects';
import { getSkills } from './actions/skills';

i18n();

const initialState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const store = storeCreator(initialState);

store.dispatch({ type: 'LOAD_PAGE_INIT' });

const App = () => (
  <Provider store={store}>
    <Router>
      <SwitchApp />
    </Router>
  </Provider>
);

store.dispatch(getPosts());
store.dispatch(getProjects());
store.dispatch(getSkills());

store.dispatch({ type: 'LOAD_PAGE_FINISH' });

export default App;
