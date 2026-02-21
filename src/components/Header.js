import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./CE logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  // Close menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) closeMenu();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // (Optional but nice) close on Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header>
      <nav className="navbar">
        <button
          type="button"
          className="hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <ul className="nav-links desktop-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <img src={Logo} alt="Logo" className="nav-logo" />
      </nav>

      {/* Overlay: click it to close */}
      <div
        className={`menu-overlay ${menuOpen ? "open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`mobile-drawer ${menuOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()} // prevents clicks inside from closing
      >
        <div className="drawer-header">
          <button
            type="button"
            className="drawer-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
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