import { apiClient } from "./api";

export const fetchMenu = async () => {
  const response = await apiClient.get(`/menu`);
  return response.data;
};
