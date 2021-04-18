import React, { useMemo } from "react";

import { ContainerLateral } from "./style";
import { Aside } from "../../components/Aside";
import { Brand } from "../../components/Brand";
import { Content }from "../../components/Content";
import { Box } from "../../components/Box";

import { NavBarVertical } from "../../components/NavBarVertical";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonTogle } from "../../components/ButtonToggle";
import emojis from "../../utils/emojis";

interface ILayoutLateral {
  children?: React.ReactNode;
}

const LayoutLateral = ({ children }: ILayoutLateral)=> {

  const emoji = useMemo(() => {

    const indice = Math.floor(Math.random() * emojis.length);

    return emojis[indice];

  }, []);
  
  return(
    <ContainerLateral>
      <Content garea={"SL"} bgcolor={"#252A48"} isbr={true}>
        <Aside>
          <Box>
            <Brand link={"/dashboard"} mw={30} alt={"My Logo"} title={"My Wallet"}/> 
          </Box>
          <Box>
            <NavBarVertical />
          </Box>
        </Aside>
      </Content>
      <Content garea={"H"} bgcolor={"#252A48"} isbb={true}>
        <Header>
          <Box aitems={"flex-start"}>
            <ButtonTogle/>
          </Box>
          <Box aitems={"flex-end"}>
            <h3>Olá, {emoji}</h3> 
            <span>Cláudio Cardoso</span>
          </Box>
        </Header>
      </Content>
      <Content garea={"M"} bgcolor={"#1B1F38"} height={"calc(100vh - 60px)"} isofy={true}>
        {children}
      </Content>
      <Content garea={"F"} bgcolor={"#252A48"}>
        <Footer>
         
        </Footer>
      </Content>
    </ContainerLateral>
  )
}

export { LayoutLateral };