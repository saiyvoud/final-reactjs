import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { register } from "../../api/auth.api";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const sumitRegister = async () => {
    try {
      let response = await register(email,password)
      if (response.data.success === true) {
        Swal.fire({
          title: "Success",
          text: "Register Success",
          icon: "success",
        }).then(() => {
          navigate("/login");
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Faild",
        text: "Email is already ",
        icon: "error",
      });
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
    sumitRegister();
  };
  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        {/* <div className="container">
          <img src={logo} alt="logo" />
        </div> */}
        <div>Register</div>
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
          value={"Register"}
        />
      </div>
    </div>
  );
};

export default Register;
