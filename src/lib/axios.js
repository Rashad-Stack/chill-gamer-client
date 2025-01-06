import axios from "axios";
import { redirect } from "react-router";

const api = axios.create({
  baseURL: "https://b10-a10-server-side-rashad-stack.vercel.app/api/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      redirect("/login");
    }
    return Promise.reject(error);
  }
);

export default api;
