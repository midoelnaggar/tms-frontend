import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const apiUrls = {
  users: {
    register: "/users/register",
    login: "/users/login",
  },
  tasks: {
    all: "/tasks/",
    taskById: (id: string) => `/tasks/${id}`,
  }
}