import React from 'react';

import { sFooterItems } from './styles';
import Logo from './Logo';

const FooterItems = () => {
  const c = sFooterItems();

  return (
    <div className={c.mainContainer}>
      <Logo />
      <div className={c.footerItemContainer}>
        <p>
          <strong>ABOUT</strong>
        </p>
        <div>About Us</div>
        <div>Help</div>
      </div>
      <div className={c.footerItemContainer}>
        <p>
          <strong>CONTACT US</strong>
        </p>
        <div>Matt Uy</div>
        <div>Jimmi Meredith</div>
      </div>
      <div className={c.footerItemContainer}>
        <p>
          <strong>COURSE</strong>
        </p>
        <div>Enspiral Dev Academy</div>
      </div>
      <div className={c.footerItemContainer}>
        <p>
          <strong>AWARDS</strong>
        </p>
        <div>Best Budgeting App 2020</div>
        <div>Most Innovative Team 2020</div>
        <div>"Maximum Big Don Energy!" - Don Smith</div>
      </div>
    </div>
  );
};

export default FooterItems;
