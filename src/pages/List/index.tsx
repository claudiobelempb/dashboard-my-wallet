import React from "react"
import { Box } from "../../components/Box";
import { Button } from "../../components/Button";
import { CardList } from "../../components/CardList";
import { InputSelect } from "../../components/InputSelect";
import { Section } from "../../components/Section";
import { Title } from "../../components/Title";

const List: React.FC = () => {

  const options = [
    {value: '0', label: 'Janiero'},
    {value: '1', label: 'Fevereiro'},
    {value: '2', label: 'Março'}
  ]

  return (
    <>
      <Section>
        <Box aitems={"flex-start"}>
          <Title title={"Entradas"} isBgcolor={"#4E41F0"}/>
        </Box>
        <Box fdirection={"row"} jcontent={"flex-end"}>
          <InputSelect options={options}/>
          <InputSelect options={options}/>
        </Box>
      </Section>
      <Section>
        <Box fdirection={"row"}>
          <Button title={"Recorrentes"} tgColor={"#4E41F0"}/>
          <Button title={"Eventuais"} tgColor={"#E44C4E"}/>
        </Box>
      </Section>
      <Section>
        <Box>
        <CardList tagcolor={"#FFF"} title={"title 01"} subtitle={"sub title 01"} amount={"11.000,00"}/>
          <CardList tagcolor={"#000"} title={"title 02"} subtitle={"sub title 02"} amount={"12.000,00"} />
          <CardList tagcolor={"#dd0"} title={"title 03"} subtitle={"sub title 03"} amount={"13.000,00"} />
          <CardList tagcolor={"#FFF"} title={"title 01"} subtitle={"sub title 01"} amount={"11.000,00"}/>
          <CardList tagcolor={"#000"} title={"title 02"} subtitle={"sub title 02"} amount={"12.000,00"} />
          <CardList tagcolor={"#dd0"} title={"title 03"} subtitle={"sub title 03"} amount={"13.000,00"} />
        </Box>
      </Section>
    </>
       
  );
}

export { List };