import React from 'react';
import LetterBlock from './LetterBlock';
import SpaceBlock from './SpaceBlock';

function WordRow(props) {
    const { word, wordIndex, addToScore } = props

    let array = word.split("")

    const showLetters = array.map(letter => <LetterBlock letter={letter}
        array={array}
        letterIndex={`${wordIndex}-${array.indexOf(letter)}`}
        addToScore={addToScore}
        />);
    

    return(
        <div className="wordRow" id={`wordRow${wordIndex}`}>
                {showLetters}
                <SpaceBlock addToScore={addToScore}
                    array={array}
                    spaceIndex={`${wordIndex}-endSpace`} />
        </div>
    )
}

export default WordRow;