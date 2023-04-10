import axios from "axios";

export const makeRequest = axios.create({
    baseURL: "https://fiverr-sg97.onrender.com/api/",
    withCredentials: true
})