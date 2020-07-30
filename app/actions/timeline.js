import { asyncAction } from '../helpers/action-creator';
import { fetchTimeline } from '../services/timeline';

import { SELECT_TIMELINE_EVENT } from '../constants/timeline';

export const getTimeline = asyncAction(
  'timeline',
  fetchTimeline,
);

export function selectTimelineEvent(eventId) {
  return {
    type: SELECT_TIMELINE_EVENT,
    payload: eventId,
  };
}

export const {
  REQUEST_TYPE,
  SUCCESS_TYPE,
  FAILURE_TYPE,
} = getTimeline;

export { SELECT_TIMELINE_EVENT };
