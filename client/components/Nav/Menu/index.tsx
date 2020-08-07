import React from 'react';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { sIndex } from './styles';

import View from './View';

const Menu = () => {
  const c = sIndex();
  return (
    <div className={c.mainContainer}>
      <Hidden mdUp>
        <IconButton aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Hidden>
      <Hidden smDown>
        <View />
        <Button className={c.btn} variant="contained" color="primary">
          Login
        </Button>
        <Button className={c.btn} variant="contained" color="primary">
          Register
        </Button>
      </Hidden>
    </div>
  );
};

export default Menu;
