import React from 'react';

import { sLogo } from './style';

const Logo = () => {
  const f = sLogo();

  return (
    <div className={f.mainContainer}>
      <img src='/assets/images/pennywise_logo.png' alt='PennyWise Logo' />
    </div>
  )
};

export default Logo;
