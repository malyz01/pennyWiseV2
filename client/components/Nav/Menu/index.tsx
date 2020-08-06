import React from 'react';
import Button from '@material-ui/core/Button';
import { sIndex } from './styles';

const Menu = () => {
  const c = sIndex();
  return (
    <div className={c.mainContainer}>
      <div
        style={{
          display: 'inline-flex',
          alignSelf: 'flex-end',
          height: '100%'
        }}
      >
        asd
      </div>
      <Button className={c.btn} variant="contained" color="primary">
        Login
      </Button>
      <Button className={c.btn} variant="contained" color="primary">
        Register
      </Button>
    </div>
  );
};

export default Menu;
