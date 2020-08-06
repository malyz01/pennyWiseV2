import React from 'react';

import { sFooterItems } from './style';

const FooterItems = () => {
  const f = sFooterItems();

  return (
    <div className={f.mainContainer}>
      <div>
        ABOUT
        <div>
          <p>About Us</p>
          <p>Help</p>
        </div>
      </div>
      <div>
        CONTACT US
        <div>
          <p>Matt Uy</p>
          <p>Jimmi Meredith</p>
          <p>Chris Alba</p>
          <p>Raymond Leung</p>
          <p>Lucas Santana</p>
          <p>David Dumolo</p>
        </div>
      </div>
      <div>
        COURSE
        <div>
          <p>Enspiral Dev Academy</p>
        </div>
    </div>
      <div>
        AWARDS
        <div>
          <p>Best Budgeting App 2020</p>
          <p>Most Innovative Team 2020</p>
          <p>"Maximum Big Don Energy!" - Don Smith</p>
        </div>
    </div>
    </div>
  )
};

export default FooterItems;
