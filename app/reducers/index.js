import { combineReducers } from 'redux';

import menu from './menu';
import highlightedPosts from './highlighted-posts';
import highlightedProjects from './highlighted-projects';
import highlightedSkills from './highlighted-skills';
import timeline from './timeline';
import posts from './posts';
import projects from './projects';
import skills from './skills';

const rootReducer = combineReducers({
  menu,
  highlightedPosts,
  highlightedProjects,
  highlightedSkills,
  timeline,
  posts,
  projects,
  skills,
});

export default rootReducer;
