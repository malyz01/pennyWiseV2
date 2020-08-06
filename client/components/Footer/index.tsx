import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { sIndex } from './style';

import FooterItems from './FooterItems'

const Footer = (props: IProps) => {
  const f = sIndex();

  return (
    <Container className={f.mainContainer}>
      <FooterItems />
    </Container>
  )
};

interface IProps extends RouteComponentProps { }

export default Footer;
