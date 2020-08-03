import React from 'react';
import { sIndex } from './styles';

import Logo from './Logo';

const index = () => {
  const c = sIndex();
  return (
    <div className={c.mainContainer}>
      <Logo />
    </div>
  );
};

export default index;
