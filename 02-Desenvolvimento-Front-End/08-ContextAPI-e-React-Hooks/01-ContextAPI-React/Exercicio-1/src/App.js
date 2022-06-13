import React from 'react';
import Cars from './Cars';
import myContext from './contextAPI';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      red: false,
      blue: false,
      yellow: false,
    }
  }

  moveCar = (car, move) => {
    this.setState({
      [car]: move,
    })
  }

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
    }
    return (
      <myContext.Provider value={context}>
        <Cars />
      </myContext.Provider>
    )
  }
}

App.contextType = myContext;

export default App;
