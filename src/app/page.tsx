import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Training from "@/components/Training";
import Certifications from "@/components/Certifications";
import WhyChooseUs from "@/components/WhyChooseUs";
import Laboratory from "@/components/Laboratory";
import License from "@/components/License";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <AboutUs />
        <Services />
        <Training />
        <Certifications />
        <WhyChooseUs />
        <Laboratory />
        <License />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
