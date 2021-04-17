import styled from  'styled-components';

interface IContentProps {
  fdirection?: string;
  jcontent?: string;
  aitems?: string;
  garea?:string;
  width?: string;
  mwidth?: string;
  bgcolor?: string;
  isbr?: boolean;
  isbb?: boolean;
}

export const ContentContainer = styled.div<IContentProps>`
  grid-area: ${props => props.garea ? props.garea : ""};
  justify-content: ${props => props.jcontent ? props.jcontent : ""};
  align-items: ${props => props.aitems ? props.aitems : ""};
  flex-direction: ${props => props.fdirection ? props.fdirection : ""};
  background-color: ${props => props.bgcolor ? props.bgcolor : "tranparent"};
  border-right: ${props => props.isbr ? "1px solid #FFFFFF" : "1px solid none"};
  border-bottom: ${props => props.isbb ? "1px solid #FFFFFF" : "1px solid none"};
  width: 100%;
`;


