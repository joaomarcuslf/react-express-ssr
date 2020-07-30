import express from 'express';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

import { StaticRouter as Router } from 'react-router-dom';

import SwitchApp from '../router';

import { LANGUAGE_KEY } from '../constants/storage';

import storeCreator from '../store';
import i18n from '../i18n';

import { fetchHighlightedPosts } from '../services/posts';
import { fetchHighlightedProjects } from '../services/projects';
import { fetchTimeline } from '../services/timeline';
import { fetchHighlightedSkills } from '../services/skills';

const router = express.Router();

router.get('/*', async (req, res) => Promise.all([
  fetchHighlightedPosts(),
  fetchHighlightedProjects(),
  fetchTimeline(),
  fetchHighlightedSkills(),
]).then(([
  highlightedPostsData,
  highlightedProjectsData,
  timelineData,
  highlightedSkillsData,
]) => {
  const preloadedState = {
    highlightedPosts: {
      message: '',
      data: highlightedPostsData,
    },
    highlightedProjects: {
      message: '',
      data: highlightedProjectsData,
    },
    highlightedSkills: {
      message: '',
      data: highlightedSkillsData,
    },
    timeline: {
      activeIndex: timelineData.length - 1,
      data: timelineData,
    },
  };

  const store = storeCreator(preloadedState);
  store.dispatch({ type: 'LOAD_PAGE_INIT' });

  const App = ({ location, context, cookies }) => {
    i18n(cookies[LANGUAGE_KEY]);

    return (
      <Provider store={store}>
        <Router location={location} context={context}>
          <SwitchApp language="en" />
        </Router>
      </Provider>
    );
  };

  const reactComp = renderToString(
    <App location={req.url} context={{}} cookies={req.cookies} />,
  );

  store.dispatch({ type: 'LOAD_PAGE_FINISH' });

  return res.status(200).render('main', {
    reactApp: reactComp,
    preloadedState: store.getState(),
  });
}));

export default router;
