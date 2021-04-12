import styled from 'styled-components';

export const NavBarVerticalContainer = styled.nav`
  min-width: 100%;
  margin-top: 3rem;
  padding: 0 1rem;
  
  & > ul {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    list-style: none;

    & > li {
    padding: 0.30rem 1rem;
  }
  }

  & img {
    height: 50px;
    width: 50px;
  }
`;
