import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER + "/api",
  withCredentials: true,
});

export default instance;
