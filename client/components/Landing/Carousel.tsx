import React from 'react';
import Slider from 'react-slick';
import Image from 'material-ui-image';

const Carousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider {...settings}>
        <Image aspectRatio={14 / 7} src={`/assets/images/landing/S1.jpg`} />

        <Image aspectRatio={14 / 7} src={`/assets/images/landing/slide2.jpg`} />

        <Image aspectRatio={14 / 7} src={`/assets/images/landing/slide3.jpg`} />
      </Slider>
    </div>
  );
};

export default Carousel;
