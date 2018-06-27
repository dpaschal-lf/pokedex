import React, { Component } from 'react';
import './pokesearch.css';

class PokeSearch extends Component {
	render(){
		return (
<div className="pokedex-search">
	<input className="nameinput" type="text" placeholder="enter name"></input>
	<button className="searchbutton">SEARCH</button>
</div>
		)
	}
}

export default PokeSearch;