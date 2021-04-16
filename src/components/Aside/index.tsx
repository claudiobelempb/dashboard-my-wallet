import React from 'react';

import { AsideContainer } from "./style";

interface IAsideProps {
  children?: React.ReactNode;
}

export const Aside: React.FC<IAsideProps> = ({children}: IAsideProps) => {
  return (
    <AsideContainer>
      { children }
    </AsideContainer>
  );
}
