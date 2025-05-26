import React from "react";
import styled from "styled-components";

const Lista = styled.ul`
  list-style: none;
  color: white;
`;

const ParejasEncontradas = ({ palabras }) => (
  <>
    <h2>Parejas encontradas</h2>
    <Lista>
      {palabras.map((word, index) => (
        <li key={index}>{word}</li>
      ))}
    </Lista>
  </>
);

export default ParejasEncontradas;
