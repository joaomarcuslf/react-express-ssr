import { fetchJson } from '../helpers/http';

export const fetchTimeline = () => fetchJson('api/timeline');

export const fetchTopTimeline = () => fetchJson('api/timeline?limit=3');
