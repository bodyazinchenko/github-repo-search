import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { 
  Pagination as BootstrapPagination, 
  PaginationItem, 
  PaginationLink 
} from 'reactstrap';

import { RootContext } from '../../index';

const Pagination = () => {
  const { searchStore } = useContext(RootContext);

  const handlePaginationClick = (value) => {
    if (searchStore.currentPage !== value) {
      searchStore.updateCurrentPage(value);
    }
  }

  return (
    <div className="container-fluid">
      <BootstrapPagination size="md" aria-label="Pagination">
        {searchStore.pages.map(page => (
          <PaginationItem key={page} active={searchStore.currentPage === page}>
            <PaginationLink 
              href="#" 
              onClick={() => handlePaginationClick(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
      </BootstrapPagination>
    </div>
  );
};

export default observer(Pagination);
