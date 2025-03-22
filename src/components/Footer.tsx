
import { ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="relative bg-black py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="h-10 w-10 bg-bb8-orange rounded-full flex items-center justify-center mr-3">
              <div className="h-2 w-2 bg-white rounded-full" />
            </div>
            <span className="font-mono text-lg font-bold text-white tracking-tight">
              BB8 Observatory
            </span>
          </div>
          
          <button 
            onClick={scrollToTop} 
            className="flex items-center gap-2 text-white hover:text-bb8-orange transition-colors"
          >
            <span>Back to top</span>
            <ChevronUp className="h-5 w-5" />
          </button>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BB8 Astronomical Observatory. All rights reserved.
          </div>
          
          <div className="text-gray-400 text-sm">
            Designed with <span className="text-bb8-orange">♥</span> for astronomy and Star Wars
          </div>
        </div>
      </div>
    </footer>
  );
}
