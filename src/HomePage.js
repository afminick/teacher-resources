import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HomeBody from './HomeBody';



class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        value:'',
        menuOpen: false,
        gameMenu: false,
        lessonPlanMenu: false,
        contactMenu: false
    };

    this.menuClick = this.menuClick.bind(this);

}

menuClick(event) {
  
  const name = event.currentTarget.name;
  this.setState({[name]:!this.state[name]})
}


  render() {
    return (
      <div className="App">
        <Header 
          data={this.state}
          menuClick={this.menuClick} />
        <HomeBody />
        <Footer />
      </div>
    );
  }
  
}

export default HomePage;
