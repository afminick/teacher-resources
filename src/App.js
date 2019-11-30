import React, {useState, useEffect} from 'react';
import HomePage from './pages/HomePage'
import PageNotFound from './pages/PageNotFound'
import GamesPage from './pages/games/GamesPage'
import WordGuess from './pages/games/wordguess/WordGuess'
import TicTacToe from './pages/games/tictactoe/TicTacToe'
import config from './components/config'

import { 
  BrowserRouter as Router,
  Route,
  Switch,
  //Link,
  Redirect
 } from 'react-router-dom';



function App() {

  const [unitWords, setunitWords] = useState({});

  useEffect(() => {

    fetch(config.valuesUrl)
      .then(res => {
        return res.json()
      })
      .then(unitWords => {
       
        let masterListOfWords = {}
        for (const key of unitWords.valueRanges[0].values) {
          masterListOfWords[key[0]+key[1]+key[2]+key[3]+key[4]] = 
            {"Name": key[5],
            "Words":key[6],
            "Sounds": key[7],
            "Feedback": key[8]
            }
        }

        setunitWords(masterListOfWords);
       
      })
      
    }, [])
 
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/games' component={GamesPage} />
          <Route 
            exact path='/games/wordguess'
            render={(props) => <WordGuess {...props} unitWords={unitWords} />} />
          <Route 
            exact path='/games/tictactoe' 
            render={(props) => <TicTacToe {...props} unitWords={unitWords} />} />
          <Route exact path='/pagenotfound' component={PageNotFound} />
          <Redirect to='/pagenotfound' />
        </Switch>
      </Router>
    );
  
  
}

export default App;
