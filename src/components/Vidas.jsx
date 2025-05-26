import React from "react";
import styled from "styled-components";

const VidasContainer = styled.div`
  color: #fff;
  margin-bottom: 20px;
`;

const Vidas = ({ health }) => (
  <VidasContainer>
    <h2>Vidas:</h2>
    <div>{"❤️".repeat(health)}</div>
  </VidasContainer>
);

export default Vidas;
