import axios from "axios";
import { API_URI } from "./config";

export const registerRequest = (user) =>
  axios.post(`${API_URI}/register`, user);
