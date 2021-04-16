import styled from  'styled-components';

interface IHeaderProps {
  fdirection?: string;
  garea?:string;
  jcontent?: string;
  aitems?: string;
  bgcolor?:string;
  bbottom?: string;
}

export const HeaderContainer = styled.header<IHeaderProps>`
  grid-area: ${props => props.garea ? props.garea : ""};
  display: flex;
  flex-direction: ${props => props.fdirection ? props.fdirection : "row"};
  justify-content: ${props => props.jcontent ? props.jcontent : "center"};
  align-items: ${props => props.aitems ? props.aitems : "center"};
  width: 100%;
  background: ${props => props.bgcolor ? props.bgcolor : props.theme.colors.dark_light};
  color: ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.bbottom ? "none" : props.theme.colors.white};
  padding: 1rem;

  & div > h3 {
    font-size: 28px;
    font-weight: 700;
    line-height: 32px
  }

  & div > span {
    font-size: 16px;
    line-height: 18px;
  }
`;
/*
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  button {
    font-size: 1rem;
    border: none;
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.secondary};
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
*/

