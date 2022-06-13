import React from 'react';
import TrafficSignal from './TrafficSignal';
import myContext from './contextAPI';
import './App.css';
import Cars from './Cars';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      red: false,
      blue: false,
      yellow: false,
      signalColor: 'red',
    }
  }

  moveCar = (car, move) => {
    this.setState({
      [car]: move,
    })
  }

  changeSignalColor = (color) => {
    this.setState({
      signalColor: color,
    })
  }

  render() {
    const carsContext = {
      red: this.state.red,
      blue: this.state.blue,
      yellow: this.state.yellow,
      moveCar: this.moveCar,
    }
    const trafficSignalContext = {
      signalColor: this.state.signalColor,
      changeSignalColor: this.changeSignalColor,
    }

    return (
      <div className="container">
        <myContext.Provider value={ carsContext }>
          <Cars />
        </myContext.Provider>
        <myContext.Provider value={ trafficSignalContext }>
          <TrafficSignal />
        </myContext.Provider>
      </div>
    )
  }
}

App.contextType = myContext;

export default App;
