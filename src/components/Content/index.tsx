import React from 'react';
import { 
  ContentContainer
} from './style';

interface IContentProps {
  garea?: string;
  children?: React.ReactNode;
}

const Content: React.FC<IContentProps> = ({ garea, children }: IContentProps) => {
  return (
    <ContentContainer garea={garea}>
      {children}
    </ContentContainer>
  );
}

export { Content };