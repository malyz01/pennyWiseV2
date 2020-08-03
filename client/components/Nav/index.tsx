import React from 'react';
import { sIndex } from './styles';

import Logo from './Logo';

const index = () => {
  const c = sIndex();
  return (
    <div className={c.mainContainer}>
      <Logo />
      <div className={c.menuContainer}>
        <div>Budget Tools</div>
        <div>Signed in as: John Doe</div>
      </div>
    </div>
  );
};

export default index;
