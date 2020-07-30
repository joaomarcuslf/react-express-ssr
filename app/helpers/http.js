import fetch from 'cross-fetch';

const defaultHeaders = {
  cache: 'no-cache',
  credentials: 'same-origin',
  method: 'GET',
  mode: 'cors',
  redirect: 'follow',
  referrer: 'no-referrer',
  headers: {
    'Content-Type': 'application/json',
  },
};

const buildUrl = (endpoint) => {
  if (process.env.BASE_URL) return `${process.env.BASE_URL}/${endpoint}`;

  return endpoint;
};

export const getData = (url, headers = {}) => fetch(
  url,
  {
    cache: 'no-cache',
    credentials: 'same-origin',
    mode: 'cors',
    redirect: 'follow',
    referrer: 'no-referrer',
    headers,
  },
);

export const fetchJson = async (url, headers = {}) => {
  try {
    const response = await fetch(buildUrl(url), {
      headers: {
        ...defaultHeaders,
        ...headers,
      },
      method: 'GET',
    });

    return response.json();
  } catch (ex) {
    return ex;
  }
};

export const postJson = async (url, data, headers = {}) => {
  try {
    const response = await fetch(url, {
      ...defaultHeaders,
      ...headers,
      method: 'POST',
      body: JSON.stringify(data),
    });

    return response.json();
  } catch (ex) {
    return ex;
  }
};
