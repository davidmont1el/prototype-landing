import React from 'react';

interface IronPathLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: string;
  sloganColor?: string;
  layout?: 'horizontal' | 'vertical';
}

export default function IronPathLogo({
  className = '',
  size = 'md',
  showText = true,
  textColor = 'text-white',
  sloganColor = 'text-zinc-400',
  layout = 'horizontal'
}: IronPathLogoProps) {
  
  // Size mapper
  const sizeClasses = {
    sm: { svg: 'w-8 h-8', container: 'gap-2' },
    md: { svg: 'w-12 h-12', container: 'gap-3' },
    lg: { svg: 'w-20 h-20', container: 'gap-4' },
    xl: { svg: 'w-32 h-32 md:w-36 md:h-36', container: 'gap-6' }
  };

  const selectedSize = sizeClasses[size];

  return (
    <div className={`flex ${layout === 'horizontal' ? 'flex-row items-center' : 'flex-col items-center text-center'} ${selectedSize.container} ${className}`}>
      
      {/* BRAND SVG LOGO GLYPH */}
      <svg 
        viewBox="0 0 200 200" 
        className={`${selectedSize.svg} flex-shrink-0`}
        fill="none" 
        xmlns="http://www.w3.org/250/svg"
      >
        {/* Left 'I' Bar - Slanted Bold athletic serif in Red */}
        <path 
          d="M 34,140 Q 32,140 37,131 L 64,48 C 66,42 63,40 59,40 H 61 L 85,40 L 59,140 Z" 
          fill="#d11212" 
        />
        <path 
          d="M 59,40 L 85,40 L 73,85 C 65,85 53,92 48,99 C 39,111 34,129 34,140 H 53 L 79,40 Z" 
          fill="#d11212" 
        />
        
        {/* The 'P' Frame - Styled with high-contrast white/light-grey for dark background visibility */}
        <path 
          d="M 96,40 L 140,40 C 168,40 174,60 160,82 C 147,100 120,105 105,108 L 100,126 C 96,140 102,140 106,140 L 102,140 L 91,140 L 101,105 C 114,103 133,98 143,84 C 153,70 148,52 126,52 L 103,52 Z" 
          fill="currentColor" 
          className="text-zinc-100"
        />

        {/* The Sweeping Red Path with Arrow Head merging upwards */}
        <path 
          d="M 59,140 
             C 70,125 90,88 116,77 
             C 124,73 131,70 134,68" 
          stroke="#d11212" 
          strokeWidth="7" 
          strokeLinecap="round" 
        />
        
        {/* Custom sharp arrowhead at (135, 67) */}
        <path 
          d="M 119,83 L 138,65 L 138,84 Z" 
          fill="#d11212" 
          stroke="#d11212"
          strokeWidth="2"
          strokeLinejoin="miter"
        />
      </svg>

      {/* TYPOGRAPHY COMPANION */}
      {showText && (
        <div className={`flex flex-col ${layout === 'horizontal' ? 'text-left' : 'items-center text-center'}`}>
          <div className="flex items-baseline font-sans font-black tracking-tight italic select-none">
            <span className={`text-zinc-200 ${
              size === 'sm' ? 'text-lg' : 
              size === 'md' ? 'text-2xl' : 
              size === 'lg' ? 'text-4xl' : 'text-5xl md:text-6xl'
            } font-black uppercase tracking-normal mr-1`}>
              IRON
            </span>
            <span className={`text-[#d11212] ${
              size === 'sm' ? 'text-lg' : 
              size === 'md' ? 'text-2xl' : 
              size === 'lg' ? 'text-4xl' : 'text-5xl md:text-6xl'
            } font-black uppercase tracking-normal`}>
              PATH
            </span>
          </div>
          
          <span className={`font-mono tracking-[0.25em] font-extrabold uppercase leading-none block mt-0.5 ${
            size === 'sm' ? 'text-[7.5px]' : 
            size === 'md' ? 'text-[9.5px]' : 
            size === 'lg' ? 'text-[11px]' : 'text-[13px] md:text-[14px]'
          } ${sloganColor}`}>
            YOUR PATH. YOUR STRENGTH.
          </span>
        </div>
      )}
    </div>
  );
}
