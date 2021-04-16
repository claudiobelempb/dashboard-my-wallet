import styled from 'styled-components';

interface IHeaderProps {
  garea?: string;
  bgcolor?: string;
  jcontent?: string;
  aitems?: string;
}

export const MainContainer = styled.div<IHeaderProps>`
  display: flex;
  justify-content: ${props => props.jcontent ? props.jcontent : ""};
  align-items: ${props => props.aitems ? props.aitems : ""};
  background: ${props => props.bgcolor ? props.bgcolor : ""};
`;


