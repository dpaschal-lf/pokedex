import React, { Component } from 'react';
import './pokedex.css';
import PokeSearch from './pokedex_search/pokesearch';
import PokeResults from './pokedex_results/pokeresults';
import PokeDetails from './pokedex_details/pokedetails';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

class Pokedex extends Component {
	render(){
		return (
		<BrowserRouter>
			<div className="pokedex">
				<Switch>
					<Route exact path="/" component={PokeSearch} />
					<Route exact path="/search/:term?" component={PokeSearch} />
					<Route exact path="/search/:term/results/:ids" component={PokeResults} />
					<Route exact path="/details" component={PokeDetails} />
				</Switch>
			</div>
		</BrowserRouter>
		)
	}
}

export default Pokedex;