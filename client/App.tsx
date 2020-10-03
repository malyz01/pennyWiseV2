import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Image from 'material-ui-image';

import Page from './pages';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import useStyle from './appStyles';

import Modal from './containers/Modal';

const App = () => {
  const c = useStyle();

  return (
    <Router>
      <Modal />
      <Nav />
      <div className={c.mainContainer}>
        <Switch>
          <Route exact path="/" component={Page.Home} />
          <Route exact path="/profile" component={Page.Home} />
          <Route exact path="/income" component={Page.Home} />
          <Route exact path="/expense" component={Page.Home} />
          <Route exact path="/budget" component={Page.Home} />
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
