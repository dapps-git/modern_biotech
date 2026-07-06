"use client";

import React from "react";
import Image from "next/image";
import styles from "./Laboratory.module.css";

export default function Laboratory() {
  const capabilities = [
    { title: "Drinking Water Analysis", desc: "Chemical and bacteriological testing using standard APHA methods." },
    { title: "Waste Water Analysis", desc: "Pollution parameter testing for environmental regulatory compliance." },
    { title: "Laboratory Training", desc: "Hands-on academic student projects and vocational internships." },
    { title: "Food Quality Analysis", desc: "Testing nutritional, contamination, and safety metrics." },
    { title: "Bioinformatics Training", desc: "Advanced computer-based drug discovery and genomic modeling." }
  ];

  const equipmentList = [
    "UV-Visible Spectrophotometer",
    "Digital Nephelo-Turbidimeter",
    "Precision pH & Conductivity Meters",
    "BOD & COD Incubators",
    "Autoclave & Hot Air Sterilization Ovens",
    "Laminar Air Flow Clean Bench"
  ];

  return (
    <section id="laboratory" className="section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Our Laboratory</span>
          <h2 className="h2-heading">Advanced Analytical Facilities</h2>
          <p className="body-text">
            Modern biotech laboratory equipped with precision analytical techniques and instruments for scientific testing.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left: Capability list and equipment lists */}
          <div className={styles.detailsColumn}>
            <h3 className="h3-heading" style={{ marginBottom: "1.25rem", color: "var(--primary-blue)" }}>
              Core Testing & Training Capabilities
            </h3>
            <p className="body-text" style={{ marginBottom: "1.75rem" }}>
              Our facility is designed to execute accurate chemical, physical, and biological analysis following standard international protocols (APHA/IS codes) with full documentation.
            </p>

            <div className={styles.capsList}>
              {capabilities.map((cap, idx) => (
                <div key={idx} className={styles.capItem}>
                  <span className={styles.checkMark}>✔</span>
                  <div>
                    <h4 className={styles.capTitle}>{cap.title}</h4>
                    <p className="body-text" style={{ fontSize: "0.8rem", marginTop: "0.15rem" }}>{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.equipmentCard}>
              <h4 className={styles.eqHeading}>Core Laboratory Instrumentation</h4>
              <div className={styles.eqGrid}>
                {equipmentList.map((item, idx) => (
                  <div key={idx} className={styles.eqItem}>
                    <span className={styles.eqDot}></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Laboratory Images */}
          <div className={styles.visualColumn}>
            <div className={styles.imageCard}>
              <div className={styles.imageOverlay} />
              <Image
                src="/images/lab_testing_detail.png"
                alt="Modern Biotech Lab - Advanced Scientific Water Testing Equipment"
                width={600}
                height={500}
                className={styles.image}
              />
              <div className={styles.imageBadge}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                APHA / IS Standard Testing Methods
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
