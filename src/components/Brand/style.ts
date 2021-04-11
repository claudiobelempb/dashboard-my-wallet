import styled from 'styled-components';

export const BrandContainer = styled.a`
  
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  & img {
    height: auto;
    max-width:100%;
  }

  & h1 {
    font-size: 24px;
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
  }
`;
