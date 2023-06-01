import React from 'react'

function InfoBox(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <h1>{props.year}</h1>
      <h1>{props.rating}</h1>
    </>
  )
}

export default InfoBox