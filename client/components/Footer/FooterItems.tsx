import React from 'react';

import { sFooterItems } from './style';
import Logo from './Logo';

const FooterItems = () => {
  const c = sFooterItems();

  return (
    <div className={c.mainContainer}>
      <Logo />
      <div>
        <p>ABOUT</p>
        <div>About Us</div>
        <div>Help</div>
      </div>
      <div>
        <p>CONTACT US</p>
        <div>Matt Uy</div>
        <div>Jimmi Meredith</div>
        <div>Chris Alba</div>
        <div>Raymond Leung</div>
        <div>Lucas Santana</div>
        <div>David Dumolo</div>
      </div>
      <div>
        <p>COURSE</p>
        <div>Enspiral Dev Academy</div>
      </div>
      <div>
        <p>AWARDS</p>
        <div>Best Budgeting App 2020</div>
        <div>Most Innovative Team 2020</div>
        <div>"Maximum Big Don Energy!" - Don Smith</div>
      </div>
    </div >
  )
};

export default FooterItems;
