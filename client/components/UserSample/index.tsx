import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Container } from '@material-ui/core';

import * as I from './interface';
import * as users from '../../store/actions/users';

const Landing = (props: IProps) => {
  useEffect(() => {
    props.fetchUsers();
  }, []);

  return (
    <div>
      <Container>
        {!!props.users.length &&
          props.users.map((u: I.IUser, i: number) => (
            <div key={i}>{u.email}</div>
          ))}
      </Container>
    </div>
  );
};

const mapState = (state) => ({
  users: state.users.all.data
});
const mapDispatch = { ...users };
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface IProps extends PropsFromRedux, RouteComponentProps {}

export default connector(Landing);
