import styled from 'styled-components';

interface IInputSelectContainer {
  flexDirection?: string;
}

export const InputSelectContainer = styled.div<IInputSelectContainer>`
  display: flex;
  flex-direction: ${props => props.flexDirection};
`;

export const InputSelectItem = styled.select`
  width: 150px;
  height: 40px;
  margin-right: 10px;
  border-radius: 5px;
  font-size: 16px;
  padding: 7px 10px;
  border-radius: 5px;
  & label {

  }

  & label > span {

  }

  & label > select {
    
  }
`;