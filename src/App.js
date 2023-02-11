import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import { robots } from "./robots";
import Scroll from "./Scroll";
import "./App.css";


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
            .then(response=> response.json())
            .then(users=> this.setState({robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render() {
        const filterRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

    return (
        <div className="tc">
            <h1>Robo Friends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
           <Scroll>
            <CardList robots={filterRobots}/>
          </Scroll> 
        </div>
        );
    }
}

export default App; 