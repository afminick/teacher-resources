import React from 'react'
import './wordguessStyles/wordguessGameSetup.css'

import LessonSelect from '../../../components/LessonSelect'

function wordguessSetup(props) {

   
    const used = props.data.usedWords.map((item,index) => <li key={item + index}>{item}</li> );
    return (
        <div className='wordguessSetup'>
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
                unitWords={props.unitWords}
            />

        </div>
    )
}

export default wordguessSetup