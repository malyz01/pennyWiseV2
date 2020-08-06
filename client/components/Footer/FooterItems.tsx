import React from 'react';

import { sIndex } from './style';

const FooterItems = () => {
  const f = sIndex();

  return (
    <div className={f.conetentContainer1}>
      <div>
        ABOUT
    </div>
      <div>
        CONTACT US
      </div>
      <div>
        COURSE
    </div>
      <div>
        AWARDS
    </div>
    </div>
  )
};

export default FooterItems;
