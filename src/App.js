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
        menuOpen: true,
        gameMenu: true,
    };

    this.menuClick = this.menuClick.bind(this);

}

menuClick(event) {
  /*event.preventDefault();*/
  const name = event.target.name;
  this.setState({[name]:!this.state[name]})
}


  render() {
    return (
      <div className="App">
        <Header 
          data={this.state}
          menuClick={this.menuClick} />
        <MainSite />
        <Footer />
      </div>
    );
  }
  
}

export default App;
