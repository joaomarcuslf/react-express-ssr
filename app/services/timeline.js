import { fetchJson } from '../helpers/http';

const PORT = process.env.PORT || 3000;
const IP_BIND = process.env.IP || '0.0.0.0';

export const fetchTimeline = () => fetchJson(`http://${IP_BIND}:${PORT}/api/timeline`);

export const fetchTopTimeline = () => fetchJson(`http://${IP_BIND}:${PORT}/api/timeline?limit=3`);
