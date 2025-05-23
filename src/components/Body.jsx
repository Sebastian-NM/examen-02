import React from "react";
import styled from "styled-components";
import AppControlPanel from "./AppControlPanel";

const MainWrapper = styled.main`
  display: flex;
  align-items: center;
  width: 1000px;
  justify-content: center;
  height: 100%;
`;

const AppCardsWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

const Body = () => {
  return (
    <MainWrapper>
      <AppCardsWrapper>{/* Aquí van las tarjetas */}</AppCardsWrapper>
      <AppControlPanel />
    </MainWrapper>
  );
};

export default Body;
