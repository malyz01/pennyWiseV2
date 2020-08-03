import React from 'react';
import Container from '@material-ui/core/Container';
import { sIndex } from './styles';

import Logo from './Logo';

const index = () => {
  const c = sIndex();
  return (
    <Container>
      <div className={c.mainContainer}>
        <Logo />
        <div className={c.menuContainer}>
          <div className={c.menu}>Budget Tools</div>
          <div className={c.menu}>Signed in as: John Doe</div>
        </div>
      </div>
    </Container>
  );
};

export default index;
