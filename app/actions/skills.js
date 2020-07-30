import { asyncAction } from '../helpers/action-creator';
import { fetchSkills } from '../services/skills';

export const getSkills = asyncAction(
  'skills',
  fetchSkills,
);

export const {
  REQUEST_TYPE,
  SUCCESS_TYPE,
  FAILURE_TYPE,
} = getSkills;
