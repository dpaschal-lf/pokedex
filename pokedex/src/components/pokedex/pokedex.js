import React, { Component } from 'react';
import './pokedex.css';
import PokeSearch from './pokedex_search/pokesearch';
import PokeResults from './pokedex_results/pokeresults';
import PokeDetails from './pokedex_details/pokedetails'

class Pokedex extends Component {
	render(){
		return (<div className="pokedex">
			<PokeSearch />
			<PokeResults />
			<PokeDetails />
		</div>)
	}
}

export default Pokedex;