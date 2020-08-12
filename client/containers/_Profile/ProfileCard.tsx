import React from 'react';

import { sProfileCard } from './styles';

const ProfileCard = () => {
  const c = sProfileCard();

  return (
    <div className={c.mainContainer}>
      PROFILE CARD
    </div>
  )
};

export default ProfileCard;
