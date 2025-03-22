
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ConstructionSection from '../components/ConstructionSection';
import EquipmentSection from '../components/EquipmentSection';
import GallerySection from '../components/GallerySection';
import FactsSection from '../components/FactsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Preload background images for smoother transitions
    const images = [
      'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=2400&q=80',
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=2400&q=80'
    ];
    
    images.forEach(image => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ConstructionSection />
        <EquipmentSection />
        <GallerySection />
        <FactsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
