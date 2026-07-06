"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Training.module.css";

interface TrainingProgram {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  icon: React.ReactNode;
  themeColor: "green" | "blue";
  syllabus: string[];
}

export default function Training() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const programs: TrainingProgram[] = [
    {
      id: "water",
      title: "Water Analysis Training",
      subTitle: "Practical Laboratory Techniques",
      description: "Learn essential laboratory protocols for analyzing physical, chemical, and bacteriological qualities of water using standard testing methodologies.",
      themeColor: "green",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z" />
        </svg>
      ),
      syllabus: [
        "Drinking Water & Waste Water Analysis",
        "Physical Parameters Testing (pH, Turbidity, Conductivity, TDS)",
        "Chemical Testing (Hardness, Chlorides, Iron, Fluorides)",
        "Bacteriological Protocols (Coliforms count, E. coli detection)",
        "Standard laboratory methods (APHA/IS codes)",
        "Practical calibration of analytical lab instruments"
      ]
    },
    {
      id: "food",
      title: "Food Analysis Training",
      subTitle: "Hands-on Food Quality Testing",
      description: "Practical exposure in testing food parameters to determine quality standards, nutritional compliance, and contamination detection.",
      themeColor: "blue",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      syllabus: [
        "Food Quality & Safety Analysis",
        "Standard sample preparation & dilution techniques",
        "Chemical analysis of food ingredients",
        "Standard testing methods (FSSAI/AOAC guidelines)",
        "Laboratory health, hygiene & safety procedures"
      ]
    },
    {
      id: "bioinformatics",
      title: "Bioinformatics & Drug Designing",
      subTitle: "Software-based Computations",
      description: "Advanced training in structural biology software, bioinformatics data, and computer-aided drug discovery algorithms.",
      themeColor: "green",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
          <line x1="16" y1="8" x2="2" y2="22" />
          <line x1="17.5" y1="15" x2="9" y2="15" />
        </svg>
      ),
      syllabus: [
        "Introduction to Bioinformatics & database mining",
        "Computer-aided drug designing pipelines",
        "Molecular docking studies & ligand binding evaluation",
        "ADMET (Absorption, Distribution, Metabolism, Excretion, Toxicity) prediction",
        "Hands-on training with advanced molecular modeling software tools"
      ]
    }
  ];

  const openModal = (id: string) => {
    setActiveModal(id);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = "unset";
  };

  const activeProgram = programs.find(p => p.id === activeModal);

  return (
    <section id="training" className="section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Training Programs</span>
          <h2 className="h2-heading">Professional Laboratory Training</h2>
          <p className="body-text">
            Specialized curriculum designed to bridge academic knowledge and industry-level laboratory expertise.
          </p>
        </div>

        {/* 3 boxes in one row on desktop */}
        <div className={styles.programsGrid}>
          {programs.map((prog) => (
            <div key={prog.id} className={`card ${styles.programCard}`}>
              <div className={styles.programHeader}>
                <div
                  className={`${styles.programIcon} ${
                    prog.themeColor === "green" ? styles.bgGreen : styles.bgBlue
                  }`}
                >
                  {prog.icon}
                </div>
                <div>
                  <h3 className="h3-heading" style={{ fontSize: "0.95rem", fontWeight: 600 }}>{prog.title}</h3>
                  <span className={styles.programSub}>{prog.subTitle}</span>
                </div>
              </div>
              <p className="body-text" style={{ margin: "1rem 0 1.25rem 0", fontSize: "0.82rem", flexGrow: 1 }}>
                {prog.description}
              </p>
              <button
                onClick={() => openModal(prog.id)}
                className={`btn btn-outline ${styles.viewBtn}`}
              >
                View Syllabus
              </button>
            </div>
          ))}
        </div>

        {/* Internship Showcase Card underneath */}
        <div className={styles.internShowcaseRow}>
          <div className={styles.internCard}>
            <div className={styles.internImageWrapper}>
              <Image
                src="/images/intern.png"
                alt="Our Interns working in Modern Biotech Laboratory"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                priority
                className={styles.internImage}
              />
            </div>
            <div className={styles.internContent}>
              <div className="badge badge-gold" style={{ marginBottom: "0.75rem", alignSelf: "flex-start", fontSize: "0.7rem", fontWeight: 600 }}>
                ★ Hands-on Internships
              </div>
              <h3 className="h3-heading" style={{ color: "var(--primary-blue)", marginBottom: "0.55rem", fontSize: "1.15rem", fontWeight: 600 }}>
                Student Projects & Laboratory Internships
              </h3>
              <p className="body-text" style={{ marginBottom: "1.25rem", fontSize: "0.85rem" }}>
                We offer industry-recognized internship programs for biochemistry, biotechnology, microbiology, and environmental science students. Undergo practical exposure, handle real analysis projects, and secure standard certification.
              </p>
              
              <div className={styles.internBullets}>
                <div className={styles.bullet}>
                  <span className={styles.bulletDot} />
                  <span>Individual project guidance</span>
                </div>
                <div className={styles.bullet}>
                  <span className={styles.bulletDot} />
                  <span>Real-world client sample analysis</span>
                </div>
                <div className={styles.bullet}>
                  <span className={styles.bulletDot} />
                  <span>Professional internship certificate</span>
                </div>
              </div>

              <a href="#contact" className={`btn btn-primary ${styles.applyBtn}`}>
                Apply for Internship
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Syllabus Overlay */}
      {activeProgram && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="h3-heading" style={{ color: "var(--primary-blue)" }}>
                {activeProgram.title} Syllabus
              </h3>
              <button className="modal-close" onClick={closeModal} aria-label="Close modal">
                ✕
              </button>
            </div>
            <div className="modal-body">
              <p className="body-text" style={{ marginBottom: "1rem", fontSize: "0.85rem" }}>
                Curriculum syllabus breakdown for <strong>{activeProgram.title}</strong>:
              </p>
              <div className={styles.syllabusList}>
                {activeProgram.syllabus.map((item, index) => (
                  <div key={index} className={styles.syllabusItem}>
                    <div className={styles.syllabusNumber}>0{index + 1}</div>
                    <p className="body-text" style={{ fontWeight: 500, color: "var(--neutral-dark)", fontSize: "0.82rem" }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "flex-end" }}>
                <button onClick={closeModal} className="btn btn-outline" style={{ padding: "0.5rem 1rem", fontSize: "0.8rem" }}>
                  Close Syllabus
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
