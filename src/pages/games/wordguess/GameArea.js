import React from 'react'
import './gameArea.css'

import LetterBank from './LetterBank'
import WordArea from './WordArea'
import Animation from './Animation'


function GameArea(props) {
    return (
        <div className='gameArea'>
            <Animation data={props.data}/>
            <WordArea data={props.data}/>
            <LetterBank data={props.data} guessLetter={props.guessLetter}/>
            {props.winner() && props.winner()}
        </div>
    )
}

export default GameArea