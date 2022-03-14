import React, { useState, useEffect } from "react";
import Scramble from "./components/Scramble";
import Score from "./components/Score";
import GuessBlock from "./components/GuessBlock";
import "./App.css";

function App() {
  const [sentence, setSentence] = useState("");
  const [sentenceNumber, setSentenceNumber] = useState(1);
  const [sentenceCount, setSentenceCount] = useState(0);

  const [loading, setLoading] = useState(true);
  const url = `https://api.hatchways.io/assessment/sentences/${sentenceNumber}`;

  useEffect(() => {
    fetchSentence(sentenceNumber);
  }, [sentence, sentenceNumber]);

  const fetchSentence = (sentenceNumber) => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (res) => {
          setSentence(res.data.sentence);
          setSentenceCount(sentence.length);
        },
        (err) => {
          console.error(err);
        }
      );
  };

  return (
    <div className="full-background">
      <div className="main-container">
        <div className="scramble">
          <Scramble sentence={sentence} />
        </div>
        <div className="instructions">
          <h3>Guess the sentence! Start typing.</h3>
          <h3>The yellow blocks represent spaces.</h3>
        </div>

        <div className="score">
          <Score />
        </div>
        <div>
          <GuessBlock sentence={sentence} sentenceCount={sentenceCount} />
        </div>
      </div>
    </div>
  );
}

export default App;
