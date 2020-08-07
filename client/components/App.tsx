import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Footer from './Footer';
import Landing from './_Landing';
import Income from '../containers/_Income';
import Expense from '../containers/_Expense';
import Budget from '../containers/_Budget';
import Animate from './Animate';

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/income" component={Income} />
        <Route exact path="/expense" component={Expense} />
        <Route exact path="/budget" component={Budget} />
        <Route exact path="/animate" component={Animate} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
