import React from 'react'
import LetterSquare from './LetterSquare'

function LetterBank(props) {

    
    const UnusedLetters = props.data.unusedLetters.map(item => 
        <LetterSquare 
            data={props.data}
            key={item} 
            letter={item}
            guessLetter={props.guessLetter}
        />);
    return(
        <div className='letterBank'>
            {UnusedLetters}
        </div>
    )
}



export default LetterBank