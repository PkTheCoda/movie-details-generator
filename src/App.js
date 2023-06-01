import React from "react";
import "./styles.css";
import { useState } from 'react'

export default function App() {

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
  }

  return (
    <>
      <div className="header--container">

        <div className="input-modal-container">
          <h1 className="main--header">Movie Details Generator</h1>

          <div className="input--container">
            <input className="api--input" type="text" onChange={handleInputVal}/>
            <button className="submit--button" onClick={() => getMovieDetails(input)}>Click me</button>
          </div>

        </div>

      </div>

      <div className="body--container">
        <h1>Test</h1>
      </div>
    </>
  );
}
