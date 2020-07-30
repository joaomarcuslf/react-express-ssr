import { fetchJson } from '../helpers/http';

export const fetchPosts = (limit = 100) => fetchJson(`api/posts?limit=${limit}`);

export const fetchHighlightedPosts = () => fetchPosts(3);
