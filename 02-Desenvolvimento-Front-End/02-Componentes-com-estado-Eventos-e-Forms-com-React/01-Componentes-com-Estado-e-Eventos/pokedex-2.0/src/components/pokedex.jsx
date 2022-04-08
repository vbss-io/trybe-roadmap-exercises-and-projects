import React, { Component } from "react";
import Pokemon from "./pokemon";
import NavButton from "./nav-buttons";
import TypeButtons from "./type-buttons";
import pokemons from "../data.js"
import './pokedex.css';
import '../cssReset.css';
import './buttons.css';

class Pokedex extends Component {
    constructor() {
        super();
        this.state = {
            currentPokemon: 0,
            navButtonStatus: false,
            pokemonList: pokemons
        }
    }

    checkMaxOrMin = (value) => {
        const pokemonListLength = this.state.pokemonList.length;
        if(this.state.currentPokemon === pokemonListLength - 1 && value === 'next') {
            return this.setState({
                currentPokemon: 0
            })
        }
        if(this.state.currentPokemon === 0 && value === 'prev') {
            return this.setState({
                currentPokemon: pokemonListLength - 1
            })
        }
    }

    handleClickPrevNext = (event) => {
        console.log("entrei");
        if (event.target.innerText === "Próximo") {
            this.setState({
                currentPokemon: this.state.currentPokemon + 1
            });
            this.checkMaxOrMin("next");
        }
        if (event.target.innerText === "Anterior") {
            this.setState({
                currentPokemon: this.state.currentPokemon - 1
            });
            this.checkMaxOrMin("prev");
        }
    }

    handleClickType = ({ target }) => {
        return this.setState({
            currentPokemon: 0,
            pokemonList: this.pokemonFilter(target.innerText),
        })
    }

    checkPokemonLength = (value) => {
        if(value <= 1) {
            return this.setState({
                navButtonStatus: true
            })
        }
        return this.setState({
            navButtonStatus: false
        })
    }

    pokemonFilter = (value) => {
        if(value === "All") {
          this.checkPokemonLength(pokemons.length);
          return pokemons;
        }
        const list =  pokemons.filter((pokemon) => pokemon.type === value);
        this.checkPokemonLength(list.length);
        return list;
    }

    render () {
        return (
            <section className="pokedex">
                <div className="nav-buttons">
                  <NavButton text='Anterior'handleClick={this.handleClickPrevNext} visible={this.state.navButtonStatus}/>
                  <NavButton text='Próximo' handleClick={this.handleClickPrevNext} visible={this.state.navButtonStatus}/>
                </div>
                  <Pokemon
                    key={this.state.pokemonList[this.state.currentPokemon].id}
                    pokemon={this.state.pokemonList[this.state.currentPokemon]}
                  />
                <div className="type-buttons">
                  <TypeButtons text="All" handleClick={this.handleClickType} />
                  <TypeButtons text="Electric" handleClick={this.handleClickType} />
                  <TypeButtons text="Fire" handleClick={this.handleClickType} />
                  <TypeButtons text="Bug" handleClick={this.handleClickType} />
                  <TypeButtons text="Poison" handleClick={this.handleClickType} />
                  <TypeButtons text="Psychic" handleClick={this.handleClickType} />
                  <TypeButtons text="Normal" handleClick={this.handleClickType} />
                  <TypeButtons text="Dragon" handleClick={this.handleClickType} />
                </div>
            </section>
        )
    }
}

export default Pokedex;