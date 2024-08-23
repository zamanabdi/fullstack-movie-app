import React from 'react';
import { img_300 } from '../../Config';
import { img_not_available } from '../../Config';

import { Link } from 'react-router-dom';


const CardMovies = ({data,mediaType}) => {
const imgUrl = data.poster_path? img_300 + data.poster_path : img_not_available;
const title = data.original_title || data.name;
const id = data.id;
const media_Type = data.media_type? data.media_type : mediaType;

  return (
    <div className="card-wrapper">
    <Link to={`/details/${id}/${media_Type}`}>
    
   <img src={imgUrl} />
    </Link>
      
    </div>
  )
}

export default CardMovies
