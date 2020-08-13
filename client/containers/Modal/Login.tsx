import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typo from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { sLogin } from './styles';

const Login = () => {
  const c = sLogin();
  const handleClose = () => {
    alert('action creator');
  };

  return (
    <div className={c.mainContainer}>
      <div className={c.headerContainer}>
        <AccountCircleIcon color="primary" className={c.icon} />
        <Typo color="primary" variant="h3">
          Login
        </Typo>
      </div>
      <hr />
      <form autoComplete="off">
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          label="Email"
          type="text"
        />
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          label="Password"
          type="password"
        />
        <div>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
