import React from 'react';
import Button from '@material-ui/core/Button';
import Image from 'material-ui-image';

import { sCardTop } from './styles';

const CardTop = () => {
  const c = sCardTop();

  return (
    <div className={c.mainContainer}>

      <div>
        <h1 className={c.name}>FULL NAME</h1>
        <h3 className={c.email}>EMAIL</h3>
      </div>

      <div>
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
