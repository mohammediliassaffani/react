import React from 'react'

const Card = (props) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 grow bw2 shadow-5 ">
      <img src={`https://robohash.org/${props.id}?size=100x100`} alt="robots" />
      <div>
        <h1> {props.name} </h1>
        <h5>{props.email}</h5>
      </div>
    </div>
  )
}
export default Card
