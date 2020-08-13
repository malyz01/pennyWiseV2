import React, { useState, ChangeEvent, FormEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typo from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { sLogin } from './styles';

const Login = () => {
  const c = sLogin();
  const [val, setVal] = useState({ email: '', password: '' });

  const handleClose = () => {};

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
          Login
        </Typo>
      </div>
      <hr />
      <form autoComplete="off" onSubmit={handleOnSubmit}>
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

export default Login;
