import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/PlanetCard.css';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    // Renomeando para n ultrapassar o limite do lint
    // Fui burro, corrigind de novo
    const planetAltText = `Planeta ${planetName}`;

    return (
      <div data-testid="planet-card" className="planetCard">
        <p data-testid="planet-name">{planetName}</p>
        <div className="planetImage">
          <img
            className={ planetName }
            data-testid="planet-image"
            src={ planetImage }
            alt={ planetAltText }
          />
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
