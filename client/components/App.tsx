import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './_Nav';
import Landing from './_Landing';
import Footer from './_Footer';

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
