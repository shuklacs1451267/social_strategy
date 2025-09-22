import React, { useState } from "react";
import axios from "axios";
import "../../Utils/css/contact.css";

export default function Contact({ show, onClose }) {
  const [form, setForm] = useState({
    // user_id: "",
    full_name: "",
    email: "",
    mobile: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/contacts`, form);
      setStatus(res.data.message || "Data submitted successfully!");
      setForm({
        // user_id: "",
        full_name: "",
        email: "",
        mobile: "",
        message: ""
      });
    } catch (err) {
      console.error(err);
      setStatus("Submission failed. Please try again.");
    }
  };

  if (!show) return null; // Hide popup if show is false

  return (
    <div className="contact-popup-overlay">
      <div className="contact-popup">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Get in Touch</h2>

        <form onSubmit={handleSubmit}>
          {/* <input
            type="number"
            name="user_id"
            placeholder="User ID"
            value={form.user_id}
            onChange={handleChange}
            required
          /> */}
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={form.full_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send</button>
        </form>

        {status && <p style={{ marginTop: "10px", textAlign: "center" }}>{status}</p>}
      </div>
    </div>
  );
}
