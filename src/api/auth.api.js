import axios from "axios";
import ApiPath from "../components/api.path";
import { toast } from "react-toastify";
export const login = async (email, password) => {
//   const notify = () => toast("Login Success");
//   const notifyError = () => toast("Login Faild");
  let _responseData;
  axios
    .post(ApiPath.login, {
      email: email,
      password: password,
    })
    .then(function (res) {
      _responseData = res;
      console.log(res);
     // notify();
    })
    .catch(function (err) {
      //notifyError();
      console.log(err);
    });
  return _responseData;
};
