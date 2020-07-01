export const getData = (url, headers = {}) => fetch(
  url,
  {
    cache: 'no-cache',
    credentials: 'same-origin',
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    referrer: 'no-referrer',
    ...headers,
  },
);
