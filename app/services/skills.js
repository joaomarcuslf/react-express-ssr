import { fetchJson } from '../helpers/http';

const PORT = process.env.PORT || 3000;
const IP_BIND = process.env.IP || '0.0.0.0';

export const fetchSkills = (limit = 100) => fetchJson(`http://${IP_BIND}:${PORT}/api/skills?limit=${limit}`);

export const fetchHighlightedSkills = () => fetchSkills(3);
