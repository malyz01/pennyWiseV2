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
        <Menu />
      </div>
    </Container>
  );
};

export default index;
