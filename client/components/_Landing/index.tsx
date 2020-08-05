import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Typo from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { sIndex } from './style';

import Carousel from './Carousel';
import Animate from '../Animate';

const headerImages = Array.from('123').map((n) => `landing/slide${n}.jpg`);
const contentImages = Array.from('12345').map((n) => `slideContent${n}.jpg`);

const Landing = (props: IProps) => {
  const c = sIndex();
  return (
    <div>
      <Carousel images={headerImages} />
      <Container className={c.mainContainer}>
        <div className={c.contentContainer1}>
          <Typo variant="h3">PennyWise</Typo>
          <p>Stuck on the Money-Go-Round?</p>
          <p>Bring your money and budgeting back in balance</p>
        </div>
        <div className={c.contentContainer2}>
          <Typo variant="h3">Service we provide</Typo>
          <div className={c.imageContainer}>
            <Carousel
              images={contentImages}
              setting={{ fade: false, arrows: true }}
              ratio={[2, 1]}
            />
          </div>
        </div>
        <Animate />
      </Container>
    </div>
  );
};

interface IProps extends RouteComponentProps {}

export default Landing;
