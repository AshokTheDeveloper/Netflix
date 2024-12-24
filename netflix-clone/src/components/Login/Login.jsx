import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Cookies from "js-cookie";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const emailHandle = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandle = (event) => {
    setPassword(event.target.value);
  };

  const onLoginSuccess = (jwtToken) => {
    Cookies.set("jwt_token", jwtToken, { expires: 7 });
    navigate("/");
  };

  const onLoginFailure = (errorMsg) => {
    setErrorMsg(errorMsg);
  };

  const signupHandle = async (event) => {
    if (!email || !password) {
      onLoginFailure("Required all the fields");
      setShowError(true);
    }

    event.preventDefault();
    const user = {
      email,
      password,
    };

    const apiUrl = "https://netflix-clone-backend-lnpu.onrender.com/netflix/signin";
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
        onLoginSuccess(data.jwt_token);
      } else {
        setShowError(true);
        onLoginFailure(data.message);
      }
    } catch (error) {
      console.log("Error on while signup user");
    }

    setEmail("");
    setPassword("");
  };

  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken !== undefined) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-container">
      <img src={Logo} alt="login_logo" className="login-logo" />
      <div className="login-form-container">
        <h1>Sign In</h1>
        <form onSubmit={signupHandle}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={emailHandle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={passwordHandle}
          />
          <button type="submit">Sign In</button>
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
