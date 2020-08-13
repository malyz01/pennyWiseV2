import React from 'react';
import Button from '@material-ui/core/Button';
import { sLogin } from './styles';

const Login = () => {
  const c = sLogin();
  const handleClose = () => {
    alert('action creator');
  };

  return (
    <div className={c.mainContainer}>
      Testing pit
      <div>
        <Button onClick={handleClose} color="primary">
          Submit
        </Button>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Login;
