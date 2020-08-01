import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Landing from './Landing';

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </Router>
  );
};

export default App;
