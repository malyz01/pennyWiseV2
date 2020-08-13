import React from 'react';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';

import Login from './Login';
import * as modalActions from '../../store/actions/modal';

const AuthModal = (props) => {
  const { name, open, setModal } = props;
  const handleClose = () => {
    setModal('', false);
  };

  return (
    <Dialog
      open={open}
      keepMounted
      onClose={handleClose}
      aria-labelledby="Modal"
    >
      {name === 'Login' && <Login />}
    </Dialog>
  );
};

const mapState = (state) => ({
  name: state.modal.name,
  open: state.modal.open
});
const mapProps = { ...modalActions };

export default connect(mapState, mapProps)(AuthModal);
