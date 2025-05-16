import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8080/v1/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});
