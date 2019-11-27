import React from 'react'
import './wordguessStyles/wordguessGameArea.css'

import LetterBank from './LetterBank'
import WordArea from './WordArea'
import Animation from './Animation'


function wordguessArea(props) {
    return (
        <div className='wordguessArea'>
            <Animation data={props.data}/>
            <WordArea data={props.data}/>
            <LetterBank data={props.data} guessLetter={props.guessLetter}/>
            {props.winner() && props.winner()}
        </div>
    )
}

export default wordguessArea