import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/AdiminAccess",
});

api.interceptors.request.use((config) => {
  // Skip token for public routes
  const publicRoutes = ["/register", "/verify", "/login", "/forgot"];
  const isPublic = publicRoutes.some((route) =>
    config.url.includes(route)
  );

  if (!isPublic) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.xtoken = `Bearer ${token}`;
    }
  }

  return config;
});

export default api;
