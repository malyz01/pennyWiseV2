import React from 'react';
import { ConnectedProps, connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { sIndex } from './styles';

import View from './View';
import * as modalAction from '../../../store/actions/modal';

const Menu = (props: IProps) => {
  const c = sIndex();

  const handleClick = (name: string) => () => {
    props.setModal(name, true);
  };

  return (
    <div>
      <Hidden mdUp>
        <IconButton aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Hidden>
      <Hidden smDown>
        <View />
        <Button
          className={c.btn}
          onClick={handleClick('Login')}
          variant="contained"
          color="primary"
        >
          Login
        </Button>
        <Button
          className={c.btn}
          onClick={handleClick('Register')}
          variant="contained"
          color="primary"
        >
          Register
        </Button>
      </Hidden>
    </div>
  );
};

const mapDispatch = { ...modalAction };
const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
interface IProps extends PropsFromRedux {}

export default connector(Menu);
