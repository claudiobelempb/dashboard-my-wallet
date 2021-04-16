import styled from "styled-components";

interface IBoxProps {
  fdirection?: string;
  garea?:string;
  jcontent?: string;
  aitems?: string;
  bgcolor?:string;
  bbottom?: string;
  width?: string;
}

export const BoxContainer = styled.div<IBoxProps>`
  grid-area: ${props => props.garea ? props.garea : ""};
  display: flex;
  flex-direction: ${props => props.fdirection ? props.fdirection : "column"};
  justify-content: ${props => props.jcontent ? props.jcontent : "center"};
  align-items: ${props => props.aitems ? props.aitems : "center"};
  width: ${props => props.width ? props.width : "100"}%;
  
  color: ${props => props.theme.colors.white};
  
`;