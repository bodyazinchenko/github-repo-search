import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { 
  Button, 
  Form, 
  InputGroup, 
  Input, 
  InputGroupAddon 
} from 'reactstrap';

import { RootContext } from '../../index';


const SearchForm = () => {
  const { searchStore } = useContext(RootContext);

  const handleInputChange = (e) => {
    searchStore.updateSearchFieldValue(e.currentTarget.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    searchStore.searchRepos();
  }

  return (
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="mb-4">Search Github Repository</h1>
        <Form inline onSubmit={handleSubmit} className="justify-content-center">
          <InputGroup>
            <Input
              bsSize="lg"
              type="text"
              placeholder="Enter repository name"
              value={searchStore.searchFieldValue}
              onChange={handleInputChange}
            />
            <InputGroupAddon addonType="append">
              <Button 
                type="submit" 
                color="primary"
                disabled={searchStore.searchFieldValue.length === 0}
              >
                Search
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </div>
    </section>
  );
};

export default observer(SearchForm);
