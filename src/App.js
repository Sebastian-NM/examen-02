import React from "react";
import "./styles.css";
import "./components/Cabecera";
import Cabecera from "./components/Cabecera";
import Card from "./components/Card";
import AppControlPanel from "./components/AppControlPanel";
import RestartButton from "./components/RestartButton";
import Body from "./components/Body";
export default function App() {
  const reiniciarJuego = () => {
    console.log("Juego reiniciado");
    // lógica de reinicio aquí
  };
  return (
    <div>
      <Cabecera></Cabecera>
      <Body></Body>
    </div>
  );
}
