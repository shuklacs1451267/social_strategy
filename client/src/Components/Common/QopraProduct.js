import React from "react";
import "../../Utils/css/QopraProduct.css";

const QopraProduct = () => {
  return (
    <section id="product" className="products-section">
      <div className="products-wrapper">

        {/* SEO — LGTS LYNX */}
        <div className="product-box seo-box">
          <span className="product-badge seo">V2.4 ACTIVE</span>

          <h2 className="seo-title">
            LGTS <span>Lynx</span>
          </h2>

          <p className="product-desc">
            Rank faster — not later. Instantly submit URLs using the official
            Google Indexing API and keep your site fresh, fast, and competitive.
          </p>

          <ul className="product-points">
            <li>⚡ Instant URL Indexing Protocol</li>
            <li>🔗 Automated Google API Integration</li>
            <li>🧠 Smart Sitemap & Crawl Optimization</li>
            <li>📊 Competitor Ranking Intelligence</li>
          </ul>

          <a
            href="https://lgts.socialstech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="product-btn seo-btn"
          >
            Try LGTS Lynx
          </a>

          <iframe
            src="https://lgts.socialstech.com"
            title="LGTS Lynx SEO"
            loading="lazy"
          />
        </div>

        {/* QOPRA */}
        <div className="product-box qopra-box">
          <span className="product-badge qopra">Messaging Platform</span>

          <h2 className="qopra-title">
            Qopra
          </h2>

          <p className="product-desc">
            One platform for Bulk WhatsApp, Bulk SMS, and automated customer
            engagement — built for speed and scale.
          </p>

          <ul className="product-points">
            <li>💬 Bulk WhatsApp (Official API)</li>
            <li>📩 High Delivery Bulk SMS</li>
            <li>🤖 Smart Automation</li>
            <li>📈 Campaign Analytics</li>
          </ul>

          <a
            href="https://qopra.socialstech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="product-btn qopra-btn"
          >
            Get Started with Qopra
          </a>

          <iframe
            src="https://qopra.socialstech.com/"
            title="Qopra Platform"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default QopraProduct;
