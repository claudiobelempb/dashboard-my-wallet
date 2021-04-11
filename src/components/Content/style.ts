import styled from  'styled-components';

interface IContentProps {
  flexDirection?: string;
  garea?:string;
}

export const ContentContainer = styled.div<IContentProps>`
  grid-area: ${props => props.garea ? props.garea : "CT"};
  justify-content: center;
  align-items: center;
`;


