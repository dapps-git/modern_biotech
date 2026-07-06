"use client";

import React from "react";
import styles from "./License.module.css";

export default function License() {
  return (
    <section className={`section ${styles.licenseSection}`}>
      <div className={styles.waterWaveBg} />
      <div className="container">
        <div className={styles.card}>
          <div className={styles.certificateGrid}>
            {/* Stamp/Badge visual */}
            <div className={styles.stampColumn}>
              <div className={styles.seal}>
                <div className={styles.sealInner}>
                  <svg
                    className={styles.sealIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span className={styles.sealText}>APPROVED B GRADE</span>
                </div>
              </div>
            </div>

            {/* License details */}
            <div className={styles.infoColumn}>
              <span className={`badge badge-gold ${styles.badge}`}>Official Certification</span>
              <h2 className="h2-heading" style={{ color: "var(--h1-color)", marginBottom: "1rem" }}>
                Kerala State Pollution Control Board Approved Laboratory
              </h2>
              <p className="body-text" style={{ marginBottom: "1.5rem", fontSize: "1rem" }}>
                Modern Biotech Lab is officially accredited as a <strong>B Grade Laboratory</strong> by the <strong>Kerala State Pollution Control Board</strong>.
              </p>
              
              <div className={styles.detailsGrid}>
                <div className={styles.detailItem}>
                  <span className={styles.label}>License Number</span>
                  <span className={styles.value}>PCB/LAB/C11/2018-B</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Accreditation Category</span>
                  <span className={styles.value}>Drinking Water & Waste Water Analysis</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Regulatory Body</span>
                  <span className={styles.value}>Kerala State Pollution Control Board (KSPCB)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
