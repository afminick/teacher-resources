import React from 'react';
import Game from './Game'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'


function TicTacToe() {
  return (
    <div className='tictactoeContainer'>
      <Header />
      <Game />
      <Footer />
    </div>
  )
}


export default TicTacToe
