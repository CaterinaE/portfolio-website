import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function App() {
  return (
  
    <HashRouter>


  <div className="App">
      <Header />
      <Routes>

      <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
    </HashRouter>

  );
}

export default App;
