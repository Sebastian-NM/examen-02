import React from "react";
import styled from "styled-components";
import RestartButton from "./RestartButton";

const Panel = styled.div`
  color: #fff;
  background-color: #292929;
  height: 100%;
  text-align: center;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h2`
  font-weight: 200;
  margin: 20px 20px 0;
`;

const List = styled.ul`
  padding: 0;

  li {
    list-style: none;
  }
`;

const Health = styled.div`
  display: flex;
  justify-content: center;
`;

export default function AppControlPanel({ guessedWords, health, restart }) {
  return (
    <Panel>
      <Heading>Panel de Control</Heading>
      <h2>Vidas:</h2>
      <Health>
        <span>{Array(health).fill("❤️").join(" ")}</span>
      </Health>

      <h2>Parejas encontradas:</h2>
      <List>
        {guessedWords.map((word, i) => (
          <li key={i}>{word}</li>
        ))}
      </List>

      <RestartButton onClick={restart} />
    </Panel>
  );
}
