
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/Service";
import PastPerformancesSection from "@/components/Perfomance";
import WhyChooseSection from "@/components/Whychoose";
import TestimonialsSection from "@/components/Testimonail";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div id="home">
        <Header />
      </div>
      <Hero />
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
    </div>
  );
}
