import { fetchJson } from '../helpers/http';

const PORT = process.env.PORT || 3000;
const IP_BIND = process.env.IP || '0.0.0.0';

export const fetchPosts = (limit = 100) => fetchJson(`http://${IP_BIND}:${PORT}/api/posts?limit=${limit}`);

export const fetchHighlightedPosts = () => fetchPosts(3);
