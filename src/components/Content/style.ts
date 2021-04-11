import styled from  'styled-components';

interface IContentProps {
  flexDirection?: string;
}

export const Container = styled.div<IContentProps>`
  width: 1020px;
  margin: auto;
  background-color: ${props => props.theme.colors.primary};
`;


