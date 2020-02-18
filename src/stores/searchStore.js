import { observable, action, decorate, computed } from 'mobx';
import { fetchRepos } from '../api/searchApi';

class SearchStore {
  searchFieldValue = '';
  loading = false;
  nothingFound = false;
  errorMessage = '';
  currentPage = 1;
  results = [];

  updateSearchFieldValue(value) {
    this.searchFieldValue = value;
  }

  get repositories() {
    return this.results;
  }

  async searchRepos() {
    this.loading = true;
    this.nothingFound = false;
    this.errorMessage = '';
    
    try {
      const result = await fetchRepos(this.searchFieldValue, this.currentPage);
      this.results = result.items;
      this.nothingFound = result.items.length === 0;
    } catch(err) {
      this.errorMessage = err.message;
    } finally {
      this.loading = false;
    }
  }
}

const DecoratedSearchStore = decorate(SearchStore, {
  searchFieldValue: observable,
  loading: observable,
  nothingFound: observable,
  error: observable,
  currentPage: observable,
  results: observable,
  updateSearchFieldValue: action,
  searchRepos: action,
  repositories: computed
});

export default new DecoratedSearchStore();
