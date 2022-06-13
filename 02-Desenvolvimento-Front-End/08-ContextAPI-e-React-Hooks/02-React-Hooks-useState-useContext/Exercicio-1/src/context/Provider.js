import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [redCar, setRedCar] = useState(false);
  const [blueCar, setBlueCar] = useState(false);
  const [yellowCar, setYellowCar] = useState(false);

  const contextValue = {
    redCar,
    setRedCar,
    blueCar,
    setBlueCar,
    yellowCar,
    setYellowCar,
  };

  return (
    <CarsContext.Provider value={ contextValue }>
      {children}
    </CarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
