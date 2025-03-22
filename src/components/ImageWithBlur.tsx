
import { useState, useEffect } from 'react';

interface ImageWithBlurProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageWithBlur({ src, alt, className = '' }: ImageWithBlurProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [src]);
  
  return (
    <div className="relative overflow-hidden">
      <div 
        className={`${isLoaded ? 'opacity-0' : 'opacity-100'} absolute inset-0 bg-gray-800 animate-pulse transition-opacity duration-500`}
      />
      <img 
        src={src} 
        alt={alt} 
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
      />
    </div>
  );
}
