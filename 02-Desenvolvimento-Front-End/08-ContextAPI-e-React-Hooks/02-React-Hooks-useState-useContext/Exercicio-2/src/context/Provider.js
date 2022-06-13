import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [redCar, setRedCar] = useState(false);
  const [blueCar, setBlueCar] = useState(false);
  const [yellowCar, setYellowCar] = useState(false);
  const [colorSignal, setColorSignal] = useState('red');

  const contextValue = {
    redCar,
    setRedCar,
    blueCar,
    setBlueCar,
    yellowCar,
    setYellowCar,
    colorSignal,
    setColorSignal,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
