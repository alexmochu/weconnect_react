import axios from "axios";

var axiosInstance = axios.create({
  baseURL: "https://weconnect-v2-heroku.herokuapp.com/"
});
export default axiosInstance;
