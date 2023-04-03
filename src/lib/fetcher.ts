import axios from "axios";

export const fetcher = axios.create({
  baseURL: 'https://api.eurobilltracker.com/',
  withCredentials: true,
});