import React from "react";
import { Container } from './styles';

import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';

const Dashboard: React.FC = () => {
  return (
   <>
    <Header />
    <Summary/>
   </>
  );
}

export { Dashboard };