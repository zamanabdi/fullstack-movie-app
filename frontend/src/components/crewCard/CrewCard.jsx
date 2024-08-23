import React from 'react';
import { img_300 } from '../../Config';
import { img_not_available } from '../../Config';

import { Link } from 'react-router-dom';
import "./crewCard.css"
import MovieHeading from '../movieHeading/MovieHeading';
import no_poster from "../../assets/no-poster.png";


const CrewCard = ({profile_path,original_name,character}) => {
const imgUrl = profile_path === null? `${no_poster}` : `https://image.tmdb.org/t/p/original/${profile_path}`;
 

  return (
    <div className="crew-card-wrapper">
    
    
   <img src={imgUrl} />
    <p>{original_name}</p>
      
    </div>
  )
}

export default CrewCard
