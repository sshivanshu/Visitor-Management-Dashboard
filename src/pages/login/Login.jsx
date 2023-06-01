import "./login.scss";
import "./login.css";
import { useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  document.body.style.backgroundImage = "url('bg.svg')";

  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const onchangehandleusr = (e) => {
    setusername(e.target.value);
  };

  const onchangehandlepass = (e) => {
    setpassword(e.target.value);
  };

  const handlesubmit = (e) => {
    axios
      .post("https://hms-server-rahulsharma4329.koyeb.app/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.success === true) {
          document.body.attributeStyleMap.clear();
          localStorage.setItem("user", response.data.data[0]);
          if (response.data.data[0].role === "host") {
            navigate("/", { state: { username: username } });
          } else if (response.data.data[0].role === "security") {
            navigate("/securitydashboard", { state: { username: username } });
          }
        }
      });
  };
  return (
    <div className="App">
      <div className="credcontainer">
        <div className="leftcolumn">
          <div className="label">Login In</div>
          <input
            type="text"
            name="username"
            id="usernamea"
            placeholder="Email"
            value={username}
            onChange={onchangehandleusr}
          />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={onchangehandlepass}
          />
          <div className="forgotpass">
            <a href="/forgotpass"> Forgot your password ?</a>
          </div>
          <div className="loginbutton">
            <button type="submit" onClick={handlesubmit}>
              {" "}
              Log In
            </button>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="register">
            <div className="regimg">
              <img src="registerimg.svg" alt="" />
            </div>
            <button
              onClick={(e) => {
                navigate("/register", { state: { role: "admin" } });
              }}
            >
              {" "}
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
