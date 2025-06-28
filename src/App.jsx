import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import PartnersSection from "./components/PartnersSection";
import TelegramBanner from "./components/TelegramBanner";
import CertificateSection from "./components/CertificateSection";
import ServiceCertificate from "./components/ServiceCertificate";
import MissionSection from "./components/MissionSection";
import FeaturesSection from "./components/FeaturesSection";
import CallSection from "./components/CallSection";
import DeliverySection from "./components/DeliverySection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <main className="pt-20">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PartnersSection />
        <TelegramBanner />
        <CertificateSection />
        <ServiceCertificate />
        <MissionSection />
        <FeaturesSection />
        <CallSection />
        <DeliverySection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
