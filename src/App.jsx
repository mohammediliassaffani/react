import React from 'react'
import CardList from './Components/CardList'
import { robots } from './robots'

const App = () => {
  return (
    <div>
      <CardList robots={robots} />
    </div>
  )
}
export default App
