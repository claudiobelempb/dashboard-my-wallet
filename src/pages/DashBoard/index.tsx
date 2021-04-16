import React from "react";

import { Content }from "../../components/Content";
import { Box } from "../../components/Box";
import { Title } from '../../components/Title';
import { InputSelect } from '../../components/InputSelect';
import { Section } from "../../components/Section";
import { CardList } from "../../components/CardList";

const Dashboard: React.FC = () => {

  const options = [
    {value: '0', label: 'Janiero'},
    {value: '1', label: 'Fevereiro'},
    {value: '2', label: 'Março'}
  ]
  

  return (
    <>
      <Content>
        <Section>
          <Box aitems={"flex-start"}>
            <Title title={"Entradas"}/>
          </Box>
          <Box fdirection={"row"} jcontent={"flex-end"}>
            <InputSelect options={options}/>
            <InputSelect options={options}/>
          </Box>
        </Section>
      </Content>
      <Content>
        <Section>
          <Box>
            <CardList tagcolor={"#FFF"} title={"title 01"} subtitle={"sub title 01"} amount={"11.000,00"}/>
            <CardList tagcolor={"#000"} title={"title 02"} subtitle={"sub title 02"} amount={"12.000,00"} />
            <CardList tagcolor={"#dd0"} title={"title 03"} subtitle={"sub title 03"} amount={"13.000,00"} />
          </Box>
        </Section>
      </Content>
    </>
  );
}

export { Dashboard };