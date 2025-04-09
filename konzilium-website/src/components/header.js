// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Clickable Logo */}
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="Konzílium Logo" />
          </Link>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <span className="close-icon">&#x2715;</span> : <span className="menu-icon">&#9776;</span>}
        </div>

        {/* Side Drawer Nav */}
        <nav className={`nav-drawer ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>Domov</Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>O nás</Link>
            </li>
            <li>
              <Link to="/news" onClick={closeMenu}>Novinky</Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>Kontakt</Link>
            </li>
            <li>
              <Link to="/pricing" onClick={closeMenu}>Cenník</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
