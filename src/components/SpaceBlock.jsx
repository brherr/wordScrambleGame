import React, {useState, useEffect} from 'react';

function SpaceBlock(props) {
    const { spaceIndex, addToScore } = props

    const letter = " "
    let id = spaceIndex
    const [guess, setGuess] = useState("")
    const [isCorrect, setIsCorrect] = useState(false)

    useEffect(() => {
        setGuess("")
        setIsCorrect(false)
    }, [id])

    function handleChange(e) {
        e.preventDefault();
        const {value} = e.target
        setGuess(value) 
        compareGuess(letter, value)
    }

    function compareGuess(letter, value) {
        if (value === letter) {
            setIsCorrect(true)
            addToScore()
        } else {
            setIsCorrect(false)
        }
    }

    // focusing next or show next button
    function nextField(e) {
        e.preventDefault();
        if (e.target.parentNode.nextSibling) {
            let next = e.target.parentNode.nextSibling.firstChild
            next.focus()
        } else {
            let nxtBtn = document.getElementById("nextSentenceButton")
            nxtBtn.style.visibility = 'visible';
            nxtBtn.focus()
        }
    }


    return(
        <input className="spaceBlock" 
        id={id}
        type="text"
        value={guess}
        name="letter"
        style={isCorrect ? {backgroundColor: "#4caf50"} : {backgroundColor: "#ffb74d"} }
        onChange={handleChange}
        onKeyUp={nextField}
        maxLength="1">
        </input>
    )
}

export default SpaceBlock;