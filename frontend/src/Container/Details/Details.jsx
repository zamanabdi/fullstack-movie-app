import React, { useEffect, useState } from 'react';
import { img_300,img_not_available } from '../../Config';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaStar } from "react-icons/fa6";
import "./details.css";
import GenreCards from '../../components/genreCards/GenreCards';
import CrewCard from '../../components/crewCard/CrewCard';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Img from '../../components/lazyLoadImage/Img';

const Details = () => {
const params = useParams();
const [content,setContent] = useState([]);
const [leftLimit, setLeftLimit] = useState(0);


const [video,setVideo] = useState();
const [credits,setCredits] = useState();
const [starArr,setStarArr] = useState([]);

const id = params.movieid || "";
const media_Type = params.mediatype || "";
const API_KEY = process.env.REACT_APP_KEY;






const fetchData = async() => {
  try {
    const {data} = await axios.get(`https://api.themoviedb.org/3/${media_Type}/${id}?api_key=${API_KEY}`);

    setContent(data);
    console.log("details", data);
    
  } catch (err) {
    console.error(err);
  }
}

const fetchVideo = async() => {
  try {
    const {data} = await axios.get(`https://api.themoviedb.org/3/${media_Type}/${id}/videos?api_key=${API_KEY}&language=en-US`);

    
    setVideo(data.results[0].key);
    //  setVideo(data.results.filter((item,index) => item.name.includes("Official Trailer" || "Final Trailer" || "official trailer"))[0].key);
    console.log("ye video data hai", data)
    
  } catch (err) {
    console.error(err);
  }
}

const fetchCredits = async() => {
  try {
    const {data} = await axios.get(`https://api.themoviedb.org/3/${media_Type}/${id}/credits?api_key=${API_KEY}&language=en-US`);

    setCredits(data.cast);
    console.log('film ki cast n crew', data)
    
  } catch (err) {
    console.error(err);
  }
}




useEffect(() => {
fetchData();
fetchVideo();
fetchCredits();
},[])

useEffect(() => {
window.scrollTo(0,0);
},[])

useEffect(() => {
 if(content.vote_average){
let tempArr = new Array(Math.floor(content.vote_average)).fill(1);
setStarArr(tempArr);
 }

},[content])




  const handleRightScroll = () => {
    if (leftLimit < 5) {
      setLeftLimit((leftLimit) => leftLimit + 1);
    }

    console.log(leftLimit);

    let slider = document.getElementById("crew-card-slider");
    slider.style.transition = "all 1s";
    //console.log(slider)
    switch (leftLimit) {
      case 0:
        slider.style.transform = "translateX(-80px)";
        break;

      case 1:
        slider.style.transform = "translateX(-716px)";
        break;

      case 2:
        slider.style.transform = "translateX(-1432px)";
        break;

      case 3:
        slider.style.transform = "translateX(-2150px)";
        break;

      case 4:
        slider.style.transform = "translateX(-2866px)";
        break;

      case 5:
        slider.style.transform = "translateX(-4100px)";
        break;

      default:
        slider.style.transform = "translateX(0px)";
        break;
    }
  };

  const handleLeftScroll = () => {
    if (leftLimit > 0) {
      setLeftLimit((leftLimit) => leftLimit - 1);
    }

    console.log(leftLimit);

    let slider = document.getElementById("crew-card-slider");
    slider.style.transition = "all 1s";

    switch (leftLimit) {
      case 5:
        slider.style.transform = "translateX(-4100px)";
        break;

      case 4:
        slider.style.transform = "translateX(-2866px)";
        break;

      case 3:
        slider.style.transform = "translateX(-1432px)";
        break;

      case 2:
        slider.style.transform = "translateX(-716px)";
        break;

      case 1:
        slider.style.transform = "translateX(-300px)";
        break;

      case 0:
        slider.style.transform = "translateX(0px)";
        break;

      default:
        slider.style.transform = "translateX(0px)";
        break;
    }
  };



const {genres} = content;
const backdropUrl = content.backdrop_path? `https://image.tmdb.org/t/p/original/${content.backdrop_path}` : ""; 
const posterUrl = content.poster_path? `https://image.tmdb.org/t/p/w500/${content.poster_path}` : "";

const Hrs = Math.floor((content.runtime) / 60);
const Mins = (content.runtime % 60);
const production = content.production_companies



  return (
    <div className='details-wrapper'>
      {/* backdrop image */}
      <div className='backdrop-img-wrapper'>
      <img src={backdropUrl}/>
      </div>

      {/* movie poster */}
      <div className='movie-poster'>
        <img src={posterUrl}/>
      </div>

      {/* movie details */}
      <div className='movie-details'>
      <h1>{content.original_title || content.original_name}</h1>
      <br/>
      {
        content.tagline !== ""? <><span style={{color:"silver",background:"transparent"}}>{content.tagline}</span>
        <br/> </> : null
      }
      <br/>
      <p>{content.overview}</p>
      <br/>

      {/* genre cards */}
     <div className='genre-wrapper'>
     {
     genres && genres.length > 0? (genres.map((item,index) => <GenreCards key={item.id} name={item.name}/>)) : (<div>Action</div>)
     }
     </div>

     <br/>

     {/* release date */}
     {
      content.release_date? (<p><span style={{fontWeight:"bold",background:"transparent"}}>Release Date</span> {content.release_date}</p>) : (<p><span style={{fontWeight:"bold",background:"transparent"}}>First Air Date</span> {content.first_air_date}</p>)
     }
     

     <br/>

     {/* status */}
     <p><span style={{fontWeight:"bold",background:"transparent"}}>Status</span>: {content.status}</p>
     <br/>

     {/* movie budget */}
     <p><span style={{fontWeight:"bold",background:"transparent"}}>Budget:</span> {content.budget > 0? `${content.budget} USD`: <span style={{background:"transparent",color:"silver"}}>Not Available</span>}</p>

     <br/>

     {/* movie rating */}
     <div className='movie-rating'><b style={{background:"transparent",color:"silver"}}>Rating:</b> &nbsp;
      {
         starArr && starArr.length > 0? (starArr.map((item,index) => <FaStar key={index} size={20} fill='gold' />)) : (<div style={{background:"transparent"}}>No Rating Found...</div>)
      }
      <span>{Math.floor(content.vote_average)}/10</span>
     </div>

     <br/>

     {/* movie runtime */}
     <div className='movie-runtime'>
     {
      content.runtime? (<p>
        <span style={{fontWeight:"bold",background:"transparent"}}>Runtime:</span> {`${Hrs} hrs ${Mins} minutes`}
       </p>) : (<p>
        <span style={{fontWeight:"bold",background:"transparent"}}>Number of Episodes:</span> {content.number_of_episodes}
       </p>)
     }
     
     </div>
     <br/>

     {/* production companies */}
     <div className='prod-companies'>
     
      {
       production && production.length > 0? (production.map((item,index) => <p>{item.name}</p>)) : (<div>Action</div>)
        }
     
     </div>

     {/* movie trailer */}
     <div className="movie-video">
     <iframe width="940" height="534" src={`https://www.youtube.com/embed/${video}`} style={{border:'none',boxShadow:"4px 5px 10px 4px rgba(0,0,0,0.2)"}} allowFullScreen="true"></iframe>
      </div>
     


      </div>

      {/* opacity layer */}
      <div className='opac-layer'></div>

      {/* crew */}
      <div className='movie-crew'>
      <h1 style={{position:"absolute",zIndex:"3000",top:"-2px",background:"transparent"}}>Movie Cast</h1>
      
       <div className='crew-container'>
     
        <div className='crew-slider' id='crew-card-slider'>
        {credits?.map((item,index) => <CrewCard {...item}/>)}
        </div>

        <button className="top-btns top-left-arrow" onClick={handleLeftScroll}>
          <FaArrowLeft size={30} color="#fff" />
        </button>
        <button className="top-btns top-right-arrow" onClick={handleRightScroll}>
          <FaArrowRight size={30} color="#fff" />
        </button>
       </div>
      </div>

      
      

    </div>
  )
}

export default Details
