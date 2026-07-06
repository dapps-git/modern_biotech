"use client";

import React, { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Drinking Water Testing",
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
      await new Promise((r) => setTimeout(r, 1200));
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "Drinking Water Testing", message: "" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className={styles.layoutGrid}>
          
          {/* Left Column: Contact details matching the mockup */}
          <div className={styles.infoCol}>
            <h2 className={styles.sectionHeading}>Contact Us</h2>
            
            <div className={styles.contactList}>
              {/* Item 1: Office Address */}
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className={styles.itemText}>
                  <h4 className={styles.itemTitle}>Office Address</h4>
                  <p className={styles.itemDetail}>
                    Kalpaka, Mele Pattambi,<br />
                    Palakkad – 678305, Kerala
                  </p>
                </div>
              </div>

              {/* Item 2: Phone & WhatsApp */}
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className={styles.itemText}>
                  <h4 className={styles.itemTitle}>Phone &amp; WhatsApp</h4>
                  <p className={`${styles.itemDetail} ${styles.highlightText}`}>
                    <a href="tel:+918848881488">+91 88488 81488</a><br />
                    <a href="tel:+918606517947">+91 86065 17947</a><br />
                    <a href="tel:+919446049350">+91 94460 49350</a>
                  </p>
                </div>
              </div>

              {/* Item 3: Email Inquiry */}
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className={styles.itemText}>
                  <h4 className={styles.itemTitle}>Email Inquiry</h4>
                  <p className={styles.itemDetail}>
                    <a href="mailto:modernwatertesinglab@gmail.com">modernwatertesinglab@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* SEND INQUIRY flat button matching mockup */}
            <button 
              onClick={() => {
                setIsModalOpen(true);
                setIsSubmitted(false);
              }} 
              className={styles.sendInquiryBtn}
            >
              SEND INQUIRY
            </button>
          </div>

          {/* Right Column: Google Maps embed matching mockup */}
          <div className={styles.mapCol}>
            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.3690558349217!2d76.19075877481848!3d10.805511789345061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7c50e08bbf05b%3A0xf9d984140f3edbfd!2sModern%20water%20testing%20laboratory!5e1!3m2!1sen!2sin!4v1783323238567!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Modern Water Testing Laboratory Location Map"
                className={styles.mapIframe}
              />
            </div>
          </div>
          
        </div>
      </div>

      {/* Inquiry Form Modal Overlay */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="h3-heading" style={{ color: "var(--primary-blue)" }}>Send Inquiry</h3>
              <button className="modal-close" onClick={() => setIsModalOpen(false)} aria-label="Close modal">✕</button>
            </div>
            
            <div className="modal-body">
              {isSubmitted ? (
                <div className={styles.successBlock}>
                  <span className={styles.successIcon}>✓</span>
                  <p className={styles.successText}>
                    Inquiry sent successfully! We will get back to you shortly.
                  </p>
                  <button onClick={() => setIsModalOpen(false)} className="btn btn-outline" style={{ marginTop: "1rem" }}>
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.modalForm}>
                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" id="name" required placeholder="Your name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="phone">Phone</label>
                      <input type="tel" name="phone" id="phone" required placeholder="Phone number" value={formData.phone} onChange={handleChange} />
                    </div>
                  </div>
                  
                  <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required placeholder="you@example.com" value={formData.email} onChange={handleChange} />
                  </div>
                  
                  <div className={styles.field}>
                    <label htmlFor="subject">I am interested in</label>
                    <select name="subject" id="subject" value={formData.subject} onChange={handleChange}>
                      <option value="Drinking Water Testing">Drinking Water Testing</option>
                      <option value="Waste Water Testing">Waste Water Testing</option>
                      <option value="Water Analysis Training">Water Analysis Training</option>
                      <option value="Food Analysis Training">Food Analysis Training</option>
                      <option value="Bioinformatics Training">Bioinformatics &amp; Drug Designing</option>
                      <option value="Student Project / Internship">Laboratory Internship</option>
                    </select>
                  </div>
                  
                  <div className={styles.field}>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" required placeholder="Describe your query..." value={formData.message} onChange={handleChange} rows={4} />
                  </div>
                  
                  <button type="submit" disabled={isLoading} className={styles.submitInquiryBtn}>
                    {isLoading ? "SENDING..." : "SUBMIT INQUIRY"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
