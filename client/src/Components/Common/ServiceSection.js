import React from "react";

function ServiceSection({ activeService }) {
  return (
    <section className="service-container">
      <h2>Our Services</h2>

      <div className="service-grid">
        <div id="social-media" className={`service-item ${activeService === "social-media" ? "highlight" : ""}`}>
          <h3>Social Media Management</h3>
          <p>
            We help you build, grow, and manage your brand across all leading social platforms to create maximum engagement and visibility.
          </p>
          <ul>
            <li>Page Setup & Profile Optimization</li>
            <li>Creative Content Creation (Posts, Reels, Videos, Infographics)</li>
            <li>Social Media Strategy & Calendar Planning</li>
            <li>Paid Advertising (Facebook, Instagram, LinkedIn, YouTube)</li>
            <li>Community Management (Comments, DMs, Engagement)</li>
            <li>Analytics, Insights & Growth Reporting</li>
          </ul>
        </div>

        <div id="seo" className={`service-item ${activeService === "seo" ? "highlight" : ""}`}>
          <h3>SEO & Website Optimization</h3>
          <p>Enhance your online visibility, attract more visitors, and rank higher on search engines with our advanced SEO strategies.</p>
          <ul>
            <li>On-Page SEO (Meta Tags, Keyword Optimization, Internal Linking)</li>
            <li>Off-Page SEO (Backlink Building, Guest Posting)</li>
            <li>Technical SEO (Speed, Mobile Optimization, Schema)</li>
            <li>Local SEO (Google Business Profile Optimization)</li>
            <li>Content SEO (Blogs, Keyword Research, Copywriting)</li>
            <li>SEO Audit & Competitor Analysis</li>
          </ul>
        </div>

        <div id="political" className={`service-item ${activeService === "political" ? "highlight" : ""}`}>
          <h3>Political & Business Campaigning</h3>
          <p>We design powerful campaigns that connect with your target audience, influence opinions, and build trust.</p>
          <ul>
            <li>Political Social Media Campaigns</li>
            <li>Business Advertising Campaigns</li>
            <li>Campaign Identity (Logos, Slogans, Branding)</li>
            <li>Reputation & PR Management</li>
            <li>Influencer & Media Collaboration</li>
            <li>Campaign Analytics & Voter/Customer Insights</li>
          </ul>
        </div>

        <div id="bulk-marketing" className={`service-item ${activeService === "bulk-marketing" ? "highlight" : ""}`}>
          <h3>Bulk SMS & WhatsApp Marketing</h3>
          <p>Reach thousands instantly with direct and cost-effective communication tools.</p>
          <ul>
            <li>Bulk Promotional & Transactional SMS</li>
            <li>WhatsApp Business API Integration</li>
            <li>Automated WhatsApp Campaigns</li>
            <li>Personalized Messaging & Chatbots</li>
            <li>Scheduled & Targeted Campaigns</li>
            <li>Delivery Tracking & Performance Reports</li>
          </ul>
        </div>

        <div id="web-development" className={`service-item ${activeService === "web-development" ? "highlight" : ""}`}>
          <h3>Website Design & Development</h3>
          <p>We create modern, responsive, and conversion-focused websites that make your brand stand out.</p>
          <ul>
            <li>Static & Dynamic Website Development</li>
            <li>E-commerce Store Development</li>
            <li>Custom Landing Pages for Campaigns</li>
            <li>UI/UX Design & Prototyping</li>
            <li>CMS Websites (WordPress, Shopify, etc.)</li>
            <li>Website Hosting, Maintenance & Security</li>
          </ul>
        </div>

        <div id="pr" className={`service-item ${activeService === "pr" ? "highlight" : ""}`}>
          <h3>PR Services for Politicians</h3>
          <p>Specialized PR solutions to build credibility, influence voters, and maintain a strong public image.</p>
          <ul>
            <li>Political Branding & Digital Image Building</li>
            <li>Media Coverage & Press Release Management</li>
            <li>Reputation & Crisis Communication</li>
            <li>Campaign Promotions (TV, Radio, Digital)</li>
            <li>Voter Sentiment Analysis</li>
            <li>Election War Room Setup (24/7 Digital Monitoring)</li>
          </ul>
        </div>

        <div id="branding" className={`service-item ${activeService === "branding" ? "highlight" : ""}`}>
          <h3>Digital Branding Solutions</h3>
          <p>We help businesses and leaders build powerful digital identities that connect with their audiences.</p>
          <ul>
            <li>Logo & Brand Identity Design</li>
            <li>Brand Strategy & Guidelines</li>
            <li>Graphic Design (Banners, Posters, Infographics)</li>
            <li>Video Production & Motion Graphics</li>
            <li>Influencer & Collaboration Marketing</li>
            <li>Online Reputation Management (ORM)</li>
          </ul>
        </div>

        <div id="analytics" className={`service-item ${activeService === "analytics" ? "highlight" : ""}`}>
          <h3>Data Analytics</h3>
          <p>Turn raw data into actionable insights that drive smarter decisions and business growth.</p>
          <ul>
            <li>Business Performance Dashboards</li>
            <li>Market & Trend Analysis</li>
            <li>Customer Segmentation & Profiling</li>
            <li>Sales & Revenue Forecasting</li>
            <li>Predictive Analytics & Reporting</li>
            <li>Data Visualization & Insights</li>
          </ul>
        </div>

        <div id="business-analyst" className={`service-item ${activeService === "business-analyst" ? "highlight" : ""}`}>
          <h3>Business Analyst Services</h3>
          <p>We provide expert business analysis to streamline operations, optimize processes, and maximize ROI.</p>
          <ul>
            <li>Requirement Gathering & Documentation</li>
            <li>Business Process Modeling & Optimization</li>
            <li>Gap Analysis & Risk Assessment</li>
            <li>Market Research & Feasibility Studies</li>
            <li>Strategy Development & Roadmapping</li>
            <li>Performance Measurement & KPI Tracking</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
