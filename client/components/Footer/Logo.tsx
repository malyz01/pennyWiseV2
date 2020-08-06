import React from 'react';

import { sLogo } from './style';

const Logo = () => {
  const f = sLogo();

  return (
    <div className={f.mainContainer}>
      Logo
    </div>
  )
};

export default Logo;
