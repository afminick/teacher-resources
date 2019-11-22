import React from 'react';
import HomePage from './HomePage'
import PageNotFound from './pages/PageNotFound'
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
          <Route exact path='/pagenotfound' component={PageNotFound} />
          <Redirect to='/pagenotfound' />
        </Switch>
      </Router>
    );
  }
  
}

export default App;
