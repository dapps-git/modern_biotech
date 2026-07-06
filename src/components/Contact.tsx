"use client";

import React, { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Drinking Water Analysis",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1400));
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "Drinking Water Analysis", message: "" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Contact Us</span>
          <h2 className="h2-heading">Get in Touch</h2>
          <p className="body-text">Reach out for water testing, training slots, or any lab inquiry.</p>
        </div>

        {/* Single unified box */}
        <div className={styles.unifiedBox}>

          {/* Left: Map */}
          <div className={styles.mapSide}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.3690558349217!2d76.19075877481848!3d10.805511789345061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7c50e08bbf05b%3A0xf9d984140f3edbfd!2sModern%20water%20testing%20laboratory!5e1!3m2!1sen!2sin!4v1783323238567!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Modern Water Testing Laboratory Location Map"
              className={styles.mapIframe}
            />

            {/* Contact details inline under map */}
            <div className={styles.contactMeta}>
              <div className={styles.metaItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>
                  <a href="tel:+918848881488">+91 88488 81488</a>{" · "}
                  <a href="tel:+918606517947">+91 86065 17947</a>{" · "}
                  <a href="tel:+919446049350">+91 94460 49350</a>
                </span>
              </div>
              <div className={styles.metaItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:modernwatertesinglab@gmail.com">modernwatertesinglab@gmail.com</a>
              </div>
              <div className={styles.metaItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Kalpaka, Mele Pattambi, Palakkad – 678305, Kerala</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={styles.formSide}>
            <p className={styles.formTitle}>Send a Quick Inquiry</p>

            {isSubmitted ? (
              <div className={styles.successBlock}>
                <span className={styles.successIcon}>✓</span>
                <p className={styles.successText}>Message sent! We will get back to you shortly.</p>
                <button onClick={() => setIsSubmitted(false)} className={`btn btn-outline ${styles.smallBtn}`}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" required placeholder="Your name" value={formData.name} onChange={handleChange} />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" name="phone" id="phone" required placeholder="9876543210" value={formData.phone} onChange={handleChange} />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" required placeholder="you@example.com" value={formData.email} onChange={handleChange} />
                </div>

                <div className={styles.field}>
                  <label htmlFor="subject">I am interested in</label>
                  <select name="subject" id="subject" value={formData.subject} onChange={handleChange}>
                    <option value="Drinking Water Analysis">Drinking Water Testing</option>
                    <option value="Waste Water Analysis">Waste Water Testing</option>
                    <option value="Water Analysis Training">Water Analysis Training</option>
                    <option value="Food Analysis Training">Food Analysis Training</option>
                    <option value="Bioinformatics Training">Bioinformatics &amp; Drug Designing</option>
                    <option value="Student Project / Internship">Laboratory Internship</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" required placeholder="Describe your query…" value={formData.message} onChange={handleChange} rows={4} />
                </div>

                <button type="submit" disabled={isLoading} className={`btn btn-primary ${styles.submitBtn}`}>
                  {isLoading ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
