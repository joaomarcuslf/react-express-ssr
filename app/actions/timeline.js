import { asyncAction } from '../helpers/action-creator';
import { fetchTimeline } from '../services/timeline';

export const getTimeline = asyncAction(
  'timeline',
  fetchTimeline,
);

export const {
  REQUEST_TYPE,
  SUCCESS_TYPE,
  FAILURE_TYPE,
} = getTimeline;
