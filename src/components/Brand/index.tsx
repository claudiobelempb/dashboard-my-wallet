import React from 'react';
import { BrandContainer, BrandTitle, BrandImg } from './style';

import logoBrand from '../../assets/images/logo.svg';

interface IBrand {
  title?: string;
}

export function Brand({ title }: IBrand) {
  return (
    <BrandContainer href={'/'}>
      <BrandImg src={logoBrand} alt={'My Logo'} />
      <BrandTitle>{title}</BrandTitle>
    </BrandContainer>
  );
}
