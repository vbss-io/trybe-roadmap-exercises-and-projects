import React, { Component } from "react";
import PropTypes from "prop-types";
import './pokemon.css';
import '../cssReset.css';

class Pokemon extends Component {
    render() {
    const { pokemon } = this.props;
        return (
            <div className="pokemon">
                <ul className="pokemon-info">
                    <li>{pokemon.name}</li>
                    <li>Type: {pokemon.type}</li>
                    <li>Average Weight: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</li>
                </ul>
                <div>
                    <img src={pokemon.image} alt={pokemon.name} />
                </div>
            </div>
        )
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        averageWeight: PropTypes.shape({
            value: PropTypes.number.isRequired,
            measurementUnit: PropTypes.string.isRequired
        }).isRequired,
        image: PropTypes.string.isRequired
    }).isRequired
}

export default Pokemon;