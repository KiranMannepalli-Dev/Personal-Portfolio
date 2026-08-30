import React from 'react';
import { FadeIn } from '../components/FadeIn';

const freelanceServices = [
  {
    num: '01',
    name: 'Website Development',
    desc: 'Custom, responsive websites built with modern technologies tailored to your business needs.'
  },
  {
    num: '02',
    name: 'App Development',
    desc: 'High-performance mobile and web applications designed for seamless user experiences.'
  },
  {
    num: '03',
    name: 'ERP Solutions',
    desc: 'Comprehensive Enterprise Resource Planning systems to streamline and automate your business operations.'
  },
  {
    num: '04',
    name: 'Digital Marketing',
    desc: 'Strategic marketing campaigns to boost your online presence and reach your target audience effectively.'
  },
  {
    num: '05',
    name: 'Graphic Design',
    desc: 'Eye-catching posters, unique logo designs, and cohesive brand identities.'
  }
];

export const FreelanceSection = () => {
  return (
    <section id="freelance" className="bg-[#0C0C0C] text-white px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 className="hero-heading font-black uppercase tracking-tight leading-none text-[clamp(2.5rem,10vw,120px)] mb-4 sm:mb-6">
            Freelancer
          </h2>
          <p className="text-[#D7E2EA] font-light text-[clamp(1rem,1.5vw,1.25rem)] mb-16 sm:mb-20 md:mb-28 max-w-xl mx-auto opacity-80">
            Available for remote, contract, or freelance opportunities.
          </p>
        </FadeIn>

        <div className="w-full flex flex-col">
          {freelanceServices.map((svc, i) => (
            <FadeIn key={svc.num} delay={i * 0.1} y={30} className="w-full">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 lg:gap-16 border-t border-[rgba(255,255,255,0.15)] py-8 sm:py-10 md:py-12 w-full group">
                <div className="text-white font-black leading-none text-[clamp(3rem,10vw,140px)] w-24 md:w-32 lg:w-48 flex-shrink-0 opacity-10 transition-opacity duration-300 group-hover:opacity-30">
                  {svc.num}
                </div>
                <div className="flex flex-col gap-2 md:gap-4 flex-1">
                  <h3 className="text-white font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] leading-tight">
                    {svc.name}
                  </h3>
                  <p className="text-[#D7E2EA] font-light leading-relaxed max-w-2xl opacity-70 text-[clamp(0.85rem,1.6vw,1.25rem)] transition-opacity duration-300 group-hover:opacity-100">
                    {svc.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
          {/* Bottom border for the last item */}
          <div className="border-t border-[rgba(255,255,255,0.15)] w-full"></div>
        </div>
      </div>
    </section>
  );
};
