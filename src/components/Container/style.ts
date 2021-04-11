import styled from 'styled-components';

interface IHeaderProps {
  garea?: string;
}

export const MainContainer = styled.div<IHeaderProps>`
  display: grid;
  background: ${props => props.theme.colors.gray};
`;


