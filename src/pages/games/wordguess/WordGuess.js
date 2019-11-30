import React from 'react';
import Header from '../../../components/Header';
import Game from './Game';
import Footer from '../../../components/Footer';




const WordGuess = (props) => {
  return (
      <div className="App">
          <Header />
          <Game unitWords={props.unitWords} />
          <Footer />        
      </div>
  );
}


export default WordGuess;