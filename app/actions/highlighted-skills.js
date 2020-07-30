import { asyncAction } from '../helpers/action-creator';
import { fetchHighlightedSkills } from '../services/skills';

export const getHighlightedSkills = asyncAction(
  'highlighted_skills',
  fetchHighlightedSkills,
);

export const {
  REQUEST_TYPE,
  SUCCESS_TYPE,
  FAILURE_TYPE,
} = getHighlightedSkills;
