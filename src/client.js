import axios from "axios";
// localhost --> http://127.0.0.1:5000/
// heroku --> https://weconnect-v2-heroku.herokuapp.com/
var axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5000/"
});
export default axiosInstance;
