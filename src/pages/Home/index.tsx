import React from "react";
import { Box } from "../../components/Box";
//import { InputSelect } from "../../components/InputSelect";
import { Section } from "../../components/Section";
import { Title } from "../../components/Title";
import { ContainerHome } from './styles';

interface IHomeProps {
  children?: React.ReactNode;
  garea?: string;
  maxcolumn?: number;
  mincolumn?: number;
}
const Home: React.FC<IHomeProps> = ({ children, garea, maxcolumn, mincolumn }) => {

  const options = [
    {value: '0', label: 'Janiero'},
    {value: '1', label: 'Fevereiro'},
    {value: '2', label: 'Março'}
  ]

  return (
   <ContainerHome garea={garea} maxcolumn={maxcolumn} mincolumn={mincolumn}>
    <>
    <Section>
        <Box aitems={"flex-start"}>
          <Title title={"Home"}/>
        </Box>
        <Box fdirection={"row"} jcontent={"flex-end"}>
          
        
        </Box>
      </Section>
    </>
   </ContainerHome>
  );
}

export { Home };