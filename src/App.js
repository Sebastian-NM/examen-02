import React from "react";
import Cabecera from "./components/Cabecera";
import Engine from "./components/Engine";
import styled from "styled-components";

const AppWrapper = styled.div`
  min-height: 100vh;
  background: #212121;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => (
  <AppWrapper>
    <Cabecera />
    <Engine />
  </AppWrapper>
);

export default App;
