import styled from  'styled-components';

interface IContainerSection {
  fdirection?: string;
  garea?:string;
  jcontent?: string;
  aitems?: string;
  bgcolor?:string;
  bbottom?: string;
}

export const ContainerSection = styled.section<IContainerSection>`
  grid-area: ${props => props.garea ? props.garea : ""};
  display: flex;
  background-color: ${props => props.bgcolor ? props.bgcolor : props.theme.colors.blue};
  justify-content: ${props => props.jcontent ? props.jcontent : "center"};
  width: 100%;
  min-width: 100%;
  padding: 0 1rem;
  margin: 2rem 0;
`;


