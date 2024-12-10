import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../Header/Header";
import HeroBanner from "../../assets/hero_banner.jpg";
import HeroTitle from "../../assets/hero_title.png";
import PlayIcon from "../../assets/play_icon.png";
import InfoIcon from "../../assets/info_icon.png";
import TitleCards from "../TitleCards/TitleCards";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="hero">
        <img src={HeroBanner} alt="hero_banner" className="hero-banner-image" />
        <div className="hero-caption">
          <img src={HeroTitle} alt="hero_title" className="caption-image" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-buttons">
            <button className="hero-button">
              <img src={PlayIcon} alt="play_icon" />
              Play
            </button>
            <button className="hero-button hero-dark-button">
              <img src={InfoIcon} alt="play_icon" />
              More Info
            </button>
          </div>
          <div>
            <TitleCards />
          </div>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Up Coming"} category={"upcoming"} />
        <TitleCards title={"Top pics for you"} category={"now_playing"} />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
