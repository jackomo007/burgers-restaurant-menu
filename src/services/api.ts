import axios from "axios";

const API_BASE_URL = "/challenge";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
});
