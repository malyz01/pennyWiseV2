import React from 'react';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import Collapse from '@material-ui/core/Collapse';

import Login from './Login';
import * as modalActions from '../../store/actions/modal';

const AuthModal = (props) => {
  const { name, open, setModal } = props;
  const handleClose = () => {
    setModal('', false);
  };

  return (
    <Dialog
      open={props.open}
      TransitionComponent={Collapse}
      keepMounted
      onClose={handleClose}
      aria-labelledby="Modal"
    >
      {name === 'login' && <Login />}
    </Dialog>
  );
};

const mapState = (state) => ({
  name: state.modal.name,
  open: state.modal.open
});
const mapProps = { ...modalActions };

export default connect(mapState, mapProps)(AuthModal);
