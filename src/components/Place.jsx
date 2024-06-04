import React from 'react'
import { ImLocation } from "react-icons/im";
import data from '../db/db';

const Place = ({travel}) => {
  return (
    <div className='card-place'>
        <div className="imgBox">
            <img src={travel.image} alt="error_loading" />
        </div>
        <div className="textBox">
            <div className="location">
                <p><ImLocation className='location-icon' />{travel.location}</p>
                <a href="#">View on Google Maps</a>
            </div>
            <h1>{travel.place}</h1>
            <h4>{travel.start} - {travel.end}</h4>
            <p>{travel.desc}</p>
        </div>
    </div>
  )
}

export default Place