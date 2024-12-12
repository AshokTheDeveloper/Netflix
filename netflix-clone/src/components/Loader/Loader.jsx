import React from "react";
import netflixLoader from "../../assets/netflix_loading.gif";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={netflixLoader} alt="player_loader" />
    </div>
  );
};

export default Loader;
