import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// data
import apartmentsData from './data/data.json';
// Pages
import Home from './pages/Home';
import Apartement from './pages/Apartment';
import About from './pages/About';
import Error from './pages/NotFound';

// css
import "./css/style.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home apartmentsData={apartmentsData} />} />
        <Route path="/apartment/:id" element={<Apartement apartmentsData={apartmentsData} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
