import React from 'react';
import Button from '@material-ui/core/Button';

import { sCardBottom } from './styles';

const CardBottom = () => {
  const c = sCardBottom();

  return (
    <div className={c.mainContainer}>
      <div>
        <Button>
          Manage Your Income
      </Button>
        <Button>
          Manage Your Expenses
      </Button>
        <Button>
          Manage Your Budget
      </Button>
      </div>
      <h3>An Overview of your Finances</h3>
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
    </div>
  )
};

export default CardBottom;
