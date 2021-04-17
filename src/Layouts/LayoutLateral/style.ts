import styled from "styled-components";

export const ContainerLateral = styled.div`
  background-color: #CCC;
  display: grid;
  grid-auto-columns: auto 1fr 1fr;
  grid-template-rows: 60px 1fr 60px;


  grid-template-areas: 
  "SL H H" 
  "SL M M"
  "SL F F";
  height: 100vh;
`;