import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import SulaApp from './components/SulaApp';
import AdminPage from './components/AdminPage';


const App = () => {
 
  
    return (
    <HashRouter basename="/sula">
          <Route path="/" exact component={SulaApp} />
          <Route path="/admin" exact component={AdminPage} />
    </HashRouter>
  );
}

export default App;