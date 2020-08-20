import React from 'react';
import Button from '@material-ui/core/Button';

import { sCardBottom } from './styles';

const CardBottom = () => {
  const c = sCardBottom();

  return (
    <div className={c.mainContainer}>

      <div className={c.cardButtons}>
        <Button variant='contained' color='primary' className={c.button}>
          Manage Your Income
      </Button>
        <Button variant='contained' color='primary' className={c.button}>
          Manage Your Expenses
      </Button>
        <Button variant='contained' color='primary' className={c.button}>
          Manage Your Budget
      </Button>
      </div>

      <article className={c.overview}>
        <div className={c.overviewHeading}>An Overview of your Finances</div>
        <div className={c.overviewTable}>
          <div className={c.totalKeys}>
            <p>Total Income</p>
            <p>Total Expenses</p>
            <p>Total Budget</p>
            <p>Total Goals</p>
          </div>
          <div className={c.totalValues}>
            <p>$100.00 per week</p>
            <p>$100.00 per week</p>
            <p>$100.00 per week</p>
            <p>4</p>
          </div>
        </div>
      </article>

    </div>
  )
};

export default CardBottom;
