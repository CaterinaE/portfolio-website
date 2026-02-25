import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function ScrollHandler() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  return (
    <HashRouter>

      <ScrollHandler /> {/* 👈 This handles scroll */}

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