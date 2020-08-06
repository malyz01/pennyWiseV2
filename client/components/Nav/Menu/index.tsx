import React from 'react';
import Button from '@material-ui/core/Button';
import { sIndex } from './styles';

import View from './View';

const Menu = () => {
  const c = sIndex();
  return (
    <div className={c.mainContainer}>
      <View />
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
