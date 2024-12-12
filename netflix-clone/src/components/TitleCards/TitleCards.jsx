import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./TitleCards.css";

const TitleCards = ({ title, category }) => {
  const cardsRef = useRef();
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${
      category ? category : "now_playing"
    }?language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2JlZDhmZTU0ZTIxNGMyOGM0NDc0MjY5YmJiODE3MiIsIm5iZiI6MTczMzgyNDUwNi4xMzY5OTk4LCJzdWIiOiI2NzU4MGZmYTM2ODg0NTlkNzU4OTk2NmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4CISPGlOAQzrPSqBbcQPk8aquZjbxS97cKyQxkTrSxM",
      },
    };
    try {
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      if (response.ok) {
        setMoviesData(data.results);
      }
    } catch (error) {
      console.log("Error on fetching movies list");
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel);

  }, []);

  return (
    <div className="title-cards-container">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="cards-list" ref={cardsRef}>
        {moviesData.map((eachCard, index) => (
          <Link to={`/player/${eachCard.id}`} className="cards" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500` + eachCard.backdrop_path}
              alt={eachCard.original_title}
            />
            <p>{eachCard.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
