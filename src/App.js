import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainSite from './MainSite';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        value:'',
        menuOpen: false
    };
}
  render() {
    return (
      <div className="App">
        <Header menuStatus={this.state.menuOpen} />
        <MainSite />
        <Footer />
      </div>
    );
  }
  
}

export default App;
