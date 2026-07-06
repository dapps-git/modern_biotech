"use client";

import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          {/* Column 1: Brand details */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <svg
                className={styles.logoIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z" />
              </svg>
              <div>
                <span className={styles.brandName}>MODERN BIOTECH LAB</span>
                <span className={styles.tagline}>Quality You Can Trust</span>
              </div>
            </div>
            <p className={styles.accTxt}>
              Kerala State Pollution Control Board Approved B Grade Laboratory. License No: PCB/LAB/C11/2018-B.
            </p>
            <div className={styles.socials}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul className={styles.linksList}>
              <li>
                <a href="#home" onClick={(e) => handleScrollTo(e, "#home")} className={styles.link}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, "#about")} className={styles.link}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className={styles.link}>
                  Services
                </a>
              </li>
              <li>
                <a href="#training" onClick={(e) => handleScrollTo(e, "#training")} className={styles.link}>
                  Training Programs
                </a>
              </li>
              <li>
                <a href="#why-choose-us" onClick={(e) => handleScrollTo(e, "#why-choose-us")} className={styles.link}>
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScrollTo(e, "#contact")} className={styles.link}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info details */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Our Lab</h4>
            <div className={styles.contactDetails}>
              <div className={styles.contactDetailItem}>
                <span className={styles.contactLabel}>Address</span>
                <span className={styles.contactVal}>
                  Kalpaka, Mele Pattambi,<br />
                  Palakkad – 678305,<br />
                  Kerala
                </span>
              </div>
              <div className={styles.contactDetailItem}>
                <span className={styles.contactLabel}>Phone</span>
                <span className={styles.contactVal}>
                  <a href="tel:+918848881488">+91 88488 81488</a><br />
                  <a href="tel:+918606517947">+91 86065 17947</a><br />
                  <a href="tel:+919446049350">+91 94460 49350</a>
                </span>
              </div>
              <div className={styles.contactDetailItem}>
                <span className={styles.contactLabel}>Email</span>
                <span className={styles.contactVal}>
                  <a href="mailto:modernwatertesinglab@gmail.com">modernwatertesinglab@gmail.com</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright details */}
        <div className={styles.bottomBar}>
          <p>© {currentYear} Modern Biotech Lab. All Rights Reserved.</p>
          <p className={styles.credit}>License No. PCB/LAB/C11/2018-B | Approved B Grade Lab</p>
        </div>
      </div>
    </footer>
  );
}
