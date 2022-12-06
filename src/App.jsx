import React, { Component } from 'react'
import CardList from './Components/CardList'
import SerchBox from './Components/SerchBox'
import Scroll from './Components/Scroll'
import { robots } from './robots'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfild: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((Response) => Response.json())
      .then((users) => {
        this.setState({ robots: users })
      })
  }
  onSearchChange = (event) => {
    this.setState({ searchfild: event.target.value })
  }

  render() {
    const robotsFilitters = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfild.toLowerCase())
    })
    return (
      <div className="tc">
        <h1>my friends</h1>
        <SerchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={robotsFilitters} />
        </Scroll>
      </div>
    )
  }
}
export default App
