import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const token = localStorage.getItem("token")
  return (
    <Routes>
      <Route
        path="/"
        element={
          token ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
        }
      ></Route>
      <Route
        path="/dashboard"
        element={
          token ? <Navigate to = '/dashboard'></Navigate> : <Navigate to = '/login'></Navigate>
        }
      ></Route>
      <Route path="/register" element={token ? <Navigate to='/dashboard'/> : <Register /> } />
      <Route path="/login" element={token ? <Navigate to = '/dashboard' /> :<Login />} />
      {/* More routes */}
    </Routes>
  );
}

export default App;



