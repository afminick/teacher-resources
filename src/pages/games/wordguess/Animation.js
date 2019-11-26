import React from 'react'

function Animation(props) {
    /*const scoreBoxes = []props.data.scoreBoxes.map((box, index) => 
    <div key={'box'+index} className='scoreBox'><h4>{box}</h4></div>);*/
    const score  =[];
    for (let i = 0; i < 8; i++) {
        props.data.wrongLetters[i] ? score.push(props.data.wrongLetters[i]) : score.push('');
        }
        const scoreBoxes = score.map((box, index) => 
        <div key={'box'+index} className='scoreBox'><h4>{box}</h4></div>);
        
        return(
        <div className='scoreboard'>
            <h4>Scoreboard</h4>
            <div className='scoreboardRow'>
                {scoreBoxes}
            </div>
        </div>
    )
}

export default Animation