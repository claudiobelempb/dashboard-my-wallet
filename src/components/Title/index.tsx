import React from 'react';
import { TitleContainer } from './style';

interface ITitle {
  title: string;
  color?: string;
  isColor?: boolean;
  bgcolor?: string;
  isBgcolor?: boolean;
}

export const Title: React.FC<ITitle> = ({title, isColor, isBgcolor, color, bgcolor}: ITitle) => {
  return (
    <TitleContainer isColor={isColor} isBgColor={isBgcolor} color={color} bgcolor={bgcolor}>
      {title}
    </TitleContainer>
  );
}
