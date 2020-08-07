import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

import { sSocialLogos } from './style'

const SocialLogos = () => {
  const c = sSocialLogos();

  return (
    <div className={c.mainContainer}>
      <FacebookIcon />
      <InstagramIcon />
      <TwitterIcon />
      <YouTubeIcon />
    </div>
  )
};

export default SocialLogos;
