import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { sModal } from './styles';

import Fade from '../../components/Fade';

const AuthModal = () => {
  const classes = sModal();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Click
      </button>
      <Modal
        disableAutoFocus={true}
        aria-labelledby="Auth Form"
        aria-describedby="Auth login or register form"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="spring-modal-title">Spring modal</h2>
            <p id="spring-modal-description">react-spring animates me.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AuthModal;
