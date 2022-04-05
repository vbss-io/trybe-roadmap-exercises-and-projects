import React, { Component } from "react";
import Pokemon from "./pokemon";
import pokemons from "../data.js"
import './pokedex.css';
import '../cssReset.css';

class Pokedex extends Component {
    render () { 
        return (
            <section className="pokedex">
                {pokemons.map((pokemon) => {
                    return <Pokemon key={pokemon.id} pokemon={pokemon} />
                })}
            </section>
        )
    }
}

export default Pokedex;