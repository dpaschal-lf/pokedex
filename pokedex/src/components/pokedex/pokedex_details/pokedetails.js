import React, { Component } from 'react';
import './pokedetails.css';
import {Link} from 'react-router-dom';

class PokeDetails extends Component {
	render(){
		return (
<div className="pokedex-details">
	<Link to="/results">go to results</Link>
	<main className="pokeCard">
		<figure className="avatar"></figure>
		<div className="infoPanel">
			<div className="name">Bulbasaur</div>
			<div>Type: grass</div>
		</div>
		<div className="attacksPanel">
			<div className="attackCard">
				<figure className="attackIcon" style={{'backgroundImage': 'url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lucky-punch.png)'}}></figure>
				<div className="attackName">Punch</div>
			</div>
			<div className="attackCard">
				<figure className="attackIcon" style={{'backgroundImage': 'url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lucky-punch.png)'}}></figure>
				<div className="attackName">Punch</div>
			</div>
			<div className="attackCard">
				<figure className="attackIcon" style={{'backgroundImage': 'url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lucky-punch.png)'}}></figure>
				<div className="attackName">Punch</div>
			</div>
			<div className="attackCard">
				<figure className="attackIcon" style={{'backgroundImage': 'url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lucky-punch.png)'}}></figure>
				<div className="attackName">Punch</div>
			</div>
		</div>
	</main>
</div>
		)
	}
}

export default PokeDetails;