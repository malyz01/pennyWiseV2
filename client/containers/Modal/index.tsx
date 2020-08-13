import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';

import Login from './Login';
import Register from './Register';
import { IRootState } from '../../store/reducers';
import * as modalActions from '../../store/actions/modal';

const Modal = (props: IProps) => {
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
      {name === 'Register' && <Register />}
    </Dialog>
  );
};

const mapState = (state: IRootState) => ({
  name: state.modal.name,
  open: state.modal.open
});
const mapDispatch = { ...modalActions };
const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
interface IProps extends PropsFromRedux {}

export default connector(Modal);
