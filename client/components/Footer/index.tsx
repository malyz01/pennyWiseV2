import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { sIndex } from './style';

import FooterItems from './FooterItems';
import SocialLogos from './SocialLogos';

const Footer = (props: IProps) => {
  const c = sIndex();

  return (
    <div className={c.mainContainer}>
      <Container>
        <FooterItems />
        <hr className={c.footerLine} />
        <SocialLogos />
      </Container>
    </div>
  )
};

interface IProps extends RouteComponentProps { }

export default Footer;
