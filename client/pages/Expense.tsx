import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import useStyles from './styles/expense';

const Expense = () => {
  const c = useStyles();
  return (
    <div className={c.mainContainer}>
      <Container>
        <section>
          <h1>Overview of Expense</h1>
          <hr />
          <p>Manage all forms of expenses here</p>
        </section>
        <section>
          <Button color="primary" variant="contained">
            Add Expense
          </Button>
        </section>
        <section>Insert table here</section>
      </Container>
    </div>
  );
};

export default Expense;
