import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Image from 'material-ui-image';

import Page from './_Pages';
import Nav from './Nav';
import Footer from './Footer';
import Sample from '../components/UserSample';
import { sApp } from './styles';

import Modal from './Modal';

const App = () => {
  const c = sApp();

  return (
    <Router>
      <Modal />
      <Nav />
      <div className={c.mainContainer}>
        <Switch>
          <Route exact path="/" component={Page.Landing} />
          <Route exact path="/income" component={Page.Income} />
          <Route exact path="/expense" component={Page.Expense} />
          <Route exact path="/budget" component={Page.Budget} />
          <Route exact path="/profile" component={Page.Profile} />
          <Route exact path="/sample" component={Sample} />
        </Switch>
        <Footer />
        <div className={c.fern}>
          <Image
            aspectRatio={1 / 1.25}
            color="none"
            src="/assets/images/landing/fern.png"
            alt="Fern"
          />
        </div>
      </div>
    </Router>
  );
};

export default App;
