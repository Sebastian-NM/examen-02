import React, { useEffect, useState } from "react";
import Card from "./Card";
import Vidas from "./Vidas";
import ParejasEncontradas from "./ParejasEncontradas";
import RestartButton from "./RestartButton";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  margin-top: 100px;
  width: 100%;
  max-width: 1000px;
  gap: 60px;$1`;

const CardsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(3, 150px);
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const ControlPanel = styled.section`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Engine = () => {
  const [words, setWords] = useState([]);
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [guessed, setGuessed] = useState([]);
  const [health, setHealth] = useState(5);
  const [gameOver, setGameOver] = useState(false);
  const [block, setBlock] = useState(false);

  useEffect(() => {
    iniciarJuego();
  }, []);

  const getRandomWords = async () => {
    const response = await fetch(
      "https://random-word.ryanrk.com/api/en/word/random/6"
    );
    return await response.json();
  };

  const iniciarJuego = async () => {
    const nuevasPalabras = await getRandomWords();
    const duplicadas = [...nuevasPalabras, ...nuevasPalabras];
    const mezcladas = shuffle(duplicadas).map((word, i) => ({ id: i, word }));
    setWords(nuevasPalabras);
    setCards(mezcladas);
    setSelectedCards([]);
    setGuessed([]);
    setHealth(5);
    setGameOver(false);
    setBlock(false);
  };

  const shuffle = (array) => {
    return array
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  };

  const seleccionarCarta = (card) => {
    if (
      block ||
      gameOver ||
      selectedCards.find((c) => c.id === card.id) ||
      guessed.includes(card.word)
    )
      return;

    const nuevosSeleccionados = [...selectedCards, card];
    setSelectedCards(nuevosSeleccionados);

    if (nuevosSeleccionados.length === 2) {
      setBlock(true);
      const [first, second] = nuevosSeleccionados;
      if (first.word === second.word) {
        setGuessed([...guessed, first.word]);
        setTimeout(() => {
          setSelectedCards([]);
          setBlock(false);
          if (guessed.length + 1 === words.length) {
            alert("Has ganado 😊");
            setGameOver(true);
          }
        }, 600);
      } else {
        setTimeout(() => {
          setSelectedCards([]);
          const nuevaVida = health - 1;
          setHealth(nuevaVida);
          setBlock(false);
          if (nuevaVida <= 0) {
            alert("Has perdido 😞");
            setGameOver(true);
          }
        }, 1000);
      }
    }
  };

  return (
    <Main>
      <CardsSection>
        {cards.map((card) => (
          <Card
            key={card.id}
            word={card.word}
            flipped={
              selectedCards.find((c) => c.id === card.id) ||
              guessed.includes(card.word)
            }
            onClick={() => seleccionarCarta(card)}
          />
        ))}
      </CardsSection>
      <ControlPanel>
        <Vidas health={health} />
        <ParejasEncontradas palabras={guessed} />
        <RestartButton reiniciar={iniciarJuego} />
      </ControlPanel>
    </Main>
  );
};

export default Engine;
