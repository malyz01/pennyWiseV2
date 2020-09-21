import React from 'react';
import Slider from 'react-slick';
import Image from 'material-ui-image';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      marginBottom: '2em',
      '&:div': {
        color: 'red'
      }
    }
  })
);

const Carousel = (props: IProps) => {
  const c = useStyles();

  const settings: ICarouselSettings = {
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    dots: true,
    infinite: true,
    speed: 2500,
    arrows: false,
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

interface ICarouselSettings {
  appendDots?: Function;
  arrows?: boolean;
  autoplaySpeed?: number;
  autoplay?: boolean;
  dots?: boolean;
  easing?: string;
  fade?: boolean;
  infinite?: boolean;
  pauseOnDotsHover?: boolean;
  pauseOnFocus?: boolean;
  pauseOnHover?: boolean;
  speed?: number;
  slidesToScroll?: number;
  slidesToShow?: number;
}