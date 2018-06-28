import React, { Component } from 'react';
import './pokesearch.css';
import {Link} from 'react-router-dom';

class PokeSearch extends Component {
	constructor(props){
		super(props);
		this.pokemonBaseData = [];
		this.maxAutoCompleteEntries = 4;
		this.candidateEntries = [];
		this.state = {
			inputVal: '', 
			autoCompleteEntries: ''
		}
		this.updateInput = this.updateInput.bind(this);
		this.useAutoCompleteEntry = this.useAutoCompleteEntry.bind(this);
		this.handleSearchClick = this.handleSearchClick.bind(this);
	}
	parsePokeCSV(csvData){
		const rows = csvData.split( csvData[ csvData.length-1]);
		rows.shift(); //get rid of headers
		this.pokemonNames = rows.map( item=> {
			const stats = item.split(',');
			return stats[1];
			//return { name: stats[1], species_id: stats[2], height: stats[3]}
		});
		this.pokemonNames.sort();
		this.pokemonBaseData = {};
		for(let pokeIndex=0; pokeIndex<rows.length; pokeIndex++){
			const stats = rows[pokeIndex].split(',');
			this.pokemonBaseData[stats[1]] = { id: stats[2], name: stats[1], height: stats[3] }
		}
		console.log(this.pokemonBaseData);

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
		this.props.history.push( '/search/'+value );
		const nextState = {
			inputVal: value,
			autoCompleteEntries: this.generatePokemonAutoCompleteEntries(value)
		}
		this.setState(nextState);
	}
	componentDidUpdate(){
		console.log(this.props);
	}
	useAutoCompleteEntry( event ){
		const entryText = event.target.innerText;
		this.setState({
			inputVal: entryText,
			autoCompleteEntries: ''
		})
	}
	generatePokemonAutoCompleteEntries( partialText ){

		if(partialText.length===0 || this.pokemonNames.length===0){
			return '';
		}
		const regex = new RegExp('^'+partialText+'.*');
		this.candidateEntries = this.pokemonNames.filter( entry=> regex.test(entry)).slice(0,this.maxAutoCompleteEntries);
		console.log(regex,this.candidateEntries);
		return (<div className="autocomplete-container">
									{(this.candidateEntries.map( (entry, index) => 
											<div onClick={this.useAutoCompleteEntry} className="autocomplete-entry" key={index}>{entry}</div>
									))}
								</div>)

	}
	handleSearchClick(){
		const searchIDs = this.candidateEntries.map( name => this.pokemonBaseData[name].id);
		this.props.history.push(`/search/${this.props.match.params.term}/results/${searchIDs.join(',')}`);
	}
	render(){
		const searchTerm = this.props.match.params.term || '';
		return (
<div className="pokedex-search">
	<div className="input-container">
		<input onChange={this.updateInput} className="nameinput" type="text" placeholder="enter name" value={searchTerm}></input>
		{this.state.autoCompleteEntries}
	</div>
	<button className="searchbutton" onClick={this.handleSearchClick}>SEARCH</button>
	<Link to="/results">go to results</Link>
</div>
	
		)
	}
}

export default PokeSearch;