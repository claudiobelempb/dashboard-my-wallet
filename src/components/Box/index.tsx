import React from "react";
import { BoxContainer } from "./style";

interface IBoxProps {
  children?: React.ReactNode;
  fdirection?: string;
  garea?:string;
  jcontent?: string;
  aitems?: string;
  bgcolor?:string;
  bbottom?: string;
  width?: string;
}

const Box: React.FC<IBoxProps> = ({children, fdirection, jcontent, aitems }: IBoxProps) => {
  return (
    <BoxContainer fdirection={fdirection} jcontent={jcontent} aitems={aitems}>
      {children}
    </BoxContainer>
  )
}

export { Box };