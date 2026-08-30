import React, { useEffect, useRef, useState } from 'react';

const imagesRow1 = [
  "/project-hero.png",
  "/resume-analyzer-1.png",
  "/resume-analyzer-2.png",
  "/resume-analyzer-3.png",
  "/project-dental.png",
  "/portfolio-1.png",
  "/portfolio-2.png"
];

const imagesRow2 = [
  "/booking-platform-1.jpg",
  "/booking-platform-2.jpg",
  "/booking-platform-3.jpg",
  "/project-ev.png",
  "/project-resume.png",
  "/portfolio-3.png"
];

// Tripled for seamless scrolling
const row1Tripled = [...imagesRow1, ...imagesRow1, ...imagesRow1];
const row2Tripled = [...imagesRow2, ...imagesRow2, ...imagesRow2];

export const MarqueeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const calcOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calcOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initialize offset
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3">
      <div 
        className="flex gap-3 w-max"
        style={{ 
          transform: `translateX(${offset - 200}px)`, 
          willChange: 'transform' 
        }}
      >
        {row1Tripled.map((src, idx) => (
          src ? (
            <img 
              key={`r1-${idx}`} 
              src={src} 
              alt={`Marquee Row 1 - ${idx}`} 
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
            />
          ) : (
            <div key={`r1-${idx}`} className="w-[420px] h-[270px] rounded-2xl bg-[#1A1A1A] border-2 border-dashed border-[#333] flex flex-col items-center justify-center text-[#666] font-medium flex-shrink-0">
              <span className="text-xl mb-1">Add Image</span>
              <span className="text-sm font-light">420x270</span>
            </div>
          )
        ))}
      </div>
      
      <div 
        className="flex gap-3 w-max"
        style={{ 
          transform: `translateX(${-(offset - 200)}px)`, 
          willChange: 'transform' 
        }}
      >
        {row2Tripled.map((src, idx) => (
          src ? (
            <img 
              key={`r2-${idx}`} 
              src={src} 
              alt={`Marquee Row 2 - ${idx}`} 
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
            />
          ) : (
            <div key={`r2-${idx}`} className="w-[420px] h-[270px] rounded-2xl bg-[#1A1A1A] border-2 border-dashed border-[#333] flex flex-col items-center justify-center text-[#666] font-medium flex-shrink-0">
              <span className="text-xl mb-1">Add Image</span>
              <span className="text-sm font-light">420x270</span>
            </div>
          )
        ))}
      </div>
    </section>
  );
};
