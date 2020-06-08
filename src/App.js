import React, {Component} from 'react';
import './App.css';
import data from './data.json';
import {createHash} from "./Api/wordHashCreator";
import HomePage from './components/HomePage/HomePage';
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


	//this listens to the changes in the input search string and firest up the doSearch function which calculates fresh search results on basis of current search string

	componentDidUpdate(prevProps, prevState){
		if(prevState.currentSearch !== this.state.currentSearch){
			this.doSearch();
		}
	}

	// after component gets mounted the function hashCreate is called which starts the building of the in memory hashmap


	componentDidMount(){
		this.hashCreate()
	}


	setCurrentSearch = (search) => {
		this.setState({ currentSearch: search })
	};

	// the function clearSearch clears the search string from input box and search results stored in memory when user clicks on any search result from the dropdown

	clearSearch = () => {
		this.setState({
			currentSearch: '',
			searchResults: []
		})
	};

	// doSearch method takes the current search string which is stored in local string, splits it into words(keys) array, takes the in memory hash map and calculates the serach results using the find_relevant_results helper function

	doSearch = () => {
		let searchArr = this.state.currentSearch.split(' ');
		let results = find_relevant_results(this.state.table, searchArr);
		this.setResults(results);
	};


	// set results takes the result(id) returned by the doSearch function, creates the complete book object using the id and the data.json file and creates a result array which is then stored in the local state.
	setResults = (searchResults) => {
		let resultsArr = [];
		searchResults.map((result) => {
			resultsArr.push({ id: result, title: data.titles[result], summary: data.summaries[result]['summary'], author: data.authors[result].author})
		});
		this.setState({ searchResults: resultsArr });

	};


	//hashCreate function creates the new hash table from scratch when the component mounts. It uses the createHash function


	hashCreate = () => {
		let table = {};
		data.summaries.map((summary, index) => {
			table = createHash(table, summary, data.authors[index].author)
		});
		this.setState({ table: table });
	};


  render(){
		return (
      <div className="App" >
        <HomePage setCurrentSearch={this.setCurrentSearch} hashTable={this.state.table} searchResults={this.state.searchResults} clearSearch={this.clearSearch}  />
      </div>
		);
  }

}

export default App;
