import styled from  'styled-components';

interface IContentProps {
  fdirection?: string;
  jcontent?: string;
  aitems?: string;
  garea?:string;
  width?: string;
  mwidth?: string;
  height?: string;
  mheight?:string;
  bgcolor?: string;
  bgscroll?: string;
  isbr?: boolean;
  isbb?: boolean;
  isofy?: boolean;
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
  height: ${props => props.height ? props.height : ""};
  overflow-y: ${props => props.isofy ? "scroll" : ""};

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props =>  props.bgscroll ? props.bgscroll : props.theme.colors.dark_light};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${props =>  props.bgscroll ? props.bgscroll : props.theme.colors.light};
  }
`;


