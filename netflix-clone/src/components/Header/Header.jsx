import React, { useEffect, useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import profileImage from "../../assets/profile_img.png";
import caratIcon from "../../assets/caret_icon.svg";
import "./Header.css";

const Header = () => {
  const headerRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY >= 80) {
          headerRef.current.classList.add("header-dark");
        } else {
          headerRef.current.classList.remove("header-dark");
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  const signoutHandle = () => {
    Cookies.remove("jwt_token");
    navigate("/login");
  };

  return (
    <>
      <div className="header-container" ref={headerRef}>
        <div className="header-logo-container">
          <Link to="/" className="header-links">
            <img src={logo} alt="Netflix Logo" className="netflix-logo" />
          </Link>
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        <div className="header-right-section">
          <img src={search} alt="search_icon" className="icons" />
          <p>children</p>
          <img src={bellIcon} alt="bell_icon" className="icons" />
          <div className="profile-container">
            <img
              src={profileImage}
              alt="profile_image"
              className="profile-icon"
            />
            <img src={caratIcon} alt="caret_image" />
            <div className="dropdown">
              <button type="button" onClick={signoutHandle}>
                Sign out of netflix
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
