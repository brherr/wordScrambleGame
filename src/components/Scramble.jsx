import React, {useState, useEffect} from 'react';

const Scramble = (props) => {
    const { sentence } = props;

    const [scrambled, setScrambled] = useState(sentence);

    useEffect(() => {
        scrambleSentence(sentence)
    }, [sentence]);

    const scrambleSentence= (sentence) => {
        let temp = null;
        let final = [];
        let i = 0;

        let array = sentence.split(' ');

        array.forEach(word => {
            if(word.length < 4) {
                final.push(word)
            }else if(word.length > 3) {
                let wordArray = word.split('')
                let first = wordArray.shift()
                let last = wordArray.pop()

                for(i = wordArray.length-1; i>0; i--) {
                    let j = Math.floor(Math.random() * (i+1))
                    temp = wordArray[i];
                    wordArray[i] = wordArray[j];
                    wordArray[j] = temp;
                }

                let newWordArray = [first + wordArray.join('') + last]

                final.push(newWordArray.toString());
            }
        });

        let finalString = final.join(' ');
        setScrambled(finalString);
    }

  return (
    <div id='scrambled-word'>
        <h1>{scrambled}</h1>
    </div>

   
  )
}

export default Scramble;