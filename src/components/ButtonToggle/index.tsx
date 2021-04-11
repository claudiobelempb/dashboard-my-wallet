import React from 'react';
import { ButtonContainer, ButtonTitle } from  './style';

interface IButtonToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  bgColor?: string;
  tgColor?: string;
  width?: string;
  fontSize?: string;
}

const ButtonTogle: React.FC = ({title, bgColor, tgColor, width, fontSize, type, onClick}:IButtonToggleProps) => {
  return (
      <ButtonContainer bgColor={bgColor} tagColor={tgColor} width={width} fontSize={fontSize} onClick={onClick}>
      <ButtonTitle>{title ? title : 'Button'}</ButtonTitle>
    </ButtonContainer>
  );
}

export { ButtonTogle };
