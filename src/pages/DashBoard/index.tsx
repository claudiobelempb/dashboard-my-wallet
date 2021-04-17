import React, { useMemo } from "react";

import { LayoutLateral } from "../../Layouts/LayoutLateral";

import { Aside } from "../../components/Aside";
import { Brand } from "../../components/Brand";
import { Content }from "../../components/Content";
import { Box } from "../../components/Box";
// import { Title } from '../../components/Title';
// import { InputSelect } from '../../components/InputSelect';
// import { Section } from "../../components/Section";
import { NavBarVertical } from "../../components/NavBarVertical";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonTogle } from "../../components/ButtonToggle";
import emojis from "../../utils/emojis";

interface IDashBordProps {
  children?: React.ReactNode;
}

const Dashboard: React.FC<IDashBordProps> = ({ children }) => {

  const emoji = useMemo(() => {

    const indice = Math.floor(Math.random() * emojis.length);

    return emojis[indice];

  }, []);

  return (
    <LayoutLateral>
      <Content garea={"SL"} bgcolor={"#252A48"} isbr={true}>
        <Aside>
          <Box>
            <Brand mw={30} alt={"My Logo"} title={"My Wallet"}/> 
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
      <Content garea={"M"} bgcolor={"#1B1F38"}>
        {children}
      </Content>
      <Content garea={"F"} bgcolor={"#252A48"}>
        <Footer>
         
        </Footer>
      </Content>
    </LayoutLateral>
  );
}

export { Dashboard };