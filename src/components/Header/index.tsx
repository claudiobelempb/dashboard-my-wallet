import React, {useMemo} from "react"
import { HeaderContainer } from './styles';

import emojis from "../../utils/emojis";
import { ButtonTogle } from '../ButtonToggle';

const Header: React.FC = () => {

  const emoji = useMemo(() => {

    const indice = Math.floor(Math.random() * emojis.length);

    return emojis[indice];

  }, []);

  return (
    <HeaderContainer jcontent={"space-between"} garea={"MH"}>
      <ButtonTogle/>
      <div>
        <h3>Olá, {emoji}</h3> 
        <span>Cláudio Cardoso</span>
      </div>
    </HeaderContainer>
  );
}

export { Header };