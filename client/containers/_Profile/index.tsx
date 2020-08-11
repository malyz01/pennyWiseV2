import React from 'react';
import Container from '@material-ui/core/Container';

import { sIndex } from './style';

const index = () => {
  const c = sIndex();

  return (
    <div className={c.mainContainer}>
      <Container>
      <section>
          <h1>Welcome to your Profile</h1>
          <hr />
          <p>Manage your account and profile settings</p>
        </section>
      </Container>
    </div>
  );
};

export default index;