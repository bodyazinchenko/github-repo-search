import React from 'react';
import { Spinner } from 'reactstrap';

const Loader = () => (
  <div className="loader-wrap text-center">
    <Spinner color="primary" />
  </div>
);

export default Loader;
