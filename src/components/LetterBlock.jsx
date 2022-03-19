import React, {useEffect, useState} from 'react';

function LetterBlock(props) {
    const { addToScore, letterIndex } = props

    const letter = String(props.letter)
    let id = `letterBlock${letterIndex}`

    const [guess, setGuess] = useState("")
    const [isCorrect, setIsCorrect] = useState(false)

    useEffect(() => {
        setGuess("")
        setIsCorrect(false)
    }, [id])

    // handling inputs
    function handleChange(e) {
        e.preventDefault();
        const {value} = e.target
        setGuess(value)
        compareGuess(letter, value)
        console.log(e.target.id)
    }

    function compareGuess(letter, value) {
        let lowerValue = value.toLowerCase()
        let lowerLetter = letter.toLowerCase()
        if (lowerValue === lowerLetter) {
            setIsCorrect(true)
            addToScore()
        } else {
            setIsCorrect(false)
        }
    }

    // focus
    function nextField(e) {
        e.preventDefault();
        e.target.nextElementSibling.focus()
    }

    return(
        <input className="letterBlock" 
        id={id}
        type="text"
        value={guess}
        name={`letter`}
        style={isCorrect ? {backgroundColor: "#4caf50"} : {backgroundColor: "#e1e1e1"} }
        onChange={handleChange}
        onKeyUp={nextField}
        maxLength="1">
        </input>
    )
}

export default LetterBlock;