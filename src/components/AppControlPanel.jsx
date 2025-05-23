import React from "react";
import styled from "styled-components";

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

export default function AppControlPanel() {
  return (
    <Panel>
      <Heading>Panel de Control</Heading>

      <List>
        <li>Opción 1</li>
        <li>Opción 2</li>
      </List>

      <Health>
        {/* Puede reemplazar estos corazones por íconos o componentes */}
        <span>❤️ ❤️ ❤️</span>
      </Health>
    </Panel>
  );
}
