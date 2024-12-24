import React, { useState } from "react";
import { Link, Navigate, useAsyncError, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Logo from "../../assets/logo.png";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const usernameHandle = (event) => {
    setName(event.target.value);
  };
  const emailHandle = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandle = (event) => {
    setPassword(event.target.value);
  };

  const onSignupFailure = (errorMsg) => {
    setErrorMsg(errorMsg);
  };

  const signupHandle = async (event) => {
    if (!name || !email || !password) {
      setErrorMsg("Required all the fields");
      setShowError(true);
    }

    event.preventDefault();
    const user = {
      name,
      email,
      password,
    };

    const apiUrl = "https://netflix-clone-backend-lnpu.onrender.com/netflix/signup";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    try {
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      if (response.ok) {
        navigate("/login");
      } else {
        onSignupFailure(data.message);
        setShowError(true);
      }
    } catch (error) {
      console.log("Error on while signup user");
    }

    setName("");
    setEmail("");
    setPassword("");
  };

  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken !== undefined) {
    return <Navigate to="/" />;
  }

  return (
    <div className="signup-container">
      <img src={Logo} alt="signup_logo" className="signup-logo" />
      <div className="signup-form-container">
        <h1>Sign Up</h1>
        <form onSubmit={signupHandle}>
          <input
            type="text"
            placeholder="Your name"
            onChange={usernameHandle}
            value={name}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={emailHandle}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={passwordHandle}
            value={password}
          />
          <button type="submit" className="submit-button">
            Sign Up
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Remember Me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        {showError && <p className="error-msg">*{errorMsg}</p>}
        <div className="form-switch">
          <p className="signup-form-switch">
            Already have an account
            <span>
              <Link to="/login" className="signup-link">
                Sign In Now
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
