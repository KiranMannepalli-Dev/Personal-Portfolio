import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText = ({ text, className = '' }: AnimatedTextProps) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(' ');

  return (
    <p ref={containerRef} className={className} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-flex', marginRight: '0.25em' }}>
          {word.split('').map((char, j) => {
            const charIndex = text.indexOf(word) + j; // Approximation for simple progress mapping
            const start = charIndex / text.length;
            const end = start + (1 / text.length);
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

            return (
              <span key={j} style={{ position: 'relative' }}>
                <span style={{ opacity: 0 }}>{char}</span>
                <motion.span style={{ position: 'absolute', left: 0, top: 0, opacity }}>
                  {char}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </p>
  );
};
