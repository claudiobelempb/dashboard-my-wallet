import React from 'react';
import { 
  ContentContainer
} from './style';

interface IContentProps {
  garea?: string;
  children?: React.ReactNode;
  fdirection?: string;
  jcontent?: string;
  aitems?: string;
}

const Content: React.FC<IContentProps> = ({ garea, children, jcontent, aitems, fdirection }: IContentProps) => {
  return (
    <ContentContainer garea={garea} jcontent={jcontent} aitems={aitems} fdirection={fdirection}>
      {children}
    </ContentContainer>
  );
}

export { Content };