import React from "react";

import { Grid } from "./style";

import { Container } from "../Container";
import { Aside } from "../../components/Aside"
import { Header } from '../../components/Header';
import { Main }from "../../components/Main";

const LayoutDashBoard: React.FC = () => {
  return(
    <Grid>
      <Aside/>
      <Header/>
      <Main/>
    </Grid>
  )
}

export { LayoutDashBoard };