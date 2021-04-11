import React from 'react';

import { FormContainer } from './style';
import { Title } from '../Title';
import { Input } from '../Input';
import { Button } from '../Button';

export const Form: React.FC = () => {
  return (
    <FormContainer>
      <Title title={'Entrar'}/>
      <Input />
      <Input />
      <Button />
    </FormContainer>
  )
}
