import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 100px;
  height: 150px;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 20px;
  transition: all 0.3s;
  margin: 10px;
  position: relative;
  transform: ${({ flipped }) => (flipped ? "rotateY(180deg)" : "none")};
`;

const CardStyled = styled.div`
  cursor: pointer;
  width: 100px;
  height: 150px;
  background-color: #1a1a1a;
  transition: all 0.2s;
`;

const CardValue = styled.div`
  display: block;
  color: #fff;
  position: absolute;
  top: 50px;
  left: 0;
  text-align: center;
  width: 100%;
  transform: rotateY(180deg);
`;

const Card = ({ word, flipped, onClick }) => {
  return (
    <CardContainer flipped={flipped} onClick={onClick}>
      <CardStyled />
      {flipped && <CardValue>{word}</CardValue>}
    </CardContainer>
  );
};

export default Card;
