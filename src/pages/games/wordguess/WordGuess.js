import React from 'react';
import Header from '../../../components/Header';
import Game from './Game';
import Footer from './Footer';




const WordGuess = () => {
  return (
      <div className="App">
          <Header />
          <Game />
          <Footer />        
      </div>
  );
}


export default WordGuess;