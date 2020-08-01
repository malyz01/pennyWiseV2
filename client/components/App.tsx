import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Landing from './Landing';
import { ISample } from './Nav/interface';

const App = () => {
  const sample: ISample[] = [
    {
      id: 1,
      name: 'Sample Nav'
    }
  ];

  return (
    <Router>
      <Nav sample={sample} />
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </Router>
  );
};

export default App;
