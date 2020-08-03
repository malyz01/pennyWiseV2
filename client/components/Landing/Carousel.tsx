import React, { useState } from 'react';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import { Slide } from 'material-auto-rotating-carousel';
import { Button } from '@material-ui/core';

const styles = {
  root: {
    backgroundColor: green[600],
    height: 400,
    width: '100%'
  },
  media: {
    backgroundColor: green[400]
  }
};

const StyledSlide = withStyles(styles)(Slide);

const Carousel = () => {
  const [state, setState] = useState({ open: false });

  return (
    <>
      <Button onClick={() => setState({ open: true })}>Open carousel</Button>
      <AutoRotatingCarousel
        label="Get started"
        open={state.open}
        onClose={() => setState({ open: false })}
        onStart={() => setState({ open: false })}
        style={{ position: 'absolute' }}
      >
        <StyledSlide
          media={<img src="/assets/images/landing/slide1.png" />}
          title="This is a very cool feature"
          subtitle="Just using this will blow your mind."
          mobile
          landscape
        />
      </AutoRotatingCarousel>
    </>
  );
};

export default Carousel;
