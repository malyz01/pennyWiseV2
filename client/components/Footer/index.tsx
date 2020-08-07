import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { sIndex } from './style';

import FooterItems from './FooterItems';

const Footer = (props: IProps) => {
  const c = sIndex();

  return (
    <div className={c.mainContainer}>
      <Container>
        <FooterItems />
        <hr className={c.footerLine} />
      </Container>
    </div>
  )
};

interface IProps extends RouteComponentProps { }

export default Footer;
