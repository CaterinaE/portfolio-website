import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './CE logo.png';  // Ensure correct path
 
const Header = () => {
  return (
   <header>
  <nav className="navbar">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>      
    <img src={Logo} alt="Logo" className="nav-logo" />
  </nav>
</header>


    
  );
  

};

export default Header;
