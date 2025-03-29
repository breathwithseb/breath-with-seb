import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from './components/pages/About';
import Services from './components/pages/Services';
import BookAppointments from './components/pages/BookAppointments';
import SpiritualToolbox from './components/pages/SpiritualToolbox';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <main style={{ flex: "1" }}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book-appointments" element={<BookAppointments />} />
            <Route path="/spiritual-toolbox" element={<SpiritualToolbox />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};


export default App;