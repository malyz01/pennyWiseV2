import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Footer from './Footer';
import Landing from './_Landing';
import Animate from './Animate';

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/animate" component={Animate} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
