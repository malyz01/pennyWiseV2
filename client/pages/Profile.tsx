import React from 'react';
import Container from '@material-ui/core/Container';
import useStyles from './styles/profile';

import Card from '../containers/Profile/Card';

const index = () => {
  const c = useStyles();

  return (
    <div className={c.mainContainer}>
      <Container>
        <section>
          <h1>Welcome to your Profile</h1>
          <hr />
          <p>Manage your account and profile settings</p>
        </section>
        <Card />
      </Container>
    </div>
  );
};

export default index;
