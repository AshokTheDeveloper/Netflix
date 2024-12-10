import React from "react";
import youTubeIcon from "../../assets/youtube_icon.png";
import instagramIcon from "../../assets/instagram_icon.png";
import twitterIcon from "../../assets/twitter_icon.png";
import facebookIcon from "../../assets/facebook_icon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-icon-container">
        <img src={facebookIcon} alt="facebook_icon" />
        <img src={instagramIcon} alt="instagram_icon" />
        <img src={twitterIcon} alt="twitter_icon" />
        <img src={youTubeIcon} alt="youtube_icon" />
      </div>
      <ul>
        <li>Audio description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">
        © 2024 Netflix, Inc. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
