import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../logo.png";
import Button from "@mui/material/Button";
import { login } from "../../api/auth.api";
import SecurityIcon from '@mui/icons-material/Security';
import { TEInput, TERipple } from "tw-elements-react";
import Swal from "sweetalert2";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const sumitLogin = async () => {
    try {
      let response = await login(email, password);
      if (response.data.success === true) {
        Swal.fire({
          title: "Success",
          text: "Login Success",
          icon: "success",
        }).then(() => {
          navigate("/");
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Faild",
        text: "email and password not found",
        icon: "error",
      });
    }
  };
  const onButtonClick = () => {
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
    <section className="h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src={logo}
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        Sousaka Collect
                      </h4>
                    </div>

                    <form>
                      <p className="mb-4">Please login to your account</p>
                      {/* <!--Username input--> */}
                      <TEInput
                        type="text"
                        label="Username"
                        className="mb-4"
                      ></TEInput>

                      {/* <!--Password input--> */}
                      <TEInput
                        type="password"
                        label="Password"
                        className="mb-4"
                      ></TEInput>

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <TERipple rippleColor="light" className="w-full">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="button"
                            style={{
                             
                              background: "#00008b"
                            }}
                          >
                            Log in
                          </button>
                        </TERipple>

                        {/* <!--Forgot password link--> */}
                        <a href="#!">Forgot password?</a>
                      </div>

                      {/* <!--Register button--> */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <TERipple rippleColor="light">
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          >
                            Register
                          </button>
                        </TERipple>
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                {/* <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div> */}
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <div className={"mainContainer"}>
    //   <div className={"titleContainer"}>
    //     <div className="container">
    //       <img src={logo} alt="logo" />
    //     </div>
    //     <div>Login</div>
    //   </div>
    //   <br />
    //   <div className={"inputContainer"}>
    //     <input
    //       value={email}
    //       placeholder="Enter your email here"
    //       onChange={(ev) => setEmail(ev.target.value)}
    //       className={"inputBox"}
    //     />
    //     <label className="errorLabel">{emailError}</label>
    //   </div>
    //   <br />
    //   <div className={"inputContainer"}>
    //   <div className="relative">
    //   <input
          
    //       value={password}
    //       placeholder="Enter your password here"
    //       onChange={(ev) => setPassword(ev.target.value)}
    //       className={"inputBox"}
    //     />
    //     <div className="absolute top-2">
    //     <SecurityIcon></SecurityIcon>
    //     </div>
       
    //   </div>
       
    //     <label className="errorLabel">{passwordError}</label>
    //   </div>
    //   <br />
     
    //   <div className={"inputContainer"}>
    //     <input
    //       className={"inputButton"}
    //       type="button"
    //       onClick={onButtonClick}
    //       value={"Log in"}
    //     />
      
    //   </div>
    //   <div className="row">
    //     New Account
    //     <Button
    //       onClick={() => {
    //         // alert("Hello World")
    //         navigate("/register");
    //       }}
    //     >
    //       Register
    //     </Button>
    //   </div>
    // </div>
  );
};
export default Login;
