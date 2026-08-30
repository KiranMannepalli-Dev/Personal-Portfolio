import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { ContactButton } from '../components/ContactButton';
import { DownloadResumeButton } from '../components/DownloadResumeButton';

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col overflow-x-clip">

      <div className="flex-1 flex flex-col justify-center items-center relative w-full overflow-hidden z-20">
        <FadeIn delay={0.15} y={40} className="w-full text-center mt-6 sm:mt-4 md:-mt-5">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[13vw] sm:text-[14vw] md:text-[15vw] lg:text-[16vw]">
            Hi, i&apos;m kiran
          </h1>
        </FadeIn>
      </div>

      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end max-w-7xl mx-auto z-50 relative">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
            a software developer driven by crafting intelligent and unforgettable web solutions
          </p>
        </FadeIn>
        
        <FadeIn delay={0.5} y={20}>
          <div className="flex flex-col sm:flex-row gap-4 items-end sm:items-center">
            <DownloadResumeButton />
            <ContactButton />
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
          <img 
            src="/ChatGPT Image Aug 30, 2026, 04_24_20 PM-Photoroom.png" 
            alt="Kiran Portrait" 
            className="w-[340px] sm:w-[460px] md:w-[560px] lg:w-[680px] object-contain pointer-events-none"
            style={{
              maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)'
            }}
          />
        </Magnet>
      </FadeIn>
    </section>
  );
};
