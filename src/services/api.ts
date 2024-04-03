import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
});