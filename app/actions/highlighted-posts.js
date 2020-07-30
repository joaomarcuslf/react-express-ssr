import { asyncAction } from '../helpers/action-creator';
import { fetchHighlightedPosts } from '../services/posts';

export const getHighlightedPosts = asyncAction(
  'highlighted_posts',
  fetchHighlightedPosts,
);

export const {
  REQUEST_TYPE,
  SUCCESS_TYPE,
  FAILURE_TYPE,
} = getHighlightedPosts;
