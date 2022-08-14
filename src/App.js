import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import apartmentsData from './data/data.json';
// Pages
import Home from './pages/Home';
import Apartement from './pages/Apartment';
import About from './pages/About';
import Error from './pages/NotFound';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// css
import "./sass/style.scss";

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartment/:id" element={<Apartement />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
