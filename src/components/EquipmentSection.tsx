
import { Rocket, LocateFixed, Camera, Cpu, Star } from 'lucide-react';
import SectionHeading from './SectionHeading';

const equipmentCategories = [
  {
    title: "Telescope",
    icon: <Star className="h-8 w-8 text-bb8-orange" />,
    items: [
      {
        name: "Celestron EdgeHD 11\"",
        description: "Advanced Schmidt-Cassegrain telescope with corrected edge optics for flatter field and pinpoint stars",
        specs: "2800mm focal length, f/10 focal ratio"
      },
      {
        name: "Reducer/Flattener",
        description: "Reduces the focal length for wider field astrophotography while maintaining edge sharpness",
        specs: "0.7x reduction factor, yielding f/7 focal ratio"
      }
    ]
  },
  {
    title: "Mount",
    icon: <LocateFixed className="h-8 w-8 text-bb8-orange" />,
    items: [
      {
        name: "Paramount MYT",
        description: "Professional-grade German equatorial mount with exceptional tracking accuracy",
        specs: "50lb payload capacity, sub-arcsecond tracking precision"
      },
      {
        name: "Custom BB8-themed Pier",
        description: "Specially designed mount pier integrating BB8's design language while providing vibration dampening",
        specs: "Integrated cable management system and electronics housing"
      }
    ]
  },
  {
    title: "Cameras",
    icon: <Camera className="h-8 w-8 text-bb8-orange" />,
    items: [
      {
        name: "ZWO ASI6200MM Pro",
        description: "Cooled monochrome CMOS camera for deep-sky astrophotography",
        specs: "Full-frame 62MP sensor, -45°C cooling capacity"
      },
      {
        name: "ZWO ASI290MM Mini",
        description: "High frame rate camera for autoguiding and planetary imaging",
        specs: "Global shutter CMOS, 10-bit ADC"
      }
    ]
  },
  {
    title: "Automation",
    icon: <Cpu className="h-8 w-8 text-bb8-orange" />,
    items: [
      {
        name: "SkyRoof Control System",
        description: "Custom system for automated dome rotation and observation slit control",
        specs: "Weather-aware safety protocols with remote operation capability"
      },
      {
        name: "The SkyX Professional",
        description: "Advanced observatory control software for telescope operation and imaging",
        specs: "TPoint modeling with ProTrack and multi-night automation capabilities"
      }
    ]
  }
];

export default function EquipmentSection() {
  return (
    <section id="equipment" className="section-container bg-gradient-to-b from-background to-bb8-dark-blue/80">
      <SectionHeading 
        title="Observatory Equipment"
        subtitle="Professional-grade instruments that power the BB8 Astronomical Observatory"
        icon={<Rocket className="h-12 w-12 text-bb8-orange" />}
      />
      
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {equipmentCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass-panel rounded-2xl p-6 animate-fade-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="mr-4 bg-black/30 p-3 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.items.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-bb8-orange/50 pl-4">
                    <h4 className="text-lg font-semibold text-bb8-orange mb-2">{item.name}</h4>
                    <p className="text-gray-300 text-sm mb-1">{item.description}</p>
                    <p className="text-gray-400 text-xs italic">{item.specs}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
