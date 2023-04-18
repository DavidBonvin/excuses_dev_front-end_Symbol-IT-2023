import axios from "axios";

/**
 * Instance axios to the BACKEND
 *
 * @author David Cordoba
 */
const apiBackEnd = axios.create({
  baseURL: "http://127.0.0.1:8010/api",
});
export default apiBackEnd;
