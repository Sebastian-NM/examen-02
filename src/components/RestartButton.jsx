import React from "react";
import styled from "styled-components";

const BotonReinicio = styled.button`
  font-size: 18px;
  outline: 0;
  border: 0;
  cursor: pointer;
  background: radial-gradient(100% 100% at 100% 0%, #89e5ff 0%, #5468ff 100%);
  box-shadow: 0px 0.01em 0.01em rgba(45, 35, 66, 0.4),
    0px 0.3em 0.7em -0.01em rgba(45, 35, 66, 0.3),
    inset 0px -0.01em 0px rgba(58, 65, 111, 0.5);
  padding: 0 2em;
  border-radius: 0.3em;
  color: #fff;
  height: 2.6em;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
  margin-top: 50px;
  transition: box-shadow 0.15s ease, transform 0.15s ease;

  &:hover {
    box-shadow: 0px 0.1em 0.2em rgba(45, 35, 66, 0.4),
      0px 0.4em 0.7em -0.1em rgba(45, 35, 66, 0.3), inset 0px -0.1em 0px #3c4fe0;
    transform: translateY(-0.1em);
  }

  &:active {
    box-shadow: inset 0px 0.1em 0.6em #3c4fe0;
    transform: translateY(0em);
  }
`;

const RestartButton = ({ reiniciar }) => (
  <BotonReinicio onClick={reiniciar}>Reiniciar</BotonReinicio>
);

export default RestartButton;
