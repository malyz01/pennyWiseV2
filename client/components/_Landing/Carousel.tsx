import React from 'react';
import Slider from 'react-slick';
import Image from 'material-ui-image';
import { sCarousel } from './style';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { ICarouselSettings } from './interface';

const Carousel = (props: IProps) => {
  const c = sCarousel();

  const settings: ICarouselSettings = {
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...props.setting
  };

  const ratio: [number, number] = props.ratio || [3, 1];

  return (
    <div className={c.mainContainer}>
      <Slider {...settings}>
        {props.images.map((img) => (
          <Image
            key={img}
            aspectRatio={ratio[0] / ratio[1]}
            src={`/assets/images/${img}`}
          />
        ))}
      </Slider>
    </div>
  );
};

interface IProps {
  images: string[];
  setting?: ICarouselSettings;
  ratio?: [number, number];
}

export default Carousel;
