import { fetchJson } from '../helpers/http';

export const fetchSkills = (limit = 100) => fetchJson(`api/skills?limit=${limit}`);

export const fetchHighlightedSkills = () => fetchSkills(3);
