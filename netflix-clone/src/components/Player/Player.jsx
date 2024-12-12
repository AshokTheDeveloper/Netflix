import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import backArrow from "../../assets/back_arrow_icon.png";
import Loader from "../Loader/Loader";
import "./Player.css";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

const Player = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [videoData, setVideoData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });
  const [noData, setNoData] = useState(false);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    setApiStatus(apiStatusConstants.inProgress);
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
        if (data.results.length === 0) {
          setNoData(true);
        } else {
          setVideoData(data.results[0]);
        }
        setApiStatus(apiStatusConstants.success);
      } else {
        setApiStatus(apiStatusConstants.failure);
      }
    } catch (error) {
      console.log("Error on fetching video");
    }
  };

  const backHomeHandle = () => {
    navigate("/");
  };

  const renderNoResultsFound = () => (
    <div className="player-container">
      <img src={backArrow} alt="arrow_icon" onClick={backHomeHandle} />
      <p className="no-results-found-text">
        Sorry, this video is not available right now.
      </p>
    </div>
  );

  const convertToRelativeTime = (dateString) => {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
  };

  const { name, key, type, published_at } = videoData;

  const convertedDate = published_at && convertToRelativeTime(published_at);

  const renderPlayer = () => (
    <div className="player-container">
      <img
        src={backArrow}
        alt="arrow_icon"
        onClick={backHomeHandle}
        className="back-arrow-icon"
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${key}`}
        title="trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div className="player-info">
        <p>{published_at ? convertedDate : "Date"}</p>
        <p>{name}</p>
        <p>{type}</p>
      </div>

      <div className="player-info-small-screen">
        <p>{name}</p>
        <p>Type: {type}</p>
        <p>{published_at ? convertedDate : "Date"}</p>
      </div>
    </div>
  );

  const renderLoadingView = () => <Loader />;

  const renderFailureView = () => (
    <div className="player-failure-container">
      <h1>404 Not Found</h1>
    </div>
  );

  const renderResultStatus = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      case apiStatusConstants.success:
        return noData ? renderNoResultsFound() : renderPlayer();
      case apiStatusConstants.failure:
        return renderFailureView();
      default:
        return null;
    }
  };

  return <>{renderResultStatus()}</>;
};

export default Player;
