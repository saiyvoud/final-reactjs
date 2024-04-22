import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../logo.png";
import Button from "@mui/material/Button";
import { login } from "../../api/auth.api";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();
  const sumitLogin = async () => {
    try {
      let response = await login(email,password);
      if (response.data.status == true) {
        console.log("====>Success");
        navigate("/");
      }

    } catch (error) {
      console.log(error);
    }
  };
  const onButtonClick = () => {
    // You'll update this function later...
    // Set initial error values to empty
    setEmailError("");
    setPasswordError("");

    // Check if the user has entered both fields correctly
    if ("" === email) {
      setEmailError("Please enter your email");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    if ("" === password) {
      setPasswordError("Please enter a password");
      return;
    }

    if (password.length < 5) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    }
   sumitLogin();
  };
  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div className="container">
          <img src={logo} alt="logo" />
        </div>
        <div>Login</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={"Log in"}
        />
      </div>
      <div className="row">
        New Account
        <Button
          onClick={() => {
            // alert("Hello World")
            navigate("/register");
          }}
        >
          Register
        </Button>
      </div>
    </div>
  );
};
export default Login;
