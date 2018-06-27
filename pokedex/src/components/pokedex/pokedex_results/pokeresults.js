import React, { Component } from 'react';
import './pokeresults.css';

class PokeResults extends Component {
	render(){
		return (
<div className="pokedex-results">
	<div className="resultsPanel">
		<div className="resultsContainer">
			<div className="resultsCard">
				<figure className="picture"></figure>
				<figcaption className="name">Bulbasaur</figcaption>	
			</div>
		</div>
		<div className="resultsContainer">
			<div className="resultsCard">
				<figure className="picture"></figure>
				<figcaption className="name">Bulbasaur</figcaption>	
			</div>
		</div>
		<div className="resultsContainer">
			<div className="resultsCard">
				<figure className="picture"></figure>
				<figcaption className="name">Bulbasaur</figcaption>	
			</div>
		</div>
		<div className="resultsContainer">
			<div className="resultsCard">
				<figure className="picture"></figure>
				<figcaption className="name">Bulbasaur</figcaption>	
			</div>
		</div>
	</div>

</div>
		)
	}
}

export default PokeResults;