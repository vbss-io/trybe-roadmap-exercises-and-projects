import React, { useContext } from 'react';
import Context from './context/Context';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

function TrafficSignal() {
  const { colorSignal, setColorSignal } = useContext(Context);
  return (
    <div>
      <div className="button-container">
        <button onClick={() => setColorSignal('red')} type="button">
          Red
        </button>
        <button onClick={() => setColorSignal('yellow')} type="button">
          Yellow
        </button>
        <button onClick={() => setColorSignal('green')} type="button">
          Green
        </button>
      </div>
      <img className="signal" src={renderSignal(colorSignal)} alt="" />
    </div>
  );
};

export default TrafficSignal;
