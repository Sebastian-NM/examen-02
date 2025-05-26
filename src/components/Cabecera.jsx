import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background: linear-gradient(
    90deg,
    rgba(42, 123, 155, 1) 0%,
    rgba(176, 150, 0, 1) 100%
  );
  height: 150px;
  color: #fff;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Cabecera = () => (
  <HeaderWrapper>
    <h1>Encuentra la pareja</h1>
  </HeaderWrapper>
);

export default Cabecera;
