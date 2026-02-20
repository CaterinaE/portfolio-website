import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./CE logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav className="navbar">
        {/* Hamburger (mobile only) */}
        <button  type="button"  className="hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu" >  ☰
        </button>

        {/* Desktop links (keep same) */}
        <ul className="nav-links desktop-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Logo (right) */}
        <img src={Logo} alt="Logo" className="nav-logo" />
      </nav>

      {/* Overlay */}
      <div
        className={`menu-overlay ${menuOpen ? "open" : ""}`}
        onClick={closeMenu}
      />

      {/* Drawer */}
      <aside className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <button  type="button" className="drawer-close"  onClick={closeMenu} aria-label="Close menu">
            ✕
          </button>
         </div>

        <div className="drawer-links">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>
      </aside>
    </header>
  );
};

export default Header;
