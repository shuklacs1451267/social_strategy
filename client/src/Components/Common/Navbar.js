import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Utils/css/App.css";
import MyImage from "../../Utils/images/logo.png";

function Navbar({ onServiceClick, onContactClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState({ services: false, career: false });

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (id, e) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close mobile menu
  };

  const handleServiceClick = (id, e) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    if (onServiceClick) onServiceClick(id);
    setIsOpen(false); // Close mobile menu
  };

  return (
    <header>
      <div className="wrapper">
        <Link to="/" className="logo">
          <img src={MyImage} alt="Logo" />
        </Link>

        {/* Hamburger Icon */}
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>

        {/* Navbar Links */}
        <nav className={`navbar ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleScroll("about", e)}>About</a>
            </li>

            {/* Services Dropdown */}
            <li
              className="dropdown"
              onMouseEnter={() => window.innerWidth > 768 && setDropdown({ ...dropdown, services: true })}
              onMouseLeave={() => window.innerWidth > 768 && setDropdown({ ...dropdown, services: false })}
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.innerWidth <= 768)
                    setDropdown((prev) => ({ ...prev, services: !prev.services }));
                }}
              >
                Services ▾
              </a>
              {dropdown.services && (
                <ul className="dropdown-menu">
                  <li><a href="#social-media" onClick={(e) => handleServiceClick("social-media", e)}>Social Media Management</a></li>
                  <li><a href="#seo" onClick={(e) => handleServiceClick("seo", e)}>SEO & Website Optimization</a></li>
                  <li><a href="#political" onClick={(e) => handleServiceClick("political", e)}>Political & Business Campaigning</a></li>
                  <li><a href="#bulk-marketing" onClick={(e) => handleServiceClick("bulk-marketing", e)}>Bulk SMS & WhatsApp Marketing</a></li>
                  <li><a href="#web-development" onClick={(e) => handleServiceClick("web-development", e)}>Website Design & Development</a></li>
                  <li><a href="#pr" onClick={(e) => handleServiceClick("pr", e)}>PR Services for Politicians</a></li>
                  <li><a href="#branding" onClick={(e) => handleServiceClick("branding", e)}>Digital Branding Solutions</a></li>
                  <li><a href="#analytics" onClick={(e) => handleServiceClick("analytics", e)}>Data Analytics</a></li>
                  <li><a href="#business-analyst" onClick={(e) => handleServiceClick("business-analyst", e)}>Business Analyst</a></li>
                </ul>
              )}
            </li>

            {/* Career Dropdown */}
            <li
              className="dropdown"
              onMouseEnter={() => window.innerWidth > 768 && setDropdown({ ...dropdown, career: true })}
              onMouseLeave={() => window.innerWidth > 768 && setDropdown({ ...dropdown, career: false })}
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.innerWidth <= 768)
                    setDropdown((prev) => ({ ...prev, career: !prev.career }));
                }}
              >
                Career
              </a>
              {/* {dropdown.career && (
                <ul className="dropdown-menu">
                  <li><Link to="/career/jobs" onClick={() => setIsOpen(false)}>Job Openings</Link></li>
                  <li><Link to="/career/internships" onClick={() => setIsOpen(false)}>Internships</Link></li>
                  <li><Link to="/career/apply" onClick={() => setIsOpen(false)}>Apply Now</Link></li>
                </ul>
              )} */}
            </li>

            {/* Contact Link */}
            <li>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                if (onContactClick) onContactClick();
                setIsOpen(false);
              }}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
