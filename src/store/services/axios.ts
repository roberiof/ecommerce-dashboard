import axios from "axios";

export const baseURL = "https://628bf017667aea3a3e387e51.mockapi.io/";

export const axiosInstance = (token: string) =>
  axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Token ${token}`
    }
  });
