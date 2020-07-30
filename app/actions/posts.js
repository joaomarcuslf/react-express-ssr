import { asyncAction } from '../helpers/action-creator';
import { fetchPosts } from '../services/posts';

export const getPosts = asyncAction(
  'posts',
  fetchPosts,
);

export const {
  REQUEST_TYPE,
  SUCCESS_TYPE,
  FAILURE_TYPE,
} = getPosts;
