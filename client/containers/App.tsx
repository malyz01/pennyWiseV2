import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Image from 'material-ui-image';

import Nav from './Nav';
import Footer from './Footer';
import Landing from './_Landing';
import Income from '../containers/_Income';
import Expense from '../containers/_Expense';
import Budget from '../containers/_Budget';
import Profile from '../containers/_Profile';
import Animate from './Animate';
import Sample from '../components/UserSample';
import { sApp } from './App';

const App = () => {
  const c = sApp();

  return (
    <Router>
      <Nav />
      <div className={c.mainContainer}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/income" component={Income} />
          <Route exact path="/expense" component={Expense} />
          <Route exact path="/budget" component={Budget} />
          <Route exact path="/animate" component={Animate} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/sample" component={Sample} />
        </Switch>
        <Footer />
        <div className={c.fern}>
          <Image aspectRatio={1 / 1.25} color='none' src="/assets/images/landing/fern.png" alt="Fern" />
        </div>
      </div>
    </Router>
  );
};

export default App;
