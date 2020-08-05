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
      <Container className={c.mainContainer}>
        <div className={c.contentContainer1}>
          <Typo variant="h3">PennyWise</Typo>
          <p>Stuck on the Money-Go-Round?</p>
          <p>Bring your money and budgeting back in balance</p>
        </div>
        <div className={c.contentContainer2}>
          <Typo variant="h3">Service we provide</Typo>
          <div
            style={{
              height: '300px',
              width: '100%',
              border: '1px solid black'
            }}
          >
            Replace with a carousel
          </div>
        </div>
      </Container>
    </div>
  );
};

interface IProps extends RouteComponentProps {}

export default Landing;
