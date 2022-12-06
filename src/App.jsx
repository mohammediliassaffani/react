import React, { Component } from 'react'
import CardList from './Components/CardList'
import SerchBox from './Components/SerchBox'
import { robots } from './robots'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfild: '',
    }
    console.log('2')
  }

  componentDidMount() {
    console.log('1')
  }

  onSearchChange = (event) => {
    this.setState({ searchfild: event.target.value })
  }

  render() {
    console.log('3')
    const robotsFilitters = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfild.toLowerCase())
    })
    return (
      <div className="tc">
        <h1>my friends</h1>
        <SerchBox searchChange={this.onSearchChange} />
        <CardList robots={robotsFilitters} />
      </div>
    )
  }
}
export default App
