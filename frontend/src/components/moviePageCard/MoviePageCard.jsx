import React from 'react';
import { img_300 } from '../../Config';
import { img_not_available } from '../../Config';
import no_poster from "../../assets/no-poster.png";

import { Link } from 'react-router-dom';


const MoviePageCard = ({poster_path,release_date,original_title,vote_average,id}) => {
const imgUrl = `https://image.tmdb.org/t/p/original/${poster_path}`;



  return (
    <div className="card-wrapper">
    <Link to={`/details/${id}/movie`}>
    
   <img src={imgUrl} />
    </Link>
      
    </div>
  )
}

export default MoviePageCard
