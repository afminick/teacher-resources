import React from 'react'
import './tictactoeStyles/tictactoestyles.css'
import GameSquare from './GameSquare';

function GameBoard(props) {
       const squares = props.words.map((item,index) => 
            <GameSquare 
                data={props.data} 
                key={index}
                number={index} 
                word={item}
                mark={props.data.wordList[index].playerMark}
                click={props.click}

            />)
        return (
            <div className='tictactoeBoard'>
                    {squares}        
            </div>
        )
    }


export default GameBoard