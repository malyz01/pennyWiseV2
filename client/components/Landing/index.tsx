import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import * as users from '../../store/actions/users';

const Landing = (props: IProps) => {
  useEffect(() => {
    props.fetchUsers();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Landing Page</h1>
      {!!props.users.length &&
        props.users.map((u, i) => <div key={i}>{u.email}</div>)}
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
