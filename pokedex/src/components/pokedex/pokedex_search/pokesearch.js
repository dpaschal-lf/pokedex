import React, { Component } from 'react';
import './pokesearch.css';
import {Link} from 'react-router-dom';

class PokeSearch extends Component {
	constructor(props){
		super(props);
		this.pokemonBaseData = [];
		this.maxAutoCompleteEntries = 3;
		this.state = {
			inputVal: '', 
			autoCompleteEntries: ''
		}
		this.updateInput = this.updateInput.bind(this);
		this.useAutoCompleteEntry = this.useAutoCompleteEntry.bind(this);
	}
	parsePokeCSV(csvData){
		const rows = csvData.split( csvData[ csvData.length-1]);
		rows.shift(); //get rid of headers
		this.pokemonBaseData = rows.map( item=> {
			const stats = item.split(',');
			return stats[1];
			//return { name: stats[1], species_id: stats[2], height: stats[3]}
		});
		this.pokemonBaseData.sort();
	}
	componentDidMount(){
		console.log('mounted');
		fetch('pokemon.csv')
			.then( (response)=>{ 
				response.text().then( (data)=>{
					this.parsePokeCSV(data);
				})
				
			})
			.catch( ()=>{ console.log('error')});
	}
	updateInput( event ){
		const value = event.target.value;
		const nextState = {
			inputVal: value,
			autoCompleteEntries: this.generatePokemonAutoCompleteEntries(value)
		}
		console.log(nextState);
		this.setState(nextState);
	}
	useAutoCompleteEntry( event ){
		const entryText = event.target.innerText;
		this.setState({
			inputVal: entryText,
			autoCompleteEntries: ''
		})
	}
	generatePokemonAutoCompleteEntries( partialText ){

		if(partialText.length===0 || this.pokemonBaseData.length===0){
			return '';
		}
		const regex = new RegExp('^'+partialText+'.*');
		const candidateEntries = this.pokemonBaseData.filter( entry=> regex.test(entry)).slice(0,3);

		return (<div className="autocomplete-container">
									{(candidateEntries.map( (entry, index) => 
											<div onClick={this.useAutoCompleteEntry} className="autocomplete-entry" key={index}>{entry}</div>
									))}
								</div>)

	}
	render(){
		return (
<div className="pokedex-search">
	<div className="input-container">
		<input onChange={this.updateInput} className="nameinput" type="text" placeholder="enter name" value={this.state.inputVal}></input>
		{this.state.autoCompleteEntries}
	</div>
	<button className="searchbutton">SEARCH</button>
	<Link to="/results">go to results</Link>
</div>
	
		)
	}
}

export default PokeSearch;