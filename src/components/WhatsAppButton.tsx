"use client";

import React from "react";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  const phoneNumber = "918848881488";
  const whatsappMsg = encodeURIComponent(
    "Hi Modern Biotech Lab, I would like to inquire about water testing services / training programs."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMsg}`;

  return (
    <div className={styles.container}>
      {/* Quick Call for Mobile Users */}
      <a
        href="tel:+918848881488"
        className={`${styles.floatBtn} ${styles.callBtn}`}
        aria-label="Call Modern Biotech Lab"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.floatBtn} ${styles.waBtn}`}
        aria-label="Chat on WhatsApp"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.501-5.733-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.116-2.887-6.98C16.484 1.897 14.008 1.867 12.01 1.867c-5.437 0-9.861 4.42-9.866 9.865-.002 1.701.457 3.361 1.328 4.867l-1.025 3.743 3.843-1.008zm11.536-6.98c-.267-.134-1.583-.78-1.827-.869-.243-.088-.421-.133-.598.134-.177.266-.687.868-.842 1.046-.156.177-.311.2-.578.066-.267-.134-1.127-.416-2.147-1.326-.793-.707-1.329-1.582-1.485-1.848-.156-.267-.017-.411.117-.544.12-.12.267-.311.4-.466.133-.156.177-.266.267-.443.089-.178.044-.333-.022-.466-.067-.134-.598-1.441-.82-1.974-.216-.519-.434-.447-.598-.456-.153-.008-.33-.009-.507-.009-.178 0-.466.067-.71.333-.244.267-.931.91-9.31.91s-.688-.644-.932-.91c-.244-.266-.465-.288-.6-.288h-.4c-.267 0-.583.088-.827.333-.243.266-.93.91-.93 2.22s.954 2.571 1.087 2.75c.133.177 1.879 2.87 4.553 4.024.637.274 1.133.438 1.52.562.64.203 1.22.175 1.678.107.513-.076 1.583-.647 1.805-1.272.222-.625.222-1.161.156-1.272-.067-.111-.244-.177-.511-.311z" />
        </svg>
      </a>
    </div>
  );
}
