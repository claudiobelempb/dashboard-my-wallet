import { 
  Container,
  Content
} from './styles';

import { Brand } from '../Brand';
import { Button } from '../Button';


export function Header() {
  return (
    <Container>
     <Content>
      <Brand title={"My Wallet"}/>
      <Button title={'Nova Tarefa'} />
     </Content>
    </Container>
  );
}