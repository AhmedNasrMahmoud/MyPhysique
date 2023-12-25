import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home.js';
import Contact from './Components/Home/Contact.js';
import About from './Components/Home/About.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes for additional pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


