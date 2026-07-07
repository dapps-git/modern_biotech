"use client";

import React from "react";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">About Us</span>
          <h2>About MODERN BIOTECH LAB</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.content}>
            <p className="body-text" style={{ marginBottom: "1.25rem", fontSize: "1rem" }}>
              <strong>MODERN BIOTECH LAB</strong> is a Kerala State Pollution Control Board (KSPCB) Approved B Grade Laboratory (License No. <strong>PCB/LAB/C11/2018-B</strong>).
            </p>

            <p className="body-text" style={{ marginBottom: "1.25rem" }}>
              We specialize in accurate and reliable Water Quality Analysis, focusing exclusively on Drinking Water and Waste Water testing as per standard laboratory methods.
            </p>

            <p className="body-text" style={{ marginBottom: "1.25rem" }}>
              With experienced professionals, modern laboratory practices, and a commitment to quality, we ensure accurate results, timely reporting, and complete customer satisfaction.
            </p>

            <p className="body-text" style={{ marginBottom: "2rem" }}>
              Our laboratory also provides professional hands-on training programs in Water Analysis, Food Analysis, and Computerized Drug Designing & Bioinformatics.
            </p>

            <div className={styles.quickFeatures}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>✓</div>
                <span>Approved B-Grade Lab</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>✓</div>
                <span>Water Analysis Specialists</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>✓</div>
                <span>Standard Test Methods</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>✓</div>
                <span>Hands-on Student Projects</span>
              </div>
            </div>
          </div>

          <div className={styles.visualColumn}>
            <div className={styles.stampCard}>
              <div className={styles.stampIcon}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="h3-heading" style={{ color: "var(--primary-blue)", marginBottom: "0.5rem" }}>
                KSPCB Approved
              </h3>
              <p className="caption" style={{ textTransform: "uppercase", fontWeight: "600", color: "var(--primary-green)", letterSpacing: "0.05em" }}>
                Government Approved Testing
              </p>
              <div className={styles.divider} />
              <div className={styles.licenseDetail}>
                <span className={styles.label}>License No</span>
                <span className={styles.value}>PCB/LAB/C11/2018-B</span>
              </div>
              <div className={styles.licenseDetail}>
                <span className={styles.label}>Laboratory Grade</span>
                <span className={styles.value}>B Grade</span>
              </div>
              <div className={styles.licenseDetail}>
                <span className={styles.label}>Accrediting Body</span>
                <span className={styles.value}>Kerala State Pollution Control Board</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
