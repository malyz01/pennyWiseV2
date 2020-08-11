import React from 'react';
import Container from '@material-ui/core/Container';

import { sIndex } from './style';

const index = () => {
  const c = sIndex();

  return (
    <div className={c.mainContainer}>
      <Container>
        WELCOME TO YOUR PROFILE
      </Container>
    </div>
  );
};

export default index;