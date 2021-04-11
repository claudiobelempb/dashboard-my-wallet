import styled from  'styled-components';

interface IHeaderProps {
  flexDirection?: string;
  garea?:string;
}

export const HeaderContainer = styled.header<IHeaderProps>`
  grid-area: ${props => props.garea ? props.garea : "MH"};
  display: flex;
  justify-content: center;
  align-items:center;
  width: 100%;
  background: ${props => props.theme.colors.dark_light};
  color: ${props => props.theme.colors.white};
  padding: 0.25rem;
`;
/*
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  button {
    font-size: 1rem;
    border: none;
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.secondary};
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
*/

