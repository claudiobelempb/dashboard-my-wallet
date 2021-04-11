import React from 'react';

import { Brand } from '../Brand';
import { NavBar } from '../NavBar';

import { Container } from './style';

export const Aside: React.FC = () => {
  return (
    <Container>
        <Brand/>
        <NavBar/>
    </Container>
  );
}
