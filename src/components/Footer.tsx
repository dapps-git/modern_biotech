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
          {/* Column 1: Brand Info */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <svg
                className={styles.logoIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
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
              MODERN BIOTECH LAB - KSPCB Approved B Grade Laboratory specializing in accurate water analysis and professional laboratory training solutions.
            </p>
          </div>

          {/* Column 2: Services / Industries matching mockup style */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>SERVICES</h4>
            <ul className={styles.linksList}>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className={styles.link}>
                  Drinking Water Testing
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className={styles.link}>
                  Waste Water Testing
                </a>
              </li>
              <li>
                <a href="#training" onClick={(e) => handleScrollTo(e, "#training")} className={styles.link}>
                  Laboratory Training
                </a>
              </li>
              <li>
                <a href="#certifications" onClick={(e) => handleScrollTo(e, "#certifications")} className={styles.link}>
                  HACCP &amp; Food Safety
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>QUICK LINKS</h4>
            <ul className={styles.linksList}>
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
                <a href="#certifications" onClick={(e) => handleScrollTo(e, "#certifications")} className={styles.link}>
                  Certifications
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScrollTo(e, "#contact")} className={styles.link}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: GET IN TOUCH matching mockup layout exactly */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>GET IN TOUCH</h4>
            
            <div className={styles.contactDetails}>
              <div className={styles.contactDetailItem}>
                <span className={styles.contactLabel}>Office Address:</span>
                <span className={styles.contactVal}>
                  Kalpaka, Mele Pattambi, Palakkad - 678305, Kerala
                </span>
              </div>
              
              <div className={styles.contactDetailItem}>
                <span className={styles.contactLabel}>Phone &amp; WhatsApp:</span>
                <span className={`${styles.contactVal} ${styles.phoneHighlight}`}>
                  <a href="tel:+918848881488">+91 88488 81488</a><br />
                  <a href="tel:+918606517947">+91 86065 17947</a><br />
                  <a href="tel:+919446049350">+91 94460 49350</a>
                </span>
              </div>
              
              <div className={styles.contactDetailItem}>
                <span className={styles.contactLabel}>Email Inquiry:</span>
                <span className={styles.contactVal}>
                  <a href="mailto:modernwatertesinglab@gmail.com">modernwatertesinglab@gmail.com</a>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider line matching mockup */}
        <div className={styles.divider} />

        {/* Bottom copyright details centered matching mockup screenshot */}
        <div className={styles.bottomBar}>
          <p className={styles.copyrightText}>
            © {currentYear} MODERN BIOTECH LAB | Approved B Grade Laboratory.
          </p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <span className={styles.legalSeparator}>|</span>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
