import React, { Component } from 'react';
import './pokeresults.css';
import {Link} from 'react-router-dom';

class PokeResults extends Component {
	constructor(props){
		super(props);
		console.log(this.props)
	}
	render(){
		return (
<div className="pokedex-results">
	<Link to="/">go to search</Link>
	<Link to="/details">go to details</Link>
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