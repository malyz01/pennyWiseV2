import React from 'react';

import { sProfileCard } from './styles';
import CardTop from './CardTop';
import CardBottom from './CardBottom';

const ProfileCard = () => {
  const c = sProfileCard();

  return (
    <div className={c.mainContainer}>
      <CardTop />
      <CardBottom />
    </div>
  )
};

export default ProfileCard;
