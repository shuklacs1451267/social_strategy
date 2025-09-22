// Footer.js
import React from "react";
import MyImage from "../../Utils/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer({ onContactClick }) {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={MyImage} alt="Your Logo" />
        </div>

        <div className="footer-links">
          <div className="office-info">
            <h4>🏢 Office</h4>
            <p className="mt-2 text-sm">
              243/2, Ground Floor, Old No. 7 KH No.505,<br />
              Gali No-1 Chanderlok Colony, Delhi - 110093, India
            </p>

            <p>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-600" />
              <a href="mailto:info@socialstech.com" className="text-blue-500 hover:underline">
                info@socialstech.com
              </a>
            </p>

            <p>
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-blue-600" />
              +91 1135625987
            </p>

            <p>
              <FontAwesomeIcon icon={faMobileAlt} className="mr-2 text-green-600" />
              +91 8726361818
            </p>
          </div>
        </div>



        <a
          href="https://bitly.cx/ZYQr5"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#1877F2]"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>

        <a
          href="https://bitly.cx/ayUJz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#E1306C]"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a
          href="https://bitly.cx/aLaB"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#0A66C2]"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>

      <div className="footer-bottom">
        &copy; 2024 Social Strategy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
