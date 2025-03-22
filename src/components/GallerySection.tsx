
import { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ImageWithBlur from './ImageWithBlur';

const galleryImages = [
  {
    id: 1,
    title: "Andromeda Galaxy (M31)",
    description: "Our nearest spiral galaxy neighbor, captured with 8 hours of exposure.",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=1200&q=80",
    type: "Deep Sky"
  },
  {
    id: 2,
    title: "Jupiter with Great Red Spot",
    description: "A detailed view of Jupiter showing atmospheric bands and the Great Red Spot.",
    image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?auto=format&fit=crop&w=1200&q=80",
    type: "Planetary"
  },
  {
    id: 3,
    title: "Orion Nebula (M42)",
    description: "A stellar nursery where new stars are being born, captured in narrowband.",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80",
    type: "Deep Sky"
  },
  {
    id: 4,
    title: "Lunar Terminator",
    description: "Detailed view of craters and mountains along the day/night boundary of the Moon.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    type: "Lunar"
  },
  {
    id: 5,
    title: "Pleiades Star Cluster (M45)",
    description: "The Seven Sisters cluster surrounded by delicate blue reflection nebulosity.",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=1200&q=80",
    type: "Deep Sky"
  },
  {
    id: 6,
    title: "Saturn with Rings",
    description: "Saturn's magnificent ring system captured during optimal tilt angle.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80",
    type: "Planetary"
  }
];

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredImages = filter 
    ? galleryImages.filter(img => img.type === filter) 
    : galleryImages;
  
  const openImage = (id: number) => {
    setActiveImage(id);
    document.body.style.overflow = 'hidden';
  };
  
  const closeImage = () => {
    setActiveImage(null);
    document.body.style.overflow = 'auto';
  };
  
  const navigateImage = (direction: 'prev' | 'next') => {
    if (activeImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === activeImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setActiveImage(filteredImages[newIndex].id);
  };
  
  const activeImageData = galleryImages.find(img => img.id === activeImage);
  
  const filters = ['Deep Sky', 'Planetary', 'Lunar'];
  
  return (
    <section id="gallery" className="section-container bg-gradient-to-b from-bb8-dark-blue/80 to-background">
      <SectionHeading 
        title="Astrophotography Gallery"
        subtitle="Images captured from the BB8 Astronomical Observatory"
        icon={<Camera className="h-12 w-12 text-bb8-orange" />}
      />
      
      <div className="max-w-6xl mx-auto w-full">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === null 
                ? 'bg-bb8-orange text-white' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            All
          </button>
          
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f 
                  ? 'bg-bb8-orange text-white' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id} 
              className="glass-panel rounded-xl overflow-hidden cursor-pointer group animate-fade-in transition-transform duration-300 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openImage(image.id)}
            >
              <div className="h-48 overflow-hidden">
                <ImageWithBlur 
                  src={image.image} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <span className="inline-block px-2 py-1 text-xs rounded-full bg-black/30 text-bb8-orange mb-2">
                  {image.type}
                </span>
                <h3 className="text-white font-bold mb-1">{image.title}</h3>
                <p className="text-gray-400 text-sm text-balance">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {activeImage !== null && activeImageData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <button 
            className="absolute top-4 right-4 text-white hover:text-bb8-orange transition-colors"
            onClick={closeImage}
          >
            <X className="h-8 w-8" />
          </button>
          
          <button 
            className="absolute left-4 md:left-8 text-white hover:text-bb8-orange transition-colors"
            onClick={() => navigateImage('prev')}
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          
          <button 
            className="absolute right-4 md:right-8 text-white hover:text-bb8-orange transition-colors"
            onClick={() => navigateImage('next')}
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          
          <div className="max-w-5xl max-h-[80vh] overflow-hidden">
            <img 
              src={activeImageData.image} 
              alt={activeImageData.title} 
              className="w-full h-full object-contain"
            />
            
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white">{activeImageData.title}</h3>
              <p className="text-gray-300">{activeImageData.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
