import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import '../style/SolarSystem.css';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="solSystem">
          {planets.map((el) => (
            <PlanetCard
              key={ el.name }
              planetName={ el.name }
              planetImage={ el.image }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
