import axios from "axios";
import { API_URI } from "../api/config";

export const axiosAPI = axios.create({
  baseURL: API_URI,
  timeout: 6000,
});
