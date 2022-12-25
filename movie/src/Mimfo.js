import React from 'react'
import { useParams } from 'react-router-dom'
import './Mimfo.css'


function Mimfo() {
  const params = useParams();
  const imdbID = params.imdbID;
  const Title = params.Title;
  const Year = params.Year;
  const Type = params.Type;
  const imgUrl = `http://img.omdbapi.com/?apikey=3b6d1480&i=${imdbID}`
  return (
    <>
{/* <div className="imfos">
  
<div className="imagess">
        <img src={imgUrl} alt="" key={imdbID} srcset="" />
      </div>

      <div className="imp">
        <div style={{ color: 'white' }}>Year:{Year}</div>
        <h1 style={{ color: 'white' }}>Title:{Title}</h1>
        <h4>Type:{Type}</h4>
      </div> */}




      <div>
      <div className="heading">
        <h2>Movie Details</h2>
      </div>
      <div className="detail">
        <div className="imgs">
          <img src={imgUrl} alt="" srcset="" />
        </div>
        <div className="imfos">
          <h3>Title:{Title}</h3>
          <h5>Year:{Year}</h5>
          <h5>Type:{Type}</h5>
          <h3>Movie Details</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit  , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>

</div>

    </>
  )
}

export default Mimfo