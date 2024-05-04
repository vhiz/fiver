import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://fiver-jnk1.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
