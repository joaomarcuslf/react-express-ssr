import { fetchJson } from '../helpers/http';

export const fetchProjects = (limit = 100) => fetchJson(`api/projects?limit=${limit}`);

export const fetchHighlightedProjects = () => fetchProjects(3);
