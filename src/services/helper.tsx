import axios, { InternalAxiosRequestConfig } from "axios";
import { isLoggedIn } from "../auth";

export const BASE_URL = "http://localhost:8080";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});

export const getToken = () => {
  if (isLoggedIn()) {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      return parsedData.token;
    }
  } else {
    return null;
  }
};

export const getEmail = () => {
  if (isLoggedIn()) {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      return parsedData.userDto.email;
    }
  } else {
    return null;
  }
};
//for calling the api that need jwt authentication
export const privateAxios = axios.create({
  baseURL: BASE_URL,
});

privateAxios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (isLoggedIn()) {
      const token = getToken();
      console.log(token);
      if (token) {
        // Set the Authorization header with the token
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);
