import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import HealthCheck from "@/components/HealthCheck";
import Calculator from "@/components/Calculator";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonials from "@/components/Testimonials";
import Insights from "@/components/Insights";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSiteConfig } from "@/context/SiteConfigContext";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { config } = useSiteConfig();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <div id="hero"><Hero /></div>
      <div id="services"><Services /></div>
      <div id="why-us"><WhyUs /></div>
      <div id="health-check"><HealthCheck /></div>
      <div id="calculator"><Calculator /></div>
      <div id="process"><ProcessTimeline /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="insights"><Insights /></div>
      <div id="faq"><FAQ /></div>
      <div id="contact"><ContactForm /></div>
      
      <Footer />

      {/* Floating WhatsApp */}
      <motion.a
        href={`https://wa.me/${config.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(37, 211, 102, 0.7)",
            "0 0 0 20px rgba(37, 211, 102, 0)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FaWhatsapp className="w-8 h-8" />
      </motion.a>

      {/* Back to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-8 z-50 p-3 rounded-full bg-primary/20 backdrop-blur-md text-primary border border-primary/30 hover:bg-primary/40 transition-colors"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
