import React, { Component } from 'react';
import Cardlist from '../components/cardlist';
import SearchBox from '../components/searchbox';
import Scroll from '../components/scroll';
import './App.css';


class App extends Component {
 constructor() {
    super()
    this.state = {
        robots: [],
        searchfield: ''
    }
 }

 componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({ robots: users})
    })
    
 }

 onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
 }

 render() {
   const { robots, searchfield } = this.state;
    const filteredRobots = this.state.robots.filter(robots =>{
    return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return !robots.length ?
    <h1>Loading</h1> :
   (
    <div className = 'tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
        <Cardlist robots={filteredRobots}/>
        </Scroll>
    </div>
   );
 
}
}

export default App;
