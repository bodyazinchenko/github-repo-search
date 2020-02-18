import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { RootContext } from '../../index';

import Loader from '../Loader';
import Message from '../Message';
import RepoItem from '../RepoItem';

const SearchResults = () => {
  const { searchStore } = useContext(RootContext);

  if (searchStore.loading) {
    return <Loader />
  }

  if (searchStore.errorMessage) {
    return <Message text={searchStore.errorMessage} type="danger" />
  }

  if (searchStore.nothingFound) {
    return <Message text="Not found" type="warning" />
  }

  return (
    <div className="container-fluid repos-wrap">
      <div className="row">
        {searchStore.repositories.map(repository => (
          <RepoItem 
            key={repository.id}
            name={repository.full_name}
            description={repository.description}
            url={repository.html_url}
            updatedAt={repository.updated_at}
            starsCount={repository.stargazers_count}
            language={repository.language}
          />
        ))}
      </div>
    </div>
  );
};

export default observer(SearchResults);
