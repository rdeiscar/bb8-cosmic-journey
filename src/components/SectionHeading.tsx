
import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  align?: 'left' | 'center' | 'right';
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  icon, 
  align = 'center' 
}: SectionHeadingProps) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];
  
  return (
    <div className={`mb-16 w-full max-w-4xl animate-fade-in ${alignClass}`}>
      {icon && (
        <div className="mb-4 flex justify-center">
          {icon}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white pb-3 font-mono tracking-tight">
        <span className="inline-block">{title}</span>
        <span className="block w-20 h-1 bg-bb8-orange rounded-full mt-4 mx-auto"></span>
      </h2>
      {subtitle && (
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}
