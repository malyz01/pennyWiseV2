import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import useStyles from './styles/income';

const Income = () => {
  const c = useStyles();
  return (
    <div className={c.mainContainer}>
      <Container>
        <section>
          <h1>Overview of Income</h1>
          <hr />
          <p>Manage your income source details here</p>
        </section>
        <section>
          <Button color="primary" variant="contained">
            Add Income
          </Button>
        </section>
        <section>Insert table here</section>
      </Container>
    </div>
  );
};

export default Income;
