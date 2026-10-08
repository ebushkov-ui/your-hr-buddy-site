import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SignalsSection from "@/components/SignalsSection";
import ServicesSection from "@/components/ServicesSection";
import EorSection from "@/components/EorSection";
import DiagnosticTeaser from "@/components/DiagnosticTeaser";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Links from other pages (e.g. /#contact) land here before the sections render,
  // so the browser's own jump to the anchor misses. Scroll once they exist.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SignalsSection />
      <ServicesSection />
      <EorSection />
      <DiagnosticTeaser />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
