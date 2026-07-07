"use client";

import React, { useState } from "react";
import styles from "./Services.module.css";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  themeColor: "green" | "blue";
  highlights: string[];
  parameters: {
    category: string;
    items: string[];
  }[];
}

export default function Services() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const services: ServiceItem[] = [
    {
      id: "drinking",
      title: "Drinking Water Analysis",
      image: "/images/drink.webp",
      description: "Comprehensive testing of drinking water sources (well water, tap water, packaged water) using standard analytical methods to ensure safety and compliance with drinking water standards.",
      themeColor: "green",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z" />
        </svg>
      ),
      highlights: [
        "Physical Analysis (Turbidity, pH, etc.)",
        "Chemical Analysis (Hardness, Iron, Chloride, etc.)",
        "Bacteriological Analysis (E. coli & Coliforms)"
      ],
      parameters: [
        {
          category: "Physical Parameters",
          items: ["Color", "Odour", "Taste", "pH Value", "Turbidity (NTU)", "Electrical Conductivity (EC)", "Total Dissolved Solids (TDS)"]
        },
        {
          category: "Chemical Parameters",
          items: ["Total Hardness", "Calcium", "Magnesium", "Chloride", "Fluoride", "Iron", "Nitrate", "Sulphate", "Alkalinity", "Acidity", "Residual Chlorine"]
        },
        {
          category: "Bacteriological Parameters",
          items: ["Total Coliform Count", "Escherichia coli (E. coli) Detection", "Fecal Streptococci Detection"]
        }
      ]
    },
    {
      id: "wastewater",
      title: "Waste Water Analysis",
      image: "/images/waste.webp",
      description: "Professional wastewater testing for industries, commercial complexes, housing societies, and institutions to verify compliance with pollution control standards.",
      themeColor: "blue",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h12c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v18l-4-2-4 2-4-2-4 2z" />
          <path d="M10 12h4" />
          <path d="M10 16h4" />
          <path d="M8 8h8" />
        </svg>
      ),
      highlights: [
        "Physical Parameters (TSS, TDS, pH, etc.)",
        "Chemical Parameters (COD, BOD, Oil & Grease, etc.)",
        "Biological Analysis & Pollution Monitoring"
      ],
      parameters: [
        {
          category: "Physical Parameters",
          items: ["Temperature", "Color & Odour", "pH Value", "Total Suspended Solids (TSS)", "Total Dissolved Solids (TDS)", "Settleable Solids"]
        },
        {
          category: "Chemical & Biological Parameters",
          items: ["Biochemical Oxygen Demand (BOD)", "Chemical Oxygen Demand (COD)", "Oil & Grease Content", "Ammoniacal Nitrogen", "Total Kjeldahl Nitrogen (TKN)", "Dissolved Oxygen (DO)"]
        },
        {
          category: "Pollution & Heavy Metals",
          items: ["Sulphides", "Phosphates", "Chloride & Sulphate", "Trace Heavy Metals (Lead, Cadmium, Chromium, etc.)", "Residual Chlorine"]
        }
      ]
    }
  ];

  const openModal = (id: string) => {
    setActiveModal(id);
    document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = "unset"; // Restore scrolling
  };

  const activeService = services.find(s => s.id === activeModal);

  return (
    <section id="services" className="section section-water">
      {/* Decorative Wave element on top of water section */}
      <div className={styles.waterTopEffect} />

      <div className="container">
        <div className="section-header">
          <span className="subtitle">Our Services</span>
          <h2 className="h2-heading">Water Quality Analysis Services</h2>
          <p className="body-text">
            Standard laboratory testing solutions for drinking water safety and environmental waste monitoring.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={`card ${styles.serviceCard}`}>
              {/* Service image banner */}
              <div className={styles.cardImageWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={service.title}
                  className={styles.cardImage}
                />
                <div className={styles.cardImageOverlay} />
              </div>

              <div className={styles.cardBody}>
              <div
                className={`icon-box ${
                  service.themeColor === "green" ? "icon-box-green" : "icon-box-blue"
                } ${styles.serviceIconBox}`}
              >
                {service.icon}
              </div>
              <h3 className="h3-heading" style={{ marginBottom: "1rem" }}>
                {service.title}
              </h3>
              <p className="body-text" style={{ marginBottom: "1.5rem", flexGrow: 1 }}>
                {service.description}
              </p>
              
              <ul className={styles.highlightsList}>
                {service.highlights.map((highlight, index) => (
                  <li key={index} className={styles.highlightItem}>
                    <svg
                      className={service.themeColor === "green" ? styles.checkGreen : styles.checkBlue}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openModal(service.id)}
                className={`btn ${
                  service.themeColor === "green" ? "btn-primary" : "btn-secondary"
                } ${styles.actionBtn}`}
              >
                View Testing Parameters
                <span className="btn-icon">→</span>
              </button>
              </div> {/* end cardBody */}
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup overlay */}
      {activeService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="h3-heading" style={{ color: "var(--primary-blue)" }}>
                {activeService.title} Parameters
              </h3>
              <button className="modal-close" onClick={closeModal} aria-label="Close modal">
                ✕
              </button>
            </div>
            <div className="modal-body">
              <p className="body-text" style={{ marginBottom: "1.5rem" }}>
                We test the following standard parameters using approved laboratory methods (APHA/IS):
              </p>
              <div className={styles.paramContainer}>
                {activeService.parameters.map((cat, catIndex) => (
                  <div key={catIndex} className={styles.paramCategory}>
                    <h4 className={styles.categoryTitle}>{cat.category}</h4>
                    <div className={styles.paramGrid}>
                      {cat.items.map((item, itemIndex) => (
                        <div key={itemIndex} className={styles.paramCard}>
                          <span className={styles.paramDot}></span>
                          <span className={styles.paramName}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2rem", display: "flex", justifyContent: "flex-end" }}>
                <button onClick={closeModal} className="btn btn-outline">
                  Close details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
