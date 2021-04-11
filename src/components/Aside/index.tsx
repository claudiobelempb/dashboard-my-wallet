import React from 'react';

import { AsideContainer } from "./style";

import { Brand } from '../Brand';
import { NavBarVertical } from '../NavBarVertical';

export const Aside: React.FC = () => {
  return (
    <AsideContainer>
      <Brand title={"My Wallet"}/>
      <NavBarVertical/>
    </AsideContainer>
  );
}
