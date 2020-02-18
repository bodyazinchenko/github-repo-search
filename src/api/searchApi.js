import { getRequest } from './index';

export function fetchRepos(query, page) {
  return getRequest('search/repositories', {
    page,
    q: query,
    per_page: 30,
    sort: 'stars'
  });
}
