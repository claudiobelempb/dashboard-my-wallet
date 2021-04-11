import React from 'react';
import { MainContainer } from "./style";

interface IContainerProps {
  garea?: string;
  children?: React.ReactNode;
}

const Container: React.FC<IContainerProps> = ({ garea, children }: IContainerProps) => {
  return (
    <MainContainer garea={garea}>
        {children}
    </MainContainer>
  );
}

export { Container };