import React from "react";
import { useNavigate } from "react-router-dom";
import backArrow from "../../assets/back_arrow_icon.png";
import "./CurrentPlayer.css";

const CurrentPlayer = () => {
  const navigate = useNavigate();
  const backHomeHandle = () => {
    navigate("/");
    window.reload();
  };
  return (
    <>
      <div className="play-now-player-container">
        <img src={backArrow} alt="arrow_icon" onClick={backHomeHandle} />
        <iframe
          width="90%"
          height="90%"
          src={`https://www.youtube.com/embed/eqCYw_o5lng`}
          title="trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default CurrentPlayer;
