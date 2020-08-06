import React from 'react';
import Container from '@material-ui/core/Container';
import { sIndex } from './styles';

import Logo from './Logo';
import Menu from './Menu';

const index = () => {
  const c = sIndex();
  return (
    <Container>
      <div className={c.mainContainer}>
        <Logo />
        <div className={c.menuContainer}>
          <Menu />
        </div>
      </div>
    </Container>
  );
};

export default index;
