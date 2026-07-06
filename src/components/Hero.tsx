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
    </section>
  );
}
