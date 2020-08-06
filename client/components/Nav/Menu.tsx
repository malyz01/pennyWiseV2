import React from 'react';
import Button from '@material-ui/core/Button';
import { sMenu } from './styles';

const Menu = () => {
  const c = sMenu();
  return (
    <div>
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
