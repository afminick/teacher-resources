import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeBody from '../components/HomeBody';



class HomePage extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <HomeBody />
        <Footer />
      </div>
    );
  }
  
}

export default HomePage;
