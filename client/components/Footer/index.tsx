import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { sIndex } from './style';

const Footer = (props: IProps) => {
  const f = sIndex();

  return (
    <Container className={f.mainContainer}>
      <div>
        Footer
    </div>
    </Container>
  )
};

interface IProps extends RouteComponentProps { }

export default Footer;
