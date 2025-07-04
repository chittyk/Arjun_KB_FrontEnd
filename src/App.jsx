import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./componets/Register";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        {/* Coming soon: Login and Dashboard */}
      </Routes>
    </Router>
  );
}

export default App;
