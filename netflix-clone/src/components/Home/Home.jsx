import "./Home.css";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import HeroBanner from "../../assets/hero_banner_7.jpg";
import HeroTitle from "../../assets/title_5.png";
import PlayIcon from "../../assets/play_icon.png";
import InfoIcon from "../../assets/info_icon.png";
import TitleCards from "../TitleCards/TitleCards";
import Footer from "../Footer/Footer";
import Cookies from "js-cookie";
import Loader from "../Loader/Loader";

const Home = () => {
  const navigate = useNavigate();
  const jwtToken = Cookies.get("jwt_token");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (jwtToken !== undefined) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [jwtToken]);

  if (jwtToken === undefined) {
    return <Navigate to="/login" />;
  }

  const renderHomePage = () => (
    <div className="home-bg-container">
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
            <button
              className="hero-button"
              onClick={() => navigate("/play-now")}
            >
              <img src={PlayIcon} alt="play_icon" />
              Play
            </button>
            <button className="hero-button hero-dark-button">
              <img src={InfoIcon} alt="play_icon" />
              More Info
            </button>
          </div>
          <div className="title-cards">
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
    </div>
  );

  const renderLoadingView = () => <Loader />;

  return <>{isLoading ? renderLoadingView() : renderHomePage()}</>;
};

export default Home;
