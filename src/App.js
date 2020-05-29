import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import {createHash} from "./Api/wordHashCreator";
import HomePage from './components/HomePage';

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
		}

	}

	componentDidMount(){
		this.hashCreate()
	}

	setCurrentSearch = (search) => {
		this.setState({ currentSearch: search })
	};

	doSearch = () => {
		
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
        <HomePage setCurrentSearch={this.setCurrentSearch} hashTable={this.state.table} />
      </div>
		);
  }

}

export default App;
