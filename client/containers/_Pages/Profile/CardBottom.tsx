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
      <div>
        <h3>An Overview of your Finances</h3>
      </div>
    </div>
  )
};

export default CardBottom;
