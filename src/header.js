//Header.js


import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
      <div className="header-info">
          Consulting WP<span className="header-bullet"></span>
          New York<span className="header-bullet"></span>
          Services
        </div>
        <nav className="header-nav">
          <a href="/services" className="header-link">
            Services
            <div className="header-underline"></div>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
