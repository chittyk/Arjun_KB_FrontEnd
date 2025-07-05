import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { useState, useEffect } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const syncToken = () => setToken(localStorage.getItem("token"));
    window.addEventListener("storage", syncToken); // In case multiple tabs
    return () => window.removeEventListener("storage", syncToken);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          token ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
        }
      />
      <Route
        path="/dashboard"
        element={token ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/register"
        element={token ? <Navigate to="/dashboard" /> : <Register />}
      />
      <Route
        path="/login"
        element={token ? <Navigate to="/dashboard" /> : <Login />}
      />
    </Routes>
  );
}

export default App;
