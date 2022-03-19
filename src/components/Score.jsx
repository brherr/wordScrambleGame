import React from 'react';

function Score(props) {

    return(
        <div id="score">
            <h2>Score: {props.score}</h2>
        </div>
    )
}

export default Score;