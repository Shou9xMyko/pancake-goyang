import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Menu from "./components/Menu/Menu";
import TestimoniCustomer from "./components/Testimoni/TestimoniCustomer";

import About from "./components/About/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimoni" element={<TestimoniCustomer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
