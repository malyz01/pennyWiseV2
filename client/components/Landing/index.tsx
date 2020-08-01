import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../store/actions/users';

const Landing = (props) => {
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

// TODO add types
const mapState = (state) => ({
  users: state.users.all.data
});

export default connect(mapState, { fetchUsers })(Landing);
