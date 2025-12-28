import React from "react";
import "../../Utils/css/QopraProduct.css";

const QopraProduct = () => {
  return (
    <section id="product" className="qopra-section">
      <div className="qopra-wrapper">
        <span className="qopra-badge">Our Messaging Platform</span>

        <h2 className="qopra-title">
          One Platform. <span>All Messaging.</span>
        </h2>

        <p className="qopra-subtitle">
          Qopra helps businesses communicate faster and smarter using
          Bulk WhatsApp, Bulk SMS, and automated customer engagement tools —
          all from one powerful dashboard.
        </p>

        <div className="qopra-cards">
          <div className="qopra-card">
            <h4>Bulk WhatsApp</h4>
            <p>
              Send promotional, transactional & interactive WhatsApp messages
              with real-time delivery and official API compliance.
            </p>
          </div>

          <div className="qopra-card">
            <h4>Bulk SMS</h4>
            <p>
              Reach thousands instantly with high delivery SMS for OTPs,
              alerts, reminders, and marketing campaigns.
            </p>
          </div>

          <div className="qopra-card">
            <h4>Smart Automation</h4>
            <p>
              Automate replies, schedule campaigns, personalize messages,
              and stay connected with customers 24/7.
            </p>
          </div>
        </div>

        <a
          href="https://qopra.socialstech.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="qopra-btn"
        >
          Get Started with Qopra
        </a>
      </div>
    </section>
  );
};

export default QopraProduct;
