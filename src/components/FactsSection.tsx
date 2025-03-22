
import { Lightbulb } from 'lucide-react';
import SectionHeading from './SectionHeading';

const factsData = [
  {
    title: "BB8-Inspired Rotation",
    description: "The observatory dome rotates on a spherical base similar to BB8's body, allowing 360° movement with minimal friction.",
    icon: "🌐"
  },
  {
    title: "Weather-Adaptive AI",
    description: "A custom AI system monitors weather conditions and automatically closes the observatory dome when rain is detected.",
    icon: "☔"
  },
  {
    title: "Energy Efficient",
    description: "Solar panels provide 80% of the observatory's power needs, with a special battery backup system for cloudy nights.",
    icon: "☀️"
  },
  {
    title: "Remote Control",
    description: "The entire observatory can be controlled via smartphone app, allowing remote imaging sessions from anywhere.",
    icon: "📱"
  },
  {
    title: "Sound Design",
    description: "The dome emits subtle BB8-like beeps and boops to indicate operations status changes.",
    icon: "🔊"
  },
  {
    title: "Temperature Regulated",
    description: "Advanced thermal management system keeps equipment at optimal temperature regardless of outside conditions.",
    icon: "🌡️"
  },
];

export default function FactsSection() {
  return (
    <section id="facts" className="section-container bg-gradient-to-b from-background to-bb8-dark-blue/80">
      <SectionHeading 
        title="Fun Facts & Innovations"
        subtitle="Unique features that make this observatory special"
        icon={<Lightbulb className="h-12 w-12 text-bb8-orange" />}
      />
      
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {factsData.map((fact, index) => (
            <div 
              key={index} 
              className="glass-panel rounded-2xl p-6 animate-fade-in border border-white/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 flex justify-center">{fact.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">{fact.title}</h3>
              <p className="text-gray-300 text-center text-balance">{fact.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 glass-panel rounded-2xl p-8 animate-fade-in border border-bb8-orange/20">
          <h3 className="text-2xl font-bold text-bb8-orange mb-6 text-center">Did You Know?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-gray-300">
              <p className="mb-4">
                The BB8 Observatory's design isn't just for show – the spherical shape actually improves structural 
                stability during high winds compared to traditional observatory designs.
              </p>
              <p>
                The dome rotation mechanism uses a modified version of the same technology that powered the actual
                BB8 prop from the Star Wars films, adapted for precision astronomical tracking.
              </p>
            </div>
            <div className="text-gray-300">
              <p className="mb-4">
                During construction, over 200 custom parts had to be machined specifically for this project, 
                making it truly one-of-a-kind in the world of amateur astronomy.
              </p>
              <p>
                On special occasions like May 4th (Star Wars Day), the observatory runs a special sequence of 
                light patterns visible to neighbors, celebrating its cinematic inspiration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
