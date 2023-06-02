import React from "react";
import "./styles.css";
import { useState } from 'react'
import InfoBox from './InfoBox.js'

export default function App() {

  const [apiData, setApiData] = useState(["test", "test"])
  const [input, setInput] = useState("")

  function handleInputVal(event) {
    const typedVal = event.target.value
    setInput(typedVal)
    console.log('Typed value:', typedVal);
  }

  async function getMovieDetails(input) {
    let data = await fetch(`https://www.omdbapi.com/?t=${input}&apikey=43282252`, {
      mode: 'cors',
    })
  
    let parsedData = await data.json()
    console.log(parsedData)
    setApiData(parsedData)
  }

  return (
    <>
      <div className="header--container">

        <div className="input-modal-container">
          <h1 className="main--header">Movie Details Generator</h1>
          
          <input className="api--input" type="text" onChange={handleInputVal} placeholder="Enter Movie or TV Show"/>

          <button className="submit--button" onClick={() => getMovieDetails(input)}>Search</button>

        </div>

      </div>

      <div className="body--container">
        <div className="info--container">

          <InfoBox 
            title={apiData.Title}
            plot={apiData.Plot}
            year={apiData.Year}
            released={apiData.Released}
            poster={apiData.Poster}
            languages={apiData.Language}
            genres={apiData.Genre}
            imdbRating={apiData.imdbRating}
            rating={apiData.Rated}
            runtime={apiData.Runtime}
            actors={apiData.Actors}
            boxoffice={apiData.BoxOffice}
          />

        </div>

      </div>
    </>
  );
}
