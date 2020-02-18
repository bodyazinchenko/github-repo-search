import React, { createContext } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import searchStore from './stores/searchStore';

import App from './App';

export const RootContext = createContext({});

ReactDOM.render(
  (
    <RootContext.Provider value={{ searchStore }}>
      <App/>
    </RootContext.Provider>
  ), 
  document.getElementById('root')
);
