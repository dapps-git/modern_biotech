"use client";

import React from "react";
import Image from "next/image";
import styles from "./Certifications.module.css";

/* ─── Lists ──────────────────────────────────────────────── */

const haccpList = [
  "Level 2 Award in HACCP for Food Manufacturing",
  "Level 2 Award in HACCP for Catering",
  "Level 3 Award in HACCP for Food Manufacturing",
  "Level 3 Award in HACCP for Food Catering",
  "Level 4 Award in HACCP for Management",
];

const foodSafetyList = [
  "Level 1 Award in Food Safety for Manufacturing",
  "Level 1 Award in Food Safety for Catering",
  "Level 2 Award in Food Safety for Manufacturing",
  "Level 2 Award in Food Safety for Catering",
  "Level 3 Award in Food Safety for Manufacturing",
  "Level 3 Award in Food Safety for Catering",
  "Level 4 Award in Managing Food Safety for Manufacturing",
  "Level 4 Award in Managing Food Safety for Catering",
];

const isoList = [
  "Key concepts in ISO auditing",
  "Knowledge in how to plan, conduct & manage different types of management systems audits",
  "Impart practical auditing skills to become an internal / lead auditor",
];

const fostacList = [
  "Basic Training - 4 Hrs",
  "Advanced Training - 8 Hrs",
  "Training of Trainers (ToT)",
];

/* ─── Icon ───────────────────────────────────────────────── */

const ArrowIcon = () => (
  <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" fill="var(--neutral-light-gray)" stroke="none" />
    <polyline points="10 8 14 12 10 16" stroke="#FFFFFF" />
  </svg>
);

/* ─── Component ──────────────────────────────────────────── */

export default function Certifications() {
  return (
    <section id="certifications" className={`section ${styles.certSection}`}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className="container">
        {/* ── Section Header ── */}
        <div className="section-header">
          <span className="subtitle">Internationally Recognised</span>
          <h2 className="h2-heading" style={{ color: "var(--h1-color)" }}>
            Certifications We Offer
          </h2>
          <p>
            Enhance your professional credentials with globally recognised certifications in
            food safety, HACCP, ISO auditing, and FoSTaC — delivered through structured,
            hands-on training programmes.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════
            BLOCK 1 — HIGHFIELD (UK)
        ══════════════════════════════════════════════════════ */}
        <div className={styles.providerBlock}>
          {/* Top Row: Intro + Image */}
          <div className={styles.blockLayout}>
            <div className={styles.contentCol}>
              <div className={styles.providerHeader}>
                <div className={styles.providerLogoWrap}>
                  <div className={styles.highfieldBadge}>
                    <span className={styles.hLetter}>H</span>
                  </div>
                  <div>
                    <h2 className={styles.mainTitle}>
                      Highfield HACCP Certification, Food Safety Certification
                    </h2>
                    <p className={styles.providerSub}>United Kingdom · Ofqual Regulated</p>
                  </div>
                </div>
                <span className={`badge ${styles.ukBadge}`}>🇬🇧 UK Certified</span>
              </div>

              <p className={styles.providerDesc}>
                Get certified in HACCP by Highfield (UK) for food manufacturing or catering, from
                Level 1 to Level 3. Learn how to keep food safe through Hazard Analysis and
                Critical Control Points (HACCP) principles. Our easy-to-understand courses cover
                everything you need to know to ensure food safety and follow the rules.
              </p>
              
              <p className={styles.providerDesc}>
                Secure your Highfield (UK) Food Safety certification for food manufacturing or
                catering, ranging from Level 1 to Level 3. Learn essential food safety practices
                specific to your industry, ensuring compliance and proficiency in maintaining safe
                food handling standards. Our user-friendly courses cover everything you need to
                know to uphold food safety from start to finish.
              </p>
            </div>

            {/* Right Column: Highfield Image */}
            <div className={styles.imageCol}>
              <div className={styles.imageCard}>
                <div className={styles.imageWrapperLandscape}>
                  <Image
                    src="/images/certif1.webp"
                    alt="Highfield Qualifications Certificate & Logo Preview"
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className={styles.certImage}
                    priority
                  />
                </div>
                <div className={styles.imageCaption}>
                  Highfield Qualifications Certified Training Provider
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: 2 Lists side-by-side */}
          <div className={styles.listsGrid}>
            <div className={styles.listCol}>
              <h3 className={styles.listHeader}>HACCP Certification</h3>
              <ul className={styles.customList}>
                {haccpList.map((item, index) => (
                  <li key={index} className={styles.listItem}>
                    <ArrowIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.listCol}>
              <h3 className={styles.listHeader}>Food Safety Certification</h3>
              <ul className={styles.customList}>
                {foodSafetyList.map((item, index) => (
                  <li key={index} className={styles.listItem}>
                    <ArrowIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            BLOCK 2 — ISO & FoSTaC
        ══════════════════════════════════════════════════════ */}
        <div className={styles.providerBlock}>
          {/* Top Row: Intro + Image */}
          <div className={styles.blockLayout}>
            <div className={styles.contentCol}>
              <div className={styles.providerHeader}>
                <div className={styles.providerLogoWrap}>
                  <div className={styles.isoBadge}>
                    <span className={styles.isoText}>ISO</span>
                  </div>
                  <div>
                    <h2 className={styles.mainTitle}>
                      ISO Certification &amp; Food Safety Training (FoSTaC)
                    </h2>
                    <p className={styles.providerSub}>International · FSSAI Recognised</p>
                  </div>
                </div>
                <span className={`badge ${styles.fssaiBadge}`}>FSSAI Recognised</span>
              </div>

              <p className={styles.providerDesc}>
                Get certified in ISO and FOSTAC with our easy-to-follow training. Choose between
                internal auditor or lead auditor training for ISO certification, learning how to
                check and manage quality systems. With FOSTAC certification, show you know all
                about food safety and hygiene, important for keeping food safe and following the rules.
              </p>
            </div>

            {/* Right Column: ISO/FoSTaC Image */}
            <div className={styles.imageCol}>
              <div className={styles.imageCard}>
                <div className={styles.imageWrapperLandscape}>
                  <Image
                    src="/images/certfi2.webp"
                    alt="ISO & FoSTaC Certification Logo References"
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className={styles.certImage}
                    priority
                  />
                </div>
                <div className={styles.imageCaption}>
                  ISO Internal/Lead Auditor &amp; FSSAI FoSTaC Certified
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: 2 Lists side-by-side */}
          <div className={styles.listsGrid}>
            <div className={styles.listCol}>
              <h3 className={styles.listHeader}>ISO Auditor Training Programs</h3>
              <p className={styles.subBlockOutcomeTitle}>Course Outcomes:</p>
              <ul className={styles.customList}>
                {isoList.map((item, index) => (
                  <li key={index} className={styles.listItem}>
                    <ArrowIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.listCol}>
              <h3 className={styles.listHeader}>Food Safety Training &amp; Certification (FoSTaC)</h3>
              <div className={styles.fostacSupervisorNotice}>
                FSSAI recommends that all licensed food businesses must have at least one trained
                and certified <strong>Food Safety Supervisor</strong> under FoSTaC for every 25
                food handlers in each premise.
              </div>
              <ul className={styles.customList}>
                {fostacList.map((item, index) => (
                  <li key={index} className={styles.listItem}>
                    <ArrowIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
