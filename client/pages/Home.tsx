import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Typo from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import withWidth, { WithWidth } from '@material-ui/core/withWidth';
import useStyles from './styles/Home';

import Carousel from '../components/Carousel';

const headerImages = Array.from('123').map((n) => `landing/slide${n}.jpg`);
const contentImages = Array.from('12345').map((n) => `slideContent${n}.jpg`);

const Landing = (props: IProps) => {
  const c = useStyles();

  return (
    <div>
      <Container className={c.mainContainer}>
        <section className={c.contentContainer1}>
          <Typo variant="h3">PennyWise</Typo>
          <p>Stuck on the Money-Go-Round?</p>
          <p>Bring your money and budgeting back in balance</p>
        </section>
        <section className={c.contentContainer2}>
          <Typo variant="h3">Service we provide</Typo>
          <div className={c.imageContainer}>
            <Carousel
              images={contentImages}
              setting={{ fade: false, speed: 1000 }}
              ratio={[2, 1]}
            />
          </div>
        </section>
      </Container>
    </div>
  );
};

interface IProps extends RouteComponentProps, WithWidth {}

export default withWidth()(Landing);
