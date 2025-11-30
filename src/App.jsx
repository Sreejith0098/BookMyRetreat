import { Route, Routes } from "react-router-dom";
import Landing from "../src/pages/Landing.jsx";
import "./App.css";
import Login from "./pages/Login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </>
  );
}

export default App;
