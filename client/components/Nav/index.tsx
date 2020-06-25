import React from 'react';

import { IProps } from './interface';

const index = ({ sample }: IProps) => {
  return (
    <div>
      {sample.map((x, i) => (
        <div key={i}>
          {x.id}: {x.name}
        </div>
      ))}
    </div>
  );
};

export default index;
