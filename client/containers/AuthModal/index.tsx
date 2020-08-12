import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Collapse from '@material-ui/core/Collapse';

const AuthModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Slide in Modal
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Collapse}
        keepMounted
        onClose={handleClose}
        aria-labelledby="Auth Form"
        aria-describedby=""
      >
        <DialogTitle>Auth Form</DialogTitle>
        <DialogContent>
          <DialogContentText>FORM</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AuthModal;
