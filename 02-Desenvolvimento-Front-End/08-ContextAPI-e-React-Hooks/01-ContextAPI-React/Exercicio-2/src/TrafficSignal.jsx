import React from 'react';
import PropTypes from 'prop-types';
import myContext from './contextAPI';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';

class TrafficSignal extends React.Component {
  renderSignal = (signalColor) => {
    if (signalColor === 'red') return redSignal;
    if (signalColor === 'yellow') return yellowSignal;
    if (signalColor === 'green') return greenSignal;
    return null;
  };

  render() {
    const { signalColor, changeSignalColor } = this.context;
    return (
      <div>
        <div className="button-container">
          <button onClick={() => changeSignalColor('red')} type="button">
            Red
          </button>
          <button onClick={() => changeSignalColor('yellow')} type="button">
            Yellow
          </button>
          <button onClick={() => changeSignalColor('green')} type="button">
            Green
          </button>
        </div>
        <img className="signal" src={this.renderSignal(signalColor)} alt="" />
      </div>
    );
  }
};

TrafficSignal.propTypes = {
  context: PropTypes.shape({
    signalColor: PropTypes.string,
    changeSignalColor: PropTypes.func,
  }),
};

TrafficSignal.contextType = myContext;

export default TrafficSignal;