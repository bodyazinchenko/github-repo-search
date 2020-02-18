import React, {
  Suspense,
  createContext
} from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import searchStore from './stores/searchStore';

import App from './App';

export const RootContext = createContext({});

ReactDOM.render(
  (
    <RootContext.Provider value={{ searchStore }}>
      <Suspense fallback={<div>Loading...</div>}>
        <App/>
      </Suspense>
    </RootContext.Provider>
  ), 
  document.getElementById('root')
);
