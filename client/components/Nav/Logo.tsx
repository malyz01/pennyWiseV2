import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typo from '@material-ui/core/Typography';
import Image from 'material-ui-image';
import { sLogo } from './styles';

const Logo = () => {
  const c = sLogo();
  return (
    <ButtonBase className={c.mainContainer}>
      <div className={c.logoContainer}>
        <Image aspectRatio={1 / 1} src="/assets/images/pennywise_logo.png" />
      </div>
      <Typo color="primary">Penny</Typo>
      <Typo color="secondary">Wise</Typo>
    </ButtonBase>
  );
};

export default Logo;
