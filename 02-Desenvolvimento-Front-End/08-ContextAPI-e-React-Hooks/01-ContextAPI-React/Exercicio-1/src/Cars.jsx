import React from 'react';
import myContext from './contextAPI';
import PropTypes from 'prop-types';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

class Cars extends React.Component {
  render () {
    const { red, blue, yellow, moveCar} = this.context;
    return (
      <div>
        <div>
          <img
            className={red ? 'car-right' : 'car-left'}
            src={carRed}
            alt="red car"
          />
          <button
            onClick={() => moveCar('red', !red)}
            type="button"
          >
            Move Car
          </button>
        </div>
        <div>
          <img
            className={blue ? 'car-right' : 'car-left'}
            src={carBlue}
            alt="blue car"
          />
          <button
            onClick={() => moveCar('blue', !blue)}
            type="button"
          >
            Move Car
          </button>
        </div>
        <div>
        <img
          className={yellow ? 'car-right' : 'car-left'}
          src={carYellow}
          alt="yellow car"
        />
        <button
          onClick={() => moveCar('yellow', !yellow)}
          type="button"
        >
          Move Car
        </button>
        </div>
      </div>
    )
  }
}

Cars.propTypes = {
  context: PropTypes.shape({
    red: PropTypes.bool,
    blue: PropTypes.bool,
    yellow: PropTypes.bool,
    moveCar: PropTypes.func
    })
}

Cars.contextType = myContext;

export default Cars;
