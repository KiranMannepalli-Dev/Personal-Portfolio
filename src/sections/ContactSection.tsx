import React from 'react';
import { FadeIn } from '../components/FadeIn';

export const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#0C0C0C] py-24 sm:py-32 px-5 sm:px-8 md:px-10 flex flex-col items-center justify-center relative z-20">
      <FadeIn delay={0} y={40} className="w-full text-center mb-12 sm:mb-16">
        <h2 className="hero-heading font-black uppercase tracking-tight leading-none text-[clamp(2.5rem,10vw,120px)] mb-6">
          Contact Me
        </h2>
        <p className="text-[#D7E2EA] font-light text-[clamp(1rem,1.5vw,1.25rem)] max-w-xl mx-auto opacity-80">
          Ready to build something incredible? Get in touch with me directly via Email or WhatsApp.
        </p>
      </FadeIn>
      
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full max-w-fit mx-auto">
        <FadeIn delay={0.2} y={30} className="w-full sm:w-auto">
          <a 
            href="mailto:kiran.mannepalli.in@gmail.com" 
            className="flex items-center justify-center gap-3 w-full rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-4 sm:px-10 sm:py-5 text-sm hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-colors"
          >
            kiran.mannepalli.in@gmail.com
          </a>
        </FadeIn>
        
        <FadeIn delay={0.3} y={30} className="w-full sm:w-auto">
          <a 
            href="https://wa.me/918520950487" 
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 w-full rounded-full border-2 border-[#25D366] text-[#25D366] font-medium uppercase tracking-widest px-8 py-4 sm:px-10 sm:py-5 text-sm hover:bg-[#25D366] hover:text-white transition-colors"
          >
            +91-8520950487
          </a>
        </FadeIn>
      </div>

      <FadeIn delay={0.5} y={20} className="w-full mt-24 pt-10 border-t border-[rgba(255,255,255,0.1)]">
        <nav className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16 items-center w-full max-w-7xl mx-auto">
          <a href="#about" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base hover:opacity-70 transition-opacity duration-200">About</a>
          <a href="#services" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base hover:opacity-70 transition-opacity duration-200">Skills</a>
          <a href="#freelance" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base hover:opacity-70 transition-opacity duration-200">Services</a>
          <a href="#projects" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base hover:opacity-70 transition-opacity duration-200">Projects</a>
          <a href="#contact" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base hover:opacity-70 transition-opacity duration-200">Contact</a>
        </nav>
      </FadeIn>
    </section>
  );
};
