import React from 'react';
import Image from 'material-ui-image';

import { sLogo } from './style';

const Logo = () => {
  const f = sLogo();

  return (
    <div className={f.mainContainer}>
      Logo
      <Image aspectRatio={1 / 1} src="/assets/images/pennywise_logo.png" alt="PennyWise Logo" />
    </div>
  )
};

export default Logo;
