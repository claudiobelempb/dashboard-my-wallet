import React from "react";
import { } from './styles';

import { Container } from "../../components/Container"
import { Content }from "../../components/Content";
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <span>container</span>
      <Content>
        <span>Content</span>
      </Content>
    </Container>
  );
}

export { Dashboard };