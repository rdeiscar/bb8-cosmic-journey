
import { Telescope } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ImageWithBlur from './ImageWithBlur';

export default function AboutSection() {
  return (
    <section id="about" className="section-container bg-gradient-to-b from-background to-bb8-dark-blue/80">
      <SectionHeading 
        title="About the Observatory"
        subtitle="A personal journey into the stars with a unique design inspired by Star Wars"
        icon={<Telescope className="h-12 w-12 text-bb8-orange" />}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        <div className="order-2 md:order-1 animate-fade-in">
          <h3 className="text-2xl font-bold text-white mb-6">The BB8 Inspiration</h3>
          <p className="text-gray-300 mb-4">
            What began as a childhood fascination with both Star Wars and astronomy eventually led to the creation
            of this unique observatory. The spherical design of BB8 provided not just aesthetic inspiration, but also 
            practical benefits for an astronomical dome.
          </p>
          <p className="text-gray-300 mb-4">
            Built over the course of two years, this personal observatory combines modern astrophotography equipment 
            with automation technology that would make any droid proud. The rotating dome head mimics BB8's expressive
            movements, while housing sensitive equipment in a climate-controlled environment.
          </p>
          <p className="text-gray-300">
            The observatory operates remotely, allowing for data collection and imaging even when I'm not physically present.
            Just like its namesake, my BB8 Observatory is a loyal companion on my journey through the cosmos.
          </p>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center items-center animate-fade-in-right">
          <div className="relative">
            <div className="bb8-circle w-72 h-72 p-2">
              <ImageWithBlur 
                src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&w=800&q=80" 
                alt="BB8 Astronomical Observatory" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bb8-circle w-24 h-24 bg-black/20">
              <div className="w-4 h-4 bg-bb8-orange rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
