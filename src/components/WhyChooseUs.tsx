"use client";

import React from "react";
import styles from "./WhyChooseUs.module.css";

interface FeatureCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  theme: "green" | "blue";
}

export default function WhyChooseUs() {
  const features: FeatureCard[] = [
    {
      title: "KSPCB Approved Laboratory",
      description: "Recognized Kerala State Pollution Control Board Approved B Grade Laboratory.",
      theme: "green",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Specialized Water Analysis",
      description: "Focused expertise in Drinking Water and Waste Water testing.",
      theme: "blue",
      icon: (
        <svg
          width="24"
          height="24"
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
    },
    {
      title: "Experienced Technical Team",
      description: "Qualified professionals ensuring reliable laboratory services.",
      theme: "green",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Accurate Results",
      description: "Reliable testing using standard analytical methods.",
      theme: "blue",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
    {
      title: "Timely Reporting",
      description: "Fast turnaround with professionally prepared reports.",
      theme: "green",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: "Hands-on Practical Training",
      description: "Industry-oriented laboratory training with practical experience.",
      theme: "blue",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-choose-us" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Why Choose Us</span>
          <h2 className="h2-heading">Why Choose Modern Biotech Lab?</h2>
          <p className="body-text">
            We are committed to delivering the highest grade of laboratory testing services and education.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((item, index) => (
            <div key={index} className={`card ${styles.featureCard}`}>
              <div
                className={`icon-box ${
                  item.theme === "green" ? "icon-box-green" : "icon-box-blue"
                } ${styles.icon}`}
              >
                {item.icon}
              </div>
              <h3 className="h3-heading" style={{ fontSize: "1rem", marginBottom: "0.55rem" }}>
                {item.title}
              </h3>
              <p className="body-text" style={{ fontSize: "0.85rem", lineHeight: "1.5" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
