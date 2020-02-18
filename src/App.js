import React from 'react';

import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

const App = () => {
  return (
    <main role="main">
      <SearchForm />
      <div className="search-results-wrap py-5">
        <SearchResults/>
      </div>
    </main>
  );
}

export default App;
