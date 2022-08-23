import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/MissionCard.css';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;

    return (
      <div className="mission-card" data-testid="mission-card">
        <div className="mission-name">
          <p data-testid="mission-name">{name}</p>
        </div>
        <div className="mission-details">
          <p data-testid="mission-year">{year}</p>
          <p data-testid="mission-country">{country}</p>
          <p data-testid="mission-destination">{destination}</p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
