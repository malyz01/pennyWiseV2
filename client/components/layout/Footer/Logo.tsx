import React from 'react';
import Image from 'material-ui-image';

import { sLogo } from './styles';

const Logo = () => {
  const c = sLogo();

  return (
    <div className={c.mainContainer}>
      <Image aspectRatio={1 / 1} color='none' src="/assets/images/pennywise_logo.png" alt="PennyWise Logo" />
      <div className={c.penny}>Penny<span className={c.wise}>Wise</span></div>
    </div>
  )
};

export default Logo;
