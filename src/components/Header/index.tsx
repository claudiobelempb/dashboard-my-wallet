import React, {useMemo} from "react"
import { HeaderContainer } from './styles';

import emojis from "../../utils/emojis";
// import { Button } from '../Button';

export function Header() {

  const emoji = useMemo(() => {

    const indice = Math.floor(Math.random() * emojis.length);

    return emojis[indice];

  }, []);

  return (
    <HeaderContainer jcontent={"space-between"} garea={"MH"}>
      <h1>Toggle</h1>
      <div>
        <h3>Olá, {emoji}</h3> 
        <span>Cláudio Cardoso</span>
      </div>
    </HeaderContainer>
  );
}