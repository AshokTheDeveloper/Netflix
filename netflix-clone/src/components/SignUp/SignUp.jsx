import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signup-container">
      <img src={Logo} alt="signup_logo" className="signup-logo" />
      <div className="signup-form-container">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Remember Me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="form-switch">
          <p>
            Already have an account
            <span>
              <Link to="/login" className="signup-link">Sign In Now</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
