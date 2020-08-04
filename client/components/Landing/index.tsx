import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Carousel from './Carousel';
import * as users from '../../store/actions/users';

const Landing = (props: IProps) => {
  useEffect(() => {
    props.fetchUsers();
  }, []);

  return (
    <div>
      <Carousel />
      <Container>
        <div>Stuck on the Money-Go-Round?</div>
        <div>Bring your money and budgeting back in balance</div>
        {!!props.users.length &&
          props.users.map((u, i) => <div key={i}>{u.email}</div>)}
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
