import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
// import { robots } from './robots';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

componentDidMount(){
	// this.setState({ robots: robots})
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users => {this.setState({ robots: users})});
}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}
	render(){
		// console.log(event.target.value);
		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if (this.state.robots.length === 0) {
			return <h1>Loading</h1>
		} else{
		console.log(filteredRobots);
		return(
		<div className='tc'>
			<h1 className="f1">RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<CardList robots={filteredRobots}/>
			</Scroll>
		</div>
		);
	}
	}	
}

export default App;