import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from './components/pages/About';
import Services from './components/pages/Services';
import BookAppointments from './components/pages/BookAppointments';
import SpiritualToolbox from './components/pages/SpiritualToolbox';
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book-appointments" element={<BookAppointments />} />
        <Route path="/spiritual-toolbox" element={<SpiritualToolbox />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;