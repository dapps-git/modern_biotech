"use client";

import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";

const heroSlides = [
  { src: "/images/water.webp", alt: "Water testing laboratory" },
  { src: "/images/hero.webp", alt: "Modern Biotech Lab facilities" },
  { src: "/images/hero1.webp", alt: "Professional water analysis" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitioning(true);
      setPrevSlide(currentSlide);

      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setTransitioning(false);
        setPrevSlide(null);
      }, 900); // fade duration
    }, 4500); // show each slide for 4.5s

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section id="home" className={styles.hero}>
      {/* Background image slideshow */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.src}
          className={`${styles.bgSlide} ${
            index === currentSlide ? styles.bgSlideActive : ""
          } ${index === prevSlide && transitioning ? styles.bgSlideFading : ""}`}
          style={{ backgroundImage: `url('${slide.src}')` }}
          aria-hidden="true"
        />
      ))}

      {/* Dark overlay */}
      <div className={styles.bgOverlay} />

      {/* Slide indicators */}
      <div className={styles.slideIndicators} aria-hidden="true">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            className={`${styles.indicatorDot} ${i === currentSlide ? styles.indicatorActive : ""}`}
            onClick={() => {
              setTransitioning(true);
              setPrevSlide(currentSlide);
              setTimeout(() => {
                setCurrentSlide(i);
                setTransitioning(false);
                setPrevSlide(null);
              }, 900);
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <span className={`subtitle ${styles.overline}`}>
            KSPCB Approved B Grade Laboratory • License No: PCB/LAB/C11/2018-B
          </span>

          <h1 className={styles.title}>MODERN BIOTECH LAB</h1>

          <h2 className={styles.tagline}>
            Accurate Water Testing &amp; Professional Laboratory Training
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
