import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import '../style/Missions.css';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missions">
          {missions.map((el) => (
            <MissionCard
              key={ el.name }
              name={ el.name }
              year={ el.year }
              country={ el.country }
              destination={ el.destination }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
