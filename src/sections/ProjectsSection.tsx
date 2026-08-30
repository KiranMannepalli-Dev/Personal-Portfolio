import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/LiveProjectButton';

const projects = [
  {
    num: '01',
    name: 'AI-Powered Resume Analyzer',
    category: 'Python / Flask / OpenAI',
    img1: '/resume-analyzer-1.png',
    img2: '/resume-analyzer-2.png',
    img3: '/resume-analyzer-3.png',
  },
  {
    num: '02',
    name: 'Smart Booking Platform',
    category: 'Node.js / Express.js',
    img1: '/booking-platform-1.jpg',
    img2: '/booking-platform-2.jpg',
    img3: '/booking-platform-3.jpg',
  },
  {
    num: '03',
    name: 'Personal Portfolio',
    category: 'HTML5 / CSS3 / React',
    img1: '/portfolio-1.png',
    img2: '/portfolio-2.png',
    img3: '/portfolio-3.png',
  }
];

const ProjectCard = ({ project, i, targetScale }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32 w-full px-5 sm:px-8 md:px-10">
      <motion.div 
        style={{ scale, top: i * 28 }}
        className="relative w-full max-w-6xl flex flex-col rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8"
      >
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-10 gap-6">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span className="text-[#D7E2EA] font-black leading-none text-[clamp(2.5rem,6vw,80px)]">{project.num}</span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] font-light uppercase tracking-widest text-xs sm:text-sm md:text-base opacity-70 mb-1">{project.category}</span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-[clamp(1.2rem,2.5vw,2.5rem)] leading-none">{project.name}</h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        {/* Bottom Row - Images */}
        <div className="flex flex-col sm:flex-row gap-4 h-full">
          {/* Left Column (40%) */}
          <div className="flex flex-col gap-4 w-full sm:w-[40%]">
            <img src={project.img1} alt={`${project.name} image 1`} className="w-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] h-[clamp(130px,16vw,230px)]" />
            <img src={project.img2} alt={`${project.name} image 2`} className="w-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] h-[clamp(160px,22vw,340px)]" />
          </div>
          {/* Right Column (60%) */}
          <div className="w-full sm:w-[60%] flex">
            <img src={project.img3} alt={`${project.name} main image`} className="w-full h-full min-h-[200px] object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 pt-20 sm:pt-24 md:pt-32 pb-40">
      <div className="flex flex-col items-center w-full">
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-24">
          <h2 className="hero-heading font-black uppercase tracking-tight leading-none text-[clamp(3rem,12vw,160px)]">
            Project
          </h2>
        </FadeIn>

        <div className="w-full flex flex-col relative">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - 1 - i) * 0.03;
            return (
              <ProjectCard 
                key={project.num}
                i={i}
                project={project}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
