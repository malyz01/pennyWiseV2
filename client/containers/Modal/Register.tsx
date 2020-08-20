import React, { useState, ChangeEvent, FormEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typo from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { sLogin } from './styles';

import * as modalActions from '../../store/actions/modal';

const Register = (props: IProps) => {
  const c = sLogin();
  const [val, setVal] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleClose = () => {
    props.setModal('', false);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(val, null, 2));
    handleClose();
  };

  return (
    <div className={c.mainContainer}>
      <div className={c.headerContainer}>
        <AccountCircleIcon color="primary" className={c.icon} />
        <Typo color="primary" variant="h3">
          Register
        </Typo>
      </div>
      <hr />
      <form autoComplete="off" onSubmit={handleOnSubmit}>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          label="Full name"
          name="fullname"
          type="text"
          value={val.fullname}
          onChange={handleOnChange}
        />
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          label="Email"
          name="email"
          type="text"
          value={val.email}
          onChange={handleOnChange}
        />
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          label="Password"
          name="password"
          type="password"
          value={val.password}
          onChange={handleOnChange}
        />
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={val.confirmPassword}
          onChange={handleOnChange}
        />
        <div className={c.btnContainer}>
          <Button type="submit" onClick={handleClose} color="primary">
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

const mapDispatch = { ...modalActions };
const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
interface IProps extends PropsFromRedux {}

export default connector(Register);
