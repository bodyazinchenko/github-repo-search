import { observable, action, decorate, computed } from 'mobx';
import { fetchRepos } from '../api/searchApi';

class SearchStore {
  searchFieldValue = '';
  loading = false;
  nothingFound = false;
  errorMessage = '';
  currentPage = 1;
  lastPage = 1;
  results = [];
  cachedResults = observable.map();

  get repositories() {
    return this.results;
  }

  get pages() {
    const pages = [];
    for (let i = 0; i < this.lastPage; i++) {
      pages.push(i + 1);
    }

    return pages;
  }

  async searchRepos(isNew) {
    if (Boolean(isNew)) {
      this.resetRepoState();
    }

    this.loading = true;
    this.nothingFound = false;
    this.errorMessage = '';
    
    try {
      const response = await fetchRepos(this.searchFieldValue, this.currentPage);
      this.results = response.items;
      this.cachedResults.set(this.currentPage, response.items);
      this.nothingFound = response.items.length === 0;
      if (response.pagination.last !== undefined) {
        this.lastPage = Number(response.pagination.last.page);
      }
    } catch(err) {
      this.errorMessage = err.message;
    } finally {
      this.loading = false;
    }
  }

  updateCurrentPage(pageNumber) {
    this.currentPage = pageNumber;

    if (this.cachedResults.has(pageNumber)) {
      this.results = this.cachedResults.get(pageNumber);
    } else {
      this.searchRepos();
    }
  }

  updateSearchFieldValue(value) {
    this.searchFieldValue = value;
  }

  resetRepoState() {
    this.results = [];
    this.cachedResults.clear();
    this.currentPage = 1;
    this.lastPage = 1;
  }
}

const DecoratedSearchStore = decorate(SearchStore, {
  searchFieldValue: observable,
  loading: observable,
  nothingFound: observable,
  error: observable,
  currentPage: observable,
  lastPage: observable,
  results: observable,
  updateSearchFieldValue: action,
  searchRepos: action,
  updateCurrentPage: action,
  repositories: computed,
  pages: computed,
});

export default new DecoratedSearchStore();
