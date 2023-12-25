import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import './index.css';
import Home from './Components/Home/Home.js';
import Contact from './Components/Home/Contact.js';
import About from './Components/Home/About.js';
import Register from './Components/Login-And-Register/Register.js';
import Login from './Components/Login-And-Register/Login.js';
import Navbar from './Components/Navbar/Nav.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <div className="pt-16">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
