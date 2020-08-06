import React from 'react';
import Image from 'material-ui-image';

import { sLogo } from './style';

const Logo = () => {
  const f = sLogo();

  return (
    <div className={f.mainContainer}>
      <Image aspectRatio={1 / 1} src="/assets/images/pennywise_logo.png" alt="PennyWise Logo" />
      <p className={f.penny}>Penny<span className={f.wise}>Wise</span></p>
    </div>
  )
};

export default Logo;
