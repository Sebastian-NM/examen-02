import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AppControlPanel from "./AppControlPanel";
import Card from "./Card";

// Contenedores reutilizados
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

// API
const getRandomWords = async () => {
  const res = await fetch(
    "https://random-word.ryanrk.com/api/en/word/random/6"
  );
  return await res.json();
};

const shuffle = (array) => {
  return array
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

export default function Engine() {
  const [words, setWords] = useState([]);
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const [guessed, setGuessed] = useState([]);
  const [health, setHealth] = useState(5);
  const [blocked, setBlocked] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const initGame = async () => {
    const data = await getRandomWords();
    setWords(data);
    const duplicated = shuffle([...data, ...data]);
    const formatted = duplicated.map((word, index) => ({
      id: index,
      word,
      flipped: false,
      guessed: false,
    }));
    setCards(formatted);
    setSelected([]);
    setSelectedCardIndex(null);
    setGuessed([]);
    setHealth(5);
    setBlocked(false);
  };

  useEffect(() => {
    initGame();
  }, []);

  const handleCardClick = (index) => {
    if (blocked || cards[index].flipped || cards[index].guessed) return;

    const updatedCards = [...cards];
    updatedCards[index].flipped = true;
    setCards(updatedCards);

    if (selected.length === 1) {
      const [firstWord] = selected;
      const secondWord = updatedCards[index].word;

      if (firstWord === secondWord) {
        updatedCards[index].guessed = true;
        updatedCards[selectedCardIndex].guessed = true;
        setCards(updatedCards);
        setGuessed((prev) => [...prev, secondWord]);
        setSelected([]);
        setSelectedCardIndex(null);
        if (guessed.length + 1 === words.length) {
          alert(
            "🎉 Has ganado el juego. Presiona reiniciar para volver a jugar."
          );
        }
      } else {
        setBlocked(true);
        setTimeout(() => {
          updatedCards[index].flipped = false;
          updatedCards[selectedCardIndex].flipped = false;
          setCards(updatedCards);
          setSelected([]);
          setSelectedCardIndex(null);
          setBlocked(false);
          setHealth((prev) => {
            const next = prev - 1;
            if (next === 0) {
              alert("💀 Has perdido el juego. Presiona reiniciar.");
            }
            return next;
          });
        }, 1000);
      }
    } else {
      setSelected([updatedCards[index].word]);
      setSelectedCardIndex(index);
    }
  };

  return (
    <MainWrapper>
      <AppCardsWrapper>
        {cards.map((card, i) => (
          <Card
            key={card.id}
            value={card.word}
            flipped={card.flipped || card.guessed}
            guessed={card.guessed}
            onClick={() => handleCardClick(i)}
          />
        ))}
      </AppCardsWrapper>
      <AppControlPanel
        guessedWords={guessed}
        health={health}
        restart={initGame}
      />
    </MainWrapper>
  );
}
