import styled from 'styled-components';

export const NavBarContainer = styled.a`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export const NavBarImg = styled.img`
  height: 50px;
  width: 50px;
`;

export const NavBarTitle = styled.h3`
  font-size: 24px;
  color: ${props => props.theme.colors.white};
  margin-left: 10px;
`;