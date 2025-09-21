// Footer.js
import React from "react";
import MyImage from "../../Utils/images/logo.png";

function Footer({ onContactClick }) {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={MyImage} alt="Your Logo" />
        </div>

        <div className="footer-links">
  <div className="office-info">
    <h4>Office</h4>
    <p className="mt-2 text-sm">
      243/2, Ground Floor, Old No. 7 KH No.505,<br />
      Gali No-1 Chanderlok Colony,<br />
      Delhi -110093, India
    </p>
  </div>
</div>


        <div className="footer-social flex gap-4">
          <a
            href="https://bitly.cx/ZYQr5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            Facebook
          </a>
          <a
            href="https://bitly.cx/ayUJz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            Instagram
          </a>
          <a
            href="https//bitly.cx/aLaB"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2024 Social Strategy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
