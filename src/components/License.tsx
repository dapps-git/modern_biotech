"use client";

import React from "react";
import styles from "./License.module.css";

export default function License() {
  return (
    <section className={`section ${styles.licenseSection}`} id="license">
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
              <h2 className="h2-heading" style={{ color: "var(--h1-color)", marginBottom: "0" }}>
                Kerala State Pollution Control Board Approved Laboratory
              </h2>
              <p className={styles.description}>
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

        {/* PDF Brochure Download Card below KSPCB Box */}
        <div className={styles.brochureBox}>
          <div className={styles.brochureInfo}>
            <div className={styles.pdfIconWrapper}>
              <svg
                className={styles.pdfFileIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M9 15h6" />
                <path d="M9 11h6" />
              </svg>
              <span className={styles.pdfBadge}>PDF</span>
            </div>
            <div className={styles.brochureText}>
              <h3 className={styles.brochureTitle}>Modern Biotech Lab Official Brochure</h3>
              <p className={styles.brochureDescription}>
                Download our official brochure for complete details on water testing parameters, KSPCB certification, and laboratory services.
              </p>
            </div>
          </div>
          
          <div className={styles.brochureAction}>
            <a
              href="/images/MODERN%20BIOTECH%20BROSHURE%20-%201.pdf"
              download="MODERN_BIOTECH_BROCHURE.pdf"
              className={styles.downloadBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className={styles.downloadIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download Brochure</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
