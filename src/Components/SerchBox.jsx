import React from 'react'

const SerchBox = ({ searchfild, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-light-blue"
        type="search"
        placeholder="type here"
        onChange={searchChange}
      />
    </div>
  )
}
export default SerchBox
