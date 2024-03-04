import { axiosAPI } from "../utils/axiosInstance";

export const registerRequest = (user) => axiosAPI.post("/registe", user);
