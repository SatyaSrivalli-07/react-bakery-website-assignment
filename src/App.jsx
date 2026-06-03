import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Landing from "./pages/Landing";

import Footer from "./components/Footer/Footer";
import ContactSection from "./components/ContactSection/ContactSection";
import ProductCards from "./components/ProductCards/ProductCards";

import "./App.css";

function App() {
  const [view, setView] = useState("desktop");

  return (
    <>
      <div className="device-bar">
        <button onClick={() => setView("desktop")}>laptop</button>
        <button onClick={() => setView("tablet")}>tablet</button>
        <button onClick={() => setView("mobile")}>mobile</button>
      </div>

      <div className={`page-container ${view}`}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/landing" element={<Landing />} />

          {/* Temporary routes */}
          <Route path="/ourbread" element={<ProductCards />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;