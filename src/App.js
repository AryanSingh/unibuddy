import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import {createHash} from "./Api/wordHashCreator";
import HomePage from './components/HomePage';

export class App extends Component {

	componentDidMount(){
		this.hashCreate()

	}

	hashCreate = () => {
		let table = {};
		data.summaries.map((summary) => {
			table = createHash(table, summary)
		});
		console.log('table', table)
	};


  render(){
		return (
      <div className="App">
        <HomePage/>
      </div>
		);
  }

}

export default App;
