import React from 'react';
import Button from '@material-ui/core/Button';
import Image from 'material-ui-image';

import { sCardTop } from './styles';

const CardTop = () => {
  const c = sCardTop();

  return (
    <div className={c.mainContainer}>

      <div className={c.details}>
        <div className={c.name}>FULL NAME</div>
        <div className={c.email}>EMAIL@EMAIL.COM</div>
        <Button className={c.button} variant="contained" color="primary">
          Edit Profile
        </Button>
      </div>

      <div className={c.avatar}>
        <Image aspectRatio={1 / 1} color='none' src="/assets/images/avatar.png" alt="Avatar" />
      </div>

    </div>
  )
};

export default CardTop;
