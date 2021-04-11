import styled from 'styled-components';

interface IAsideProps {
  flexDirection?: string;
  garea?:string;
}

export const AsideContainer = styled.aside<IAsideProps>`
  grid-area: ${props => props.garea ? props.garea : "AS"};
  justify-content: start;
  align-items: center;
  flex-direction: column;
  padding: 0.25rem;
  background-color: ${props => props.theme.colors.dark_light};
  color: ${props => props.theme.colors.white};
  border-right: 1px solid ${props => props.theme.colors.white};
`;