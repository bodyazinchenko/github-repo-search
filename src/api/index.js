import parseLinkHeader from 'parse-link-header';

const API_PATH = 'https://api.github.com';

export function getRequest(path, params) {
  const url = new URL(`${API_PATH}/${path}`);
  url.search = new URLSearchParams(params).toString();
  return request(url, 'GET');
}

export function request(path, method, params) {
  return fetch(path, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
    .then(checkHttpStatus)
    .then(parseJSON);
}

function checkHttpStatus(response) {
  if (response.ok) {
    return response
  }

  return response.json().then((data) => Promise.reject(new Error(data.message)));
}

function parseJSON(response) {
  return response.json().then((data) => ({
    ...data,
    pagination: parseLinkHeader(response.headers.get('link'))
  }))
}