import React from 'react';
import Slider from 'react-slick';
import Image from 'material-ui-image';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider {...settings}>
        <h2>
          <div>
            <Image aspectRatio={14 / 7} src={`/assets/images/landing/S1.jpg`} />
          </div>
        </h2>
        <h2>
          <div>
            <Image
              aspectRatio={14 / 7}
              src={`/assets/images/landing/slide2.jpg`}
            />
          </div>
        </h2>
        <h2>
          <div>
            <Image
              aspectRatio={14 / 7}
              src={`/assets/images/landing/slide3.jpg`}
            />
          </div>
        </h2>
      </Slider>
    </div>
  );
};

export default Carousel;
