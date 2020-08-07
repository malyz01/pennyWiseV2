import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typo from '@material-ui/core/Typography';
import Image from 'material-ui-image';
import { sLogo } from './styles';

const Logo = (props: IProps) => {
  const c = sLogo();

  const onLogoClick = () => {
    if (props.location.pathname === '/') return;
    props.history.push('/');
  };

  return (
    <ButtonBase onClick={onLogoClick} className={c.mainContainer}>
      <div className={c.logoContainer}>
        <Image
          aspectRatio={1 / 1}
          color="none"
          src="/assets/images/pennywise_logo.png"
        />
      </div>
      <Typo className={c.typo} color="primary">
        Penny
      </Typo>
      <Typo className={c.typo} color="secondary">
        Wise
      </Typo>
    </ButtonBase>
  );
};

interface IProps extends RouteComponentProps {}

export default withRouter(Logo);
