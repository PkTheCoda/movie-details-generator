import React from 'react'

function InfoBox(props) {
  return (
    <>
      <h1 className="movie--title">{props.title} </h1>
      <p className="movie--plot">{props.plot}</p>
      
      <img className="movie--poster" src={props.poster}/>

      <div className="extra-content-holder">

        <div className="extra-holder">
          <h3>Date Released:</h3>
          <p>{props.released}</p>
        </div>

        <div className="extra-holder">
          <h3>Languages:</h3>
          <p>{props.languages}</p>
        </div>

        <div className="extra-holder">
          <h3>Genres:</h3>
          <p>{props.genres}</p>
        </div>

        <div className="extra-holder">
          <h3>Rating:</h3>
          <p>{props.rating}</p>
        </div>

        <div className="extra-holder">
          <h3>IMDB Rating:</h3>
          <p>{props.imdbRating}/10</p>
        </div>

        <div className="extra-holder">
          <h3>Runtime:</h3>
          <p>{props.runtime}</p>
        </div>

      </div>
    </>
  )
}

export default InfoBox