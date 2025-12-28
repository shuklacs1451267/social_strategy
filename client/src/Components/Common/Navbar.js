import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Utils/images/logo.png';
import '../../Utils/css/App.css';

function Navbar({ onServiceClick, onContactClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleScroll = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // close menu on mobile after click
  };

  const handleServiceClick = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    if (onServiceClick) onServiceClick(id);
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header>
      <div className="wrapper">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>

        <div className="menu-toggle" onClick={toggleMenu}>☰</div>

        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><a href="#about" onClick={(e) => handleScroll('about', e)}>About</a></li>
            <li><a href="#product" onClick={(e) => handleScroll('product', e)}>Our Product</a></li>
            <li><a href="#client-container" onClick={(e) => handleScroll('client-container', e)}>Our Client</a></li>

            <li className="dropdown">
              <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown(); }}>Services ▾</a>
              <ul className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
                <li><a href="#social-media" onClick={(e) => handleServiceClick('social-media', e)}>Social Media Management</a></li>
                <li><a href="#seo" onClick={(e) => handleServiceClick('seo', e)}>SEO & Website Optimization</a></li>
                <li><a href="#political" onClick={(e) => handleServiceClick('political', e)}>Political & Business Campaigning</a></li>
                <li><a href="#bulk-marketing" onClick={(e) => handleServiceClick('bulk-marketing', e)}>Bulk SMS & WhatsApp Marketing</a></li>
                <li><a href="#web-development" onClick={(e) => handleServiceClick('web-development', e)}>Website Design & Development</a></li>
                <li><a href="#pr" onClick={(e) => handleServiceClick('pr', e)}>PR Services for Politicians</a></li>
                <li><a href="#branding" onClick={(e) => handleServiceClick('branding', e)}>Digital Branding Solutions</a></li>
                <li><a href="#analytics" onClick={(e) => handleServiceClick('analytics', e)}>Data Analytics</a></li>
                <li><a href="#business-analyst" onClick={(e) => handleServiceClick('business-analyst', e)}>Business Analyst</a></li>
              </ul>
            </li>

            <li><a href="#" onClick={(e) => { e.preventDefault(); if(onContactClick) onContactClick(); setMenuOpen(false); }}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
