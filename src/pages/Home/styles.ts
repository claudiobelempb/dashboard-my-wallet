import styled from 'styled-components';

interface IHomeProps{
  garea?: string;
  maxcolumn?: number;
  mincolumn?: number;
}
export const ContainerHome = styled.div<IHomeProps>`
  grid-area: ${props => props.garea ? props.garea : ""};
  grid-column: ${props => props.mincolumn} / ${props => props.maxcolumn};
`;