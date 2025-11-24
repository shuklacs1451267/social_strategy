import React from "react";
import MyImage from "../../Utils/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        
        <div className="footer-logo">
          <img src={MyImage} alt="Your Logo" />
        </div>

        <div className="footer-links">
          <h4>🏢 Office</h4>
          <p>
            243/2, Ground Floor, Old No. 7 KH No.505,<br />
            Gali No-1 Chanderlok Colony, Delhi - 110093, India
          </p>

          <p>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <a href="mailto:info@socialstech.com">info@socialstech.com</a>
          </p>

          <p><FontAwesomeIcon icon={faPhone} /> +91 1135625987</p>
          <p><FontAwesomeIcon icon={faMobileAlt} /> +91 8726361818</p>
        </div>

        <div className="footer-social">
          <a href="https://bitly.cx/ZYQr5" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>

          <a href="https://bitly.cx/ayUJz" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a href="https://bitly.cx/aLaB" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2024 Social Strategy Infotech. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
