import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './App.css';

// Pages
import Home from './pages/Home';
import Apartement from './pages/Apartement';
import Error from './pages/404';

function App() {
  return (
    <Router>
      <Route>
        <Home exact path='/' />
      </Route>
      <Route>
        <Apartement exact path='/apartment/:id' />
      </Route>
      <Route>
        <Error />
      </Route>
    </Router>
  );
}

export default App;
