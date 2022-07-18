import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';

// Pages
import Home from './pages/Home';
import Apartement from './pages/Apartment';
import About from './pages/Apartment';
import Error from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartment" element={<Apartement />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
