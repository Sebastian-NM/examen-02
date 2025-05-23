import React from "react";
import "./styles.css";
import "./components/Cabecera";
import Cabecera from "./components/Cabecera";
import Card from "./components/Card";
import AppControlPanel from "./components/AppControlPanel";
import RestartButton from "./components/RestartButton";
import Engine from "./components/Engine";
export default function App() {
  return (
    <div>
      <Cabecera></Cabecera>
    </div>
  );
}
