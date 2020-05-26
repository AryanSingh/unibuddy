import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import {createHash} from "./Api/wordHashCreator";


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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
		);
  }

}

export default App;
