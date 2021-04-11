import { 
  Container,
  Content
} from './styles';

import logoImg from '../../assets/images/logo.svg';

import { Brand } from '../Brand';
import { Button } from '../Button';


export function Header() {
  return (
    <Container>
     <Content>
      <Brand />
      <Button title={'Nova Tarefa'} />
     </Content>
    </Container>
  );
}