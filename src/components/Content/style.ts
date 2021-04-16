import styled from  'styled-components';

interface IContentProps {
  fdirection?: string;
  jcontent?: string;
  aitems?: string;
  garea?:string;
  width?: string;
  mwidth?: string;
}

export const ContentContainer = styled.div<IContentProps>`
  grid-area: ${props => props.garea ? props.garea : ""};
  display: flex;
  justify-content: ${props => props.jcontent ? props.jcontent : "center"};
  align-items: ${props => props.aitems ? props.aitems : "center"};
  flex-direction: ${props => props.fdirection ? props.fdirection : "row"};
  width: 100%;
  padding: 1rem;
`;


