import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Patients from "./Pages/Patients.jsx";
import About from "./pages/About";
import "./App.css";
 
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/patients">Patients</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;