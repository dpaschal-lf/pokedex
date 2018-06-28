import React, { Component } from 'react';
import './pokemoncard.css';

class PokemonCard extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: 'loading',
			image: '/images/loading.gif'
		}
	}
	componentDidMount(){
		fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.id}`)
			.then( response => { response.json()
				.then( data=> {
					this.setState({
						name: data.name,
						image: data.sprites.front_default
					})
				})})
	}
	render(){
		const styleObject = {
			backgroundImage: `url(${this.state.image})`
		}
		return (
		<div className="pokedex-card">
			<div className="resultsCard">
				<figure className="picture" style={ styleObject }></figure>
				<figcaption className="name">{this.state.name}</figcaption>	
			</div>
		</div>
		)
	}
}

export default PokemonCard;