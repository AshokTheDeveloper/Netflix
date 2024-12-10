import React from "react";
import Logo from "../../assets/logo.png";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <img src={Logo} alt="login_logo" className="login-logo" />
      <div className="login-form-container">
        <h1>Sign In</h1>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
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
            New to Netflix
            <span>
              <Link to="/signup" className="signin-link">
                Sign Up Now
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
