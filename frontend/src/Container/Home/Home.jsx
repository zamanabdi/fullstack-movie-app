import React, { useEffect } from "react";
import { useState } from "react";

import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


import "./home.css";
import MovieHeading from "../../components/movieHeading/MovieHeading";
import CardMovies from "../../components/cardMovies/CardMovies";
import RenderCarousel from "../../components/renderCarousel/RenderCarousel";
import RenderPopular from "../../components/renderCarousel/RenderPopular";
import RenderTopRated from "../../components/renderCarousel/RenderTopRated";
import bgVideo from "../../assets/bgVideo.mp4"

const Home = () => {
  const [content, setContent] = useState([]);
  const [popularContent,setPopularContent] = useState([]);
  const [topRated,setTopRated] = useState([]);
  const [pageno, setPageno] = useState(1);
  const [paginationNo, setPaginationNo] = useState(0);
  
  

  

  const API_KEY = process.env.REACT_APP_KEY;
  const BASE_URL = "http://image.tmdb.org/t/p/";

  const getDataTrending = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`)


    setContent(data.results);
    setPaginationNo(data.total_pages);
    // console.log("trending data", data);
  };


  const getDataPopular = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${pageno}`)


    setPopularContent(data.results);
    setPaginationNo(data.total_pages);
    // console.log("Popular", data);
  };

  const getTopRated = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${pageno}`)


    setTopRated(data.results);
    setPaginationNo(data.total_pages);
    console.log("top Rated", data);
  };

  useEffect(() => {
   getDataTrending();
   getDataPopular();
   getTopRated();
  },[])

  

  return (
    <div className="homescreen-wrapper">
      {/* Banner section */}
       <div className="banner-section">
       <video src={bgVideo} autoPlay loop muted/>

      </div> 

      <div className="opacity-layer"></div>

      {/* trending */}
      <RenderCarousel content={content} message={"Trending"}/>

      {/* whats popular */}
      <RenderPopular content={popularContent} message={"What's Popular"} mediaType={"movie"}/>

      {/* Top Rated */}
     <RenderTopRated content={topRated} message={"Top Rated"} mediaType={"movie"}/>

     <div className="backdrop-screen">
     {""}
     </div>

    </div>
  );
};

export default Home;


