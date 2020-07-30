import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import { withTranslation } from 'react-i18next';

import MainPage from './pages/main';
import PostsPage from './pages/posts';
import ProjectsPage from './pages/projects';
import AboutMePage from './pages/about-me';

import Menu from './containers/menu';

const App = () => (
  <>
    <Menu />

    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>

      <Route path="/posts">
        <PostsPage />
      </Route>

      <Route path="/projects">
        <ProjectsPage />
      </Route>

      <Route path="/about-me" exact>
        <AboutMePage />
      </Route>
    </Switch>
  </>
);

export default withTranslation()(App);
