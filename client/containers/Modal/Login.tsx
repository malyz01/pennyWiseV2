import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Login = () => {
  const handleClose = () => {
    alert('action creator');
  };

  return (
    <>
      <DialogTitle>Auth Form</DialogTitle>
      <DialogContent>
        <DialogContentText>LOGIN FORM</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Submit
        </Button>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </>
  );
};

export default Login;
