import axios from "axios";
import ApiPath from "../components/api.path";
import qs from "qs";

export const login = async function (email, password) {
  const data = qs.stringify({
    email: email,
    password: password,
  });
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  let response = await axios.post(ApiPath.login, data, config);
  if(response.data.success === true){
   localStorage.setItem("token", response.data.data.token);
   localStorage.setItem("refreshToken", response.data.data.refreshToken);
  }
  return response;
};
export const register = async function (email, password) {
  const data = qs.stringify({
    email: email,
    password: password,
  });
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  let response = await axios.post(ApiPath.register, data, config);
  
  return response;
};
