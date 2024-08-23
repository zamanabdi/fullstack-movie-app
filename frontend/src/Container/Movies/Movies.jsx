import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./moviePage.css";
import CardMovies from '../../components/cardMovies/CardMovies';
import MoviePageCard from '../../components/moviePageCard/MoviePageCard';


const Movies = () => {
   const [content,setContent] = useState([]);
   const [pageno,setPageno] = useState(1);
   const [paginationNo,setPaginationNo] = useState();

   const API_KEY = process.env.REACT_APP_KEY;


  const fetchDataTrending = async () => {
    const { data } = await axios.get(`
https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&query=batman&page=1`)


    setContent(data.results);
    setPaginationNo(data.total_pages);
    console.log("movies page ka data", data);
  };


  useEffect(() => {
   fetchDataTrending();
  },[])

  return (
    <div className='movie-page-wrapper'>
      {
        content && content.length > 0? (content.map((item,index) => <MoviePageCard {...item}/>)) : (<div>Content Loading...</div>)
      } 
    </div>
  )
}

export default Movies
