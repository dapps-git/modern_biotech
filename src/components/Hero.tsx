"use client";

import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
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

  return (
    <section id="home" className={styles.hero}>
      {/* Dark tint overlay for image legibility */}
      <div className={styles.bgOverlay} />

      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <span className={`subtitle ${styles.overline}`}>
            KSPCB Approved B Grade Laboratory • License No: PCB/LAB/C11/2018-B
          </span>

          <h1 className={styles.title}>MODERN BIOTECH LAB</h1>

          <h2 className={styles.tagline}>
            Accurate Water Testing & Professional Laboratory Training
          </h2>

          <div className={styles.actions}>
            <a
              href="#services"
              onClick={(e) => handleScrollTo(e, "#services")}
              className="btn btn-primary"
            >
              Our Services
              <span className="btn-icon">→</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className={`btn ${styles.btnHeroOutline}`}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Wave Section Divider */}
      <div className="wave-container">
        <svg
          className="wave-svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className={styles.parallax}>
            <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use href="#gentle-wave" x="48" y="7" fill="#ffffff" />
          </g>
        </svg>
      </div>
    </section>
  );
}
