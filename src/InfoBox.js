import React from 'react'

function InfoBox(props) {
  return (
    <>
      <h1 className="movie--title">{props.title} </h1>
      <p className="movie--plot">{props.plot}</p>
      
      <div className="main-movie-info">

        {props.released !== undefined && <img className="movie--poster" src={props.poster}/>}      

      
        <div className="extra-content-holder">

          {
            props.released !== undefined && 
            
            <div className="extra-holder">
            <h3>Date Released:</h3>
            <p>{props.released}</p>
            </div>

          }

          {
            props.released !== undefined &&

            <div className="extra-holder">
            <h3>Languages:</h3>
            <p>{props.languages}</p>
            </div>
            
          }

          {
            props.released !== undefined &&

            <div className="extra-holder">
            <h3>Genres:</h3>
            <p className="movie--genres">{props.genres}</p>
            </div>
            
          }

          {
            props.released !== undefined &&

            <div className="extra-holder">
            <h3>Rating:</h3>
            <p>{props.rating}</p>
            </div>
            
          }

          {
            props.released !== undefined &&

            <div className="extra-holder">
            <h3>IMDB Rating:</h3>
            <p>{props.imdbRating}/10</p>
            </div>
            
          }    

          {
            props.released !== undefined &&

            <div className="extra-holder">
            <h3>Runtime:</h3>
            <p>{props.runtime}</p>
            </div>
            
          }   

          {
            props.released !== undefined &&

            <div className="extra-holder">
            <h3>Actors:</h3>
            <p className="movie--actors">{props.actors}</p>
            </div>
            
          } 

          {
            props.released !== undefined &&

            <div className="extra-holder">
            <h3>Box Office:</h3>
            <p className="movie--boxoffice">{props.boxoffice}</p>
          </div>
            
          }         

        </div>
      </div>
    </>
  )
}

export default InfoBox