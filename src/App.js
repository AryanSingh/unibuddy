import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import {createHash} from "./Api/wordHashCreator";
import HomePage from './components/HomePage';
import { find_relevant_results} from "./Api/helpers";

export class App extends Component {

	constructor(){
		super();
		this.state = {
			currentSearch: '',
			table: {},
			searchResults: []
		}
	}

	componentDidUpdate(prevProps, prevState){
		if(prevState.currentSearch !== this.state.currentSearch){
			console.log('currentSearch', this.state.currentSearch)
			this.doSearch();
		}

	}

	componentDidMount(){
		this.hashCreate()
	}

	setCurrentSearch = (search) => {
		this.setState({ currentSearch: search })
	};

	doSearch = () => {
		let searchArr = this.state.currentSearch.split(' ');
		let results = find_relevant_results(this.state.table, searchArr);
		console.log('results',results,this.state.table);
		this.setResults(results);
	};

	setResults = (searchResults) => {
		let resultsArr = [];
		searchResults.map((result) => {
			resultsArr.push({ id: result, title: data.titles[result], summary: data.summaries[result]['summary']})
		});
		console.log(resultsArr);
		this.setState({ searchResults: resultsArr });

	};

	hashCreate = () => {
		let table = {};
		data.summaries.map((summary) => {
			table = createHash(table, summary)
		});
		this.setState({ table: table });
		console.log('table', table)
	};


  render(){
		return (
      <div className="App" >
        <HomePage setCurrentSearch={this.setCurrentSearch} hashTable={this.state.table} searchResults={this.state.searchResults} />
      </div>
		);
  }

}

export default App;
