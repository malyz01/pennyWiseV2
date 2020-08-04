import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Typo from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { sIndex } from './style';

import Carousel from './Carousel';

const Landing = (props: IProps) => {
  const c = sIndex();

  return (
    <div>
      <Carousel />
      <Container>
        <div className={c.content1Container}>
          <Typo variant="h3">PennyWise</Typo>
          <div>Stuck on the Money-Go-Round?</div>
          <div>Bring your money and budgeting back in balance</div>
        </div>
      </Container>
    </div>
  );
};

interface IProps extends RouteComponentProps {}

export default Landing;
