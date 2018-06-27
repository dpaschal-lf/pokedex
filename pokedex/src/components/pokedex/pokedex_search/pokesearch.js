import React, { Component } from 'react';
import './pokesearch.css';
import {Link} from 'react-router-dom';

class PokeSearch extends Component {
	render(){
		return (
<div className="pokedex-search">
	<input className="nameinput" type="text" placeholder="enter name"></input>
	<button className="searchbutton">SEARCH</button>
	<Link to="/results">go to results</Link>
</div>
	
		)
	}
}

export default PokeSearch;