import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import backArrow from "../../assets/back_arrow_icon.png";
import "./Player.css";

const Player = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [videoData, setVideoData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
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
        setVideoData(data.results[0]);
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log("Error on fetching video");
    }
  };

  const backHomeHandle = () => {
    navigate("/");
  };

  const { name, key, type, published_at } = videoData;
  return (
    <div className="player-container">
      <img src={backArrow} alt="arrow_icon" onClick={backHomeHandle} />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div className="player-info">
        <p>{published_at.slice(0, 10)}</p>
        <p>{name}</p>
        <p>{type}</p>
      </div>
    </div>
  );
};

export default Player;
