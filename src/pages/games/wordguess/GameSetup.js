import React from 'react'
import './gameSetup.css'

import LessonSelect from './LessonSelect'

function GameSetup(props) {

    const used = props.data.usedWords.map((item,index) => <li key={item + index}>{item}</li> );
    return (
        <div className='gameSetup'>
            <p>Type your word here</p>
            <form onSubmit={props.submitWord}>
                <input 
                    type='text' 
                    name='value'
                    placeholder='Type a word here'
                    value={props.data.value} 
                    onChange={props.handleChange}
                    />
                <button
                    type='submit'
                    name='submitWord' 
                >Submit Word</button>
            </form>
            <div className='usedWords'>
                <h4>Used Words: </h4>
                <ol>
                    {used}
                </ol>
            </div>
            <LessonSelect 
                handleChange={props.handleChange}
            />

        </div>
    )
}

export default GameSetup