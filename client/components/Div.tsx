import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const sDiv = makeStyles((theme: Theme) =>
  createStyles({
    divContainer: {
      display: 'flex',
      margin: '1em 0',
      border: '1px solid black',
      width: 'auto'
    }
  })
);

const Div = (props: IProp) => {
  const c = sDiv();
  return (
    <div {...props} className={c.divContainer}>
      {props.children}
    </div>
  );
};

interface IProp {
  children: React.ReactNode;
}

export default Div;
