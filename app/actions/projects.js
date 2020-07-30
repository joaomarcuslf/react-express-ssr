import { asyncAction } from '../helpers/action-creator';
import { fetchProjects } from '../services/projects';

export const getProjects = asyncAction(
  'projects',
  fetchProjects,
);

export const {
  REQUEST_TYPE,
  SUCCESS_TYPE,
  FAILURE_TYPE,
} = getProjects;
