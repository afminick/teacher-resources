import React from 'react'

function LetterSquare(props){
    const letterClass = 
        props.data.guess.includes(props.letter) ?
        'greenLetter' : 
        props.data.wrongLetters.includes(props.letter) ?
        'redLetter': 'blueLetter';
    return(
        <div >
            <button 
                className={letterClass}
                name={props.letter} 
                onClick={props.guessLetter}
                >{props.letter}</button>
        </div>
    )
}

export default LetterSquare