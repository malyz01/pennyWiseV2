import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import useStyles from './styles/budget';

const index = () => {
  const c = useStyles();
  return (
    <div className={c.mainContainer}>
      <Container>
        <section>
          <h1>Overview of Budget</h1>
          <hr />
          <p>Manage your goals and your budget here</p>
        </section>
        <section>Goals Table</section>
        <section>
          <h1>Specify Budget Allocation for your goals</h1>
          <Button color="primary" variant="contained">
            Add Goal
          </Button>
        </section>
      </Container>
    </div>
  );
};

export default index;
