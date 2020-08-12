import React from 'react';
import Button from '@material-ui/core/Button';
import Image from 'material-ui-image';

import { sCardTop } from './styles'

const CardTop = () => {
const c = sCardTop();

  return (
    <div>

      <div>
        <h1>FULL NAME</h1>
        <h3>EMAIL</h3>
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
