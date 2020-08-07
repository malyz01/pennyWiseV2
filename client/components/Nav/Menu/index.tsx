import React from 'react';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import withWidth, { WithWidth } from '@material-ui/core/withWidth';
import { sIndex } from './styles';

import View from './View';

const Menu = (props: IProps) => {
  const c = sIndex();
  return (
    <div className={c.mainContainer}>
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

interface IProps extends WithWidth {}

export default withWidth()(Menu);
