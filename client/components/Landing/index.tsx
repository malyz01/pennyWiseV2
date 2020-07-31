import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../store/actions/users';

const Landing = (props) => {
  useEffect(() => {
    props.fetchUsers();
  }, []);

  return <h1 style={{ textAlign: 'center' }}>Landing Page</h1>;
};

export default connect(null, { fetchUsers })(Landing);
