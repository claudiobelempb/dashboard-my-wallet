import styled from "styled-components";

export const ContainerLayoutMaciota = styled.div`
  background-color: #CCC;
  display: grid;
  grid-auto-columns: 250px auto 250px;
  grid-template-rows: 60px 1fr 60px;


  grid-template-areas: 
  "H H H" 
  "SL M SR"
  "F F F";
  height: 100vw;
  
`;