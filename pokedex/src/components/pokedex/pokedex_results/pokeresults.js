import React, { Component } from 'react';
import './pokeresults.css';
import {Link} from 'react-router-dom';
import PokemonCard from '../pokemoncard/pokemoncard';

class PokeResults extends Component {
	constructor(props){
		super(props);
		console.log(props);
		const pokemonIds = props.match.params.ids.split(',');
		const pokemonElements = pokemonIds.map( (id,index) => <PokemonCard id={id} key={index}/>)
		this.state = {
			pokemon: pokemonElements
		}
	}
	render(){
		return (
<div className="pokedex-results">
	<Link to="/">go to search</Link>
	<Link to="/details">go to details</Link>
	<div className="resultsPanel">
		{/*<div className="resultsContainer">
			<div className="resultsCard">
				<figure className="picture"></figure>
				<figcaption className="name">Bulbasaur</figcaption>	
			</div>
		</div>*/}
		{this.state.pokemon}
	</div>

</div>
		)
	}
}

export default PokeResults;