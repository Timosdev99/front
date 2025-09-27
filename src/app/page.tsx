'use client';

import { useAppContext } from "@/context/AppContext";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/Service";
import PastPerformancesSection from "@/components/Perfomance";
import WhyChooseSection from "@/components/Whychoose";
import TestimonialsSection from "@/components/Testimonail";
import Footer from "@/components/Footer";
import AboutCeo from "@/components/AboutCeo";

export default function Home() {
  const { showAboutCeo } = useAppContext();

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {showAboutCeo ? (
          <motion.div
            key="about-ceo"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <AboutCeo />
          </motion.div>
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div id="home">
              <Hero />
            </div>
            <div id="about">
              <AboutSection />
            </div>
            <div id="services">
              <ServicesSection />
            </div>
            <div id="performances">
              <PastPerformancesSection />
            </div>
            <WhyChooseSection />
            <TestimonialsSection />
            <div id="contact">
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
