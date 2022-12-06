import React from 'react'

function Scroll(props) {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: 'solid black',
        height: '500px',
      }}
    >
      <h1>hi</h1>
      {props.children}
    </div>
  )
}
export default Scroll
