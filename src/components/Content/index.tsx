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
  bgcolor?: string;
  isbr?: boolean;
  isbb?: boolean;
}

const Content: React.FC<IContentProps> = ({ garea, children, jcontent, aitems, fdirection, bgcolor, isbr, isbb }) => {
  return (
    <ContentContainer garea={garea} jcontent={jcontent} aitems={aitems} fdirection={fdirection} bgcolor={bgcolor} isbr={isbr} isbb={isbb}>
      {children}
    </ContentContainer>
  );
}

export { Content };