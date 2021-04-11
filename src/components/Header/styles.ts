import styled from  'styled-components';

export const Container = styled.header`
  width: 100%;
  background: ${props => props.theme.colors.primary};
`;

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


