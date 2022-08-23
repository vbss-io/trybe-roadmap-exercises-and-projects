import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import Footer from './components/Footer';
import './style/CssReset.css';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <SolarSystem />
        <Missions />
        <Footer />
      </main>
    );
  }
}

export default App;
