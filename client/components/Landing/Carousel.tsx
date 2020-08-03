import React from 'react';
import { red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { Slide } from 'material-auto-rotating-carousel';

const styles = {
  root: {
    backgroundColor: red[600],
    height: 400,
    width: 800
  },
  media: {
    backgroundColor: red[400]
  }
};

const StyledSlide = withStyles(styles)(Slide);

const Carousel = () => {
  return (
    <StyledSlide
      media={
        <img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />
      }
      title="This is a very cool feature"
      subtitle="Just using this will blow your mind."
      mobile
      landscape
    />
  );
};

export default Carousel;
