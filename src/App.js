import React, { useState, useEffect } from "react";
import Scramble from "./components/Scramble";
import GuessBlock from "./components/GuessBlock";
import "./App.css";

// not using excess comments because alot of the function names are self-explanatory!

function App() {
  const [sentence, setSentence] = useState("");
  const [sentenceNumber, setSentenceNumber] = useState(1);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [score, setScore] = useState(0);
  const [scoreCount, setScoreCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const url = `https://api.hatchways.io/assessment/sentences/${sentenceNumber}`;

  // when to fetch new sentence
  useEffect(() => {
    fetchSentence(sentenceNumber);
  }, [sentence, sentenceNumber, isGameOver]);

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

  function checkScore() {
    if (score === sentenceCount + 1) {
      setScoreCount((prev) => prev + 1, console.log(scoreCount));
    } else {
      console.log(scoreCount);
    }
  }

  function addToScore() {
    setScore((prev) => prev + 1, console.log(score));
  }

  function getNextSentence() {
    setScore(0);
    if (sentenceNumber < 10) {
      setSentenceNumber((prev) => prev + 1);
      checkScore();
      fetchSentence(sentenceNumber);
      // console.log(isGameOver)
      // console.log(sentenceNumber)
    } else {
      setIsGameOver(true);
      // console.log(isGameOver)
      // console.log(sentenceNumber)
    }
  }

  function resetGame(e) {
    setIsGameOver(false);
    setSentenceNumber(1, console.log(sentenceNumber));
    fetchSentence(sentenceNumber);
    setScoreCount(0);
  }

  return (
    <div className="App">
      <div className="container">
        {isGameOver && score === 10 ? (
          <h1 className="header">"You Win!!!"</h1>
        ) : (
          ""
        )}
        {isGameOver && score < 10 ? (
          <h1 className="header">"Try Again"</h1>
        ) : (
          ""
        )}
        {isGameOver ? "" : <Scramble sentence={sentence} />}
        {isGameOver ? (
          " "
        ) : (
          <div>
            <p>Guess the sentence! Start typing...</p>
            <br />
            <p>The yellow blocks are meant for spaces.</p>
          </div>
        )}
        {isGameOver ? (
          " "
        ) : (
          <GuessBlock
            sentence={sentence}
            sentenceIndex={`${sentenceNumber}`}
            score={score}
            addToScore={addToScore}
            scoreCount={scoreCount}
          />
        )}
        {isGameOver ? (
          <button
            id="resetButton"
            style={
              isGameOver ? { visibility: "visible" } : { visibility: "hidden" }
            }
            onClick={resetGame}
          >
            Reset
          </button>
        ) : (
          <button
            id="nextSentenceButton"
            style={{ visibility: "hidden" }}
            onClick={getNextSentence}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
