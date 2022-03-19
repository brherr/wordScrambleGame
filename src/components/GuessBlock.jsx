import React from 'react';
import Score from "./Score.jsx";
import WordRow from './WordRow.jsx';

function GuessSection(props) {
    const { sentenceIndex, sentence, addToScore, scoreCount } = props

    let array = sentence.split(" ")
    // console.log(array)

    let showRow = array.map(word => <WordRow word={word}
        wordIndex={`${sentenceIndex}-${array.indexOf(word)}`}
        addToScore={addToScore} 
        />)


    return(
        <div id="guessSection">
            <Score score={scoreCount} />
            <div className="rowContainer">
                {showRow}
            </div>
        </div>
    )
}

export default GuessSection;