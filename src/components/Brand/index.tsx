import React from 'react';
import { BrandContainer } from './style';

import logoBrand from '../../assets/images/logo.svg';

interface IBrand {
  title?: string;
}

const Brand: React.FC<IBrand> = ({ title }: IBrand) => {
  return (
    <BrandContainer href={"/"}>
      <img src={logoBrand} alt={"My Logo"} />
      <h1>{title}</h1>
    </BrandContainer>
  );
}

export { Brand };
