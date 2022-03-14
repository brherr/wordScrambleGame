import React from 'react';

const GuessBlock = (props) => {
    const { sentence } = props;
  return (
    <input className='guess-block' 
    type="text" 
    // value=
    // name=
    // style={isCorrect ? {backgroundColor: "#4caf50"} : {backgroundColor: "#e1e1e1"}}
    // onChange={handleChange}
    // onKeyUp={nextField}
    // maxLength='1'
    />
  )
}

export default GuessBlock;