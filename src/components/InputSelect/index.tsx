import React from 'react';

import { 
  InputSelectContainer, 
  InputSelectItem,
} from './style';

interface IInputSelectProps {
  options: {
    value: string | number,
    label: string | number,
  }[],
}

export const InputSelect: React.FC<IInputSelectProps> = ({ options }) => {
  return (
    <InputSelectContainer flexDirection={'column'}>
      <InputSelectItem>
        {
          options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))
        }
      </InputSelectItem>
    </InputSelectContainer>
  );
}
