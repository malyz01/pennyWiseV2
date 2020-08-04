import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { sIndex } from './style';

import Carousel from './Carousel';
import * as users from '../../store/actions/users';

const Landing = (props: IProps) => {
  const c = sIndex();
  useEffect(() => {
    props.fetchUsers();
  }, []);

  return (
    <div>
      <Carousel />
      <Container>
        <div className={c.content1Container}>
          <div>PennyWise</div>
          <div>Stuck on the Money-Go-Round?</div>
          <div>Bring your money and budgeting back in balance</div>
        </div>
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
