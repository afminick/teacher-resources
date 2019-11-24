import React from 'react';
import HomePage from './pages/HomePage'
import PageNotFound from './pages/PageNotFound'
import GamesPage from './pages/games/GamesPage'
import WordGuess from './pages/games/wordguess/WordGuess'
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
 } from 'react-router-dom';



class App extends React.Component {
  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/games' component={GamesPage} />
          <Route exact path='/games/wordguess' component={WordGuess} />
          <Route exact path='/pagenotfound' component={PageNotFound} />
          <Redirect to='/pagenotfound' />
        </Switch>
      </Router>
    );
  }
  
}

export default App;
