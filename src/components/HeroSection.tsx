
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-stars bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block animate-roll-in">
          <div className="bb8-circle w-24 h-24 mb-8">
            <div className="w-4 h-4 bg-bb8-orange rounded-full"></div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight font-mono animate-fade-in">
          BB8 Astronomical <br /> Observatory
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in animation-delay-200 text-balance">
          Exploring the universe from my own backyard
        </p>
        
        <button 
          onClick={scrollToAbout}
          className="bb8-button animate-fade-in animation-delay-300"
        >
          Discover More
        </button>
      </div>
      
      {/* Scroll Down Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-float"
        onClick={scrollToAbout}
      >
        <ChevronDown className="h-10 w-10 text-white opacity-80" />
      </div>
    </section>
  );
}
