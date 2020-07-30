import { asyncAction } from '../helpers/action-creator';
import { fetchHighlightedProjects } from '../services/projects';

export const getHighlightedProjects = asyncAction(
  'highlighted_projects',
  fetchHighlightedProjects,
);

export const {
  REQUEST_TYPE,
  SUCCESS_TYPE,
  FAILURE_TYPE,
} = getHighlightedProjects;
