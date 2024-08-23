import React from "react";
import MovieHeading from "../movieHeading/MovieHeading";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CardMovies from "../cardMovies/CardMovies";
import { useState } from "react";
import "./renderTopRated.css";

const RenderTopRated = ({ content, message,mediaType }) => {
  const [leftLimit, setLeftLimit] = useState(0);

  const handleRightScroll = () => {
    if (leftLimit < 5) {
      setLeftLimit((leftLimit) => leftLimit + 1);
    }

    console.log(leftLimit);

    let slider = document.getElementById("toprated-card-slider");
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

    let slider = document.getElementById("toprated-card-slider");
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

  return (
    <>
    <MovieHeadingTopRated message={"Top Rated"}/>
      <div className="top-rated">
      
        <div className="slider-div" id="toprated-card-slider">
          {content && content.length > 0 ? (
            content.map((item, index) => (
              <CardMovies key={item.id} data={item} mediaType={mediaType}/>
            ))
          ) : (
            <div>Content loading...</div>
          )}
        </div>

        {/* action buttons */}
        <button className="top-btns top-left-arrow" onClick={handleLeftScroll}>
          <FaArrowLeft size={30} color="#fff" />
        </button>
        <button className="top-btns top-right-arrow" onClick={handleRightScroll}>
          <FaArrowRight size={30} color="#fff" />
        </button>
      </div>
    </>
  );
};

export default RenderTopRated;

const MovieHeadingTopRated = ({ message }) => {
  return <h1 className="top-rated-heading">{message}</h1>;
};
