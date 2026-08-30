import React from 'react';
import { FadeIn } from '../components/FadeIn';

const services = [
  {
    num: '01',
    name: 'Front-End Development',
    desc: 'Building responsive web applications using HTML5, CSS3, JavaScript, Bootstrap, and Tailwind CSS. Delivered 10+ web apps working through the full SDLC.'
  },
  {
    num: '02',
    name: 'Back-End Development',
    desc: 'Writing modular backend code using Python, Node.js, Express.js, and Flask. Integrating and debugging REST APIs to resolve connectivity and data-handling issues.'
  },
  {
    num: '03',
    name: 'AI & Prompt Engineering',
    desc: 'Designing and testing OpenAI GPT API prompts to extract and interpret data. Using scikit-learn, pandas, and NumPy for data preprocessing and basic ML training.'
  },
  {
    num: '04',
    name: 'Database Management',
    desc: 'Designing and implementing relational databases and schemas using MySQL and MongoDB to support full-stack applications.'
  },
  {
    num: '05',
    name: 'Tools & Practices',
    desc: 'Utilizing Git/GitHub, Visual Studio Code, and OOP principles. Applied analytical and problem-solving skills to meet daily targets in fast-paced environments.'
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 className="text-[#0C0C0C] font-black uppercase tracking-tight leading-none text-[clamp(2rem,10vw,120px)] mb-16 sm:mb-20 md:mb-28">
            Skills & Experience
          </h2>
        </FadeIn>

        <div className="w-full flex flex-col">
          {services.map((svc, i) => (
            <FadeIn key={svc.num} delay={i * 0.1} y={30} className="w-full">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 lg:gap-16 border-t border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 w-full">
                <div className="text-[#0C0C0C] font-black leading-none text-[clamp(3rem,10vw,140px)] w-24 md:w-32 lg:w-48 flex-shrink-0">
                  {svc.num}
                </div>
                <div className="flex flex-col gap-2 md:gap-4 flex-1">
                  <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] leading-tight">
                    {svc.name}
                  </h3>
                  <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60 text-[clamp(0.85rem,1.6vw,1.25rem)]">
                    {svc.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
          {/* Bottom border for the last item */}
          <div className="border-t border-[rgba(12,12,12,0.15)] w-full"></div>
        </div>
      </div>
    </section>
  );
};
