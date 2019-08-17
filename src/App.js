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
        menuOpen: true
    };

    this.menuClick = this.menuClick.bind(this);

}

menuClick(event) {
  /*event.preventDefault();*/
  this.setState({menuOpen:!this.state.menuOpen})
}


  render() {
    return (
      <div className="App">
        <Header 
          menuStatus={this.state.menuOpen}
          menuClick={this.menuClick} />
        <MainSite />
        <Footer />
      </div>
    );
  }
  
}

export default App;
