import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import apartmentsData from './data/data.json';
// Pages
import Home from './pages/Home';
import Apartement from './pages/Apartment';
import About from './pages/About';
import Error from './pages/NotFound';

// css
import "./sass/style.scss";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./data/data.json")
      .then((res) => res.json())
      .then(apartmentData => {
        // console.log(datae)
        setData(apartmentData)
      })
      .catch((err) => console.log('an error occurs', err));
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home apartmentsData={data} />} />
        <Route path="/apartment/:id" element={<Apartement apartmentsData={data} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
