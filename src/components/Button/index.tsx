import React from 'react';
import { ButtonContainer, ButtonTitle } from  './style';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  bgColor?: string;
  tgColor?: string;
  width?: string;
  fontSize?: string;
}

export function Button({title, bgColor, tgColor, width, fontSize, type, onClick}:IButtonProps) {
  return (
      <ButtonContainer bgColor={bgColor} tagColor={tgColor} width={width} fontSize={fontSize} onClick={onClick}>
      <ButtonTitle>{title ? title : 'Button'}</ButtonTitle>
    </ButtonContainer>
  );
}
