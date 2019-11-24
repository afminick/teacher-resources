import React from 'react'

function WordArea(props) {
    const vowelRegExp = /a|e|i|o|u/i
    const vowel = [];
    props.data.word.map(l=> vowelRegExp.test(l) ? vowel.push(l): null)
    const blanks = props.data.guess.map((e,index) => <p key={index}>{e}</p>)
    return(
        <div className='wordArea'>
            <div>
                <h4>Guess the Word!!</h4>
                {props.data.word.length > 0 ? <p>Letters: {props.data.word.length}    Vowels: {vowel.length}</p> : null}
            </div>
            <div className='blanks'>
                {blanks}
            </div>
        </div>
    )
}

export default WordArea