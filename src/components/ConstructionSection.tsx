
import { Construction } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ImageWithBlur from './ImageWithBlur';

const constructionSteps = [
  {
    title: "Design & Planning",
    description: "Creating blueprints inspired by BB8's spherical design while ensuring practicality for astronomical observations.",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Foundation & Base Structure",
    description: "Building the circular base that would support the rotating dome and house the control systems.",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Dome Construction",
    description: "Assembling the custom-designed dome with automated rotation system and observation slit.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Equipment Installation",
    description: "Mounting the telescope, cameras, and tracking systems with precision alignment.",
    image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?auto=format&fit=crop&w=800&q=80"
  }
];

export default function ConstructionSection() {
  return (
    <section id="construction" className="section-container bg-gradient-to-b from-bb8-dark-blue/80 to-background">
      <SectionHeading 
        title="Construction Process"
        subtitle="Building a functional observatory with distinctive BB8 design elements"
        icon={<Construction className="h-12 w-12 text-bb8-orange" />}
      />
      
      <div className="max-w-6xl mx-auto w-full">
        <div className="relative">
          <div className="absolute left-9 top-0 h-full w-0.5 bg-bb8-orange/30" />
          
          {constructionSteps.map((step, index) => (
            <div key={index} className="relative mb-20 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-20 h-20 bg-bb8-orange text-white rounded-full">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                </div>
                
                <div className="ml-8 glass-panel rounded-2xl p-6 flex-grow">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <div className="rounded-xl overflow-hidden h-48 mb-4">
                        <ImageWithBlur 
                          src={step.image} 
                          alt={step.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                      
                      {index === constructionSteps.length - 1 && (
                        <div className="mt-8">
                          <div className="bg-black/40 rounded-xl p-4 border border-white/10">
                            <h4 className="text-bb8-orange font-bold mb-2">Challenges Overcome</h4>
                            <p className="text-gray-300 text-sm">
                              Creating a spherical design that was both functional and weather-resistant presented unique 
                              engineering challenges. Custom fabrication was required for several components, and precise 
                              calibration of the automated movement systems took months to perfect.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
