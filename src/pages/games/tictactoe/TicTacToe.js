import React from 'react';
import Game from './Game'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'


function TicTacToe(props) {
  
  console.log("These are from Tictactoe: ");
    console.log(props.unitWords);
  
  return (
    <div className='tictactoeContainer'>
      <Header />
      <Game />
      <Footer />
    </div>
  )
}


export default TicTacToe
