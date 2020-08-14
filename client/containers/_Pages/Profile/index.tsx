import React from 'react';
import Container from '@material-ui/core/Container';

import { sIndex } from './styles';
import ProfileCard from './ProfileCard';

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
        <ProfileCard />
      </Container>
    </div>
  );
};

export default index;
