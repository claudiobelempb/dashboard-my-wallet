import React from 'react';
import { 
  ContainerSection
} from './style';

interface ISection {
  children?: React.ReactNode;
  fdirection?: string;
  garea?:string;
  jcontent?: string;
  aitems?: string;
  bgcolor?:string;
  bbottom?: string;
}
export const Section: React.FC<ISection> = ({children, jcontent }: ISection) => {
  return (
    <ContainerSection jcontent={jcontent}>
        {children}
    </ContainerSection>
  );
}