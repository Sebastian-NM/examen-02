import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import AppControlPanel from "./AppControlPanel";

const AppCardsWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

const MainWrapper = styled.main`
  display: flex;
  align-items: center;
  width: 1000px;
  justify-content: center;
  height: 100%;
`;

// API
async function getRandomWords() {
  const response = await fetch(
    "https://random-word.ryanrk.com/api/en/word/random/6"
  );
  return await response.json();
}

const shuffle = (array) => {
  return array
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

export default function Game() {
  const [words, setWords] = useState([]);
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const [guessed, setGuessed] = useState([]);
  const [health, setHealth] = useState(5);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    async function setup() {
      const wordsFromAPI = await getRandomWords();
      setWords(wordsFromAPI);
      const duplicated = shuffle([...wordsFromAPI, ...wordsFromAPI]);
      setCards(
        duplicated.map((word, i) => ({
          id: i,
          word,
          flipped: false,
          guessed: false,
        }))
      );
      setHealth(5);
      setGuessed([]);
      setSelected([]);
    }

    setup();
  }, []);

  const handleSelect = (index) => {
    if (blocked || cards[index].flipped || cards[index].guessed) return;

    const newCards = [...cards];
    newCards[index].flipped = true;
    const newSelected = [...selected, { word: newCards[index].word, index }];

    setCards(newCards);
    setSelected(newSelected);
    setBlocked(true);

    if (newSelected.length === 2) {
      const [first, second] = newSelected;
      if (first.word === second.word) {
        newCards[first.index].guessed = true;
        newCards[second.index].guessed = true;
        setGuessed([...guessed, first.word]);
        setSelected([]);
        setCards(newCards);
        setBlocked(false);
        if (guessed.length + 1 === words.length) {
          alert("¡Has ganado!");
        }
      } else {
        setTimeout(() => {
          newCards[first.index].flipped = false;
          newCards[second.index].flipped = false;
          setCards(newCards);
          setSelected([]);
          setBlocked(false);
          setHealth((prev) => {
            if (prev - 1 === 0) {
              alert("Has perdido.");
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }
    } else {
      setBlocked(false);
    }
  };

  const restart = () => {
    window.location.reload(); // versión simple. Puede mejorar con lógica directa.
  };

  return (
    <MainWrapper>
      <AppCardsWrapper>
        {cards.map((card, index) => (
          <Card
            key={card.id}
            value={card.word}
            flipped={card.flipped || card.guessed}
            guessed={card.guessed}
            onClick={() => handleSelect(index)}
          />
        ))}
      </AppCardsWrapper>
      <AppControlPanel
        health={health}
        guessedWords={guessed}
        onRestart={restart}
      />
    </MainWrapper>
  );
}
