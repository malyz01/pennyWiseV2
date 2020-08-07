import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Typo from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import withWidth, { WithWidth } from '@material-ui/core/withWidth';
import { sIndex } from './style';

import Carousel from './Carousel';

const headerImages = Array.from('123').map((n) => `landing/slide${n}.jpg`);
const contentImages = Array.from('12345').map((n) => `slideContent${n}.jpg`);

const Landing = (props: IProps) => {
  const c = sIndex();
  const [headerCarousel, setHeaderCarousel] = useState<[number, number]>([
    3,
    1
  ]);
  const [contentCarousel, setContentCarousel] = useState<[number, number]>([
    2,
    1
  ]);

  useEffect(() => {
    if (props.width === 'xs') setHeaderCarousel([2, 1]);
  }, [headerCarousel]);

  console.log(props.width);
  return (
    <div>
      <Carousel images={headerImages} ratio={headerCarousel} />
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
              setting={{ fade: false, speed: 1000 }}
              ratio={contentCarousel}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

interface IProps extends RouteComponentProps, WithWidth {}

export default withWidth()(Landing);
