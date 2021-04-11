import styled from 'styled-components';

export const BrandContainer = styled.a`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export const BrandImg = styled.img`
  height: auto;
  max-width:100%;
`;

export const BrandTitle = styled.h3`
  font-size: 24px;
  color: ${props => props.theme.colors.white};
  margin-left: 10px;
`;