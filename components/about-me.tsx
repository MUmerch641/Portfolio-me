"use client"

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLParagraphElement>(null);
  const text2Ref = useRef<HTMLParagraphElement>(null);
  const text3Ref = useRef<HTMLParagraphElement>(null);
  const text4Ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each sentence to turn white as user scrolls
      [text1Ref, text2Ref, text3Ref, text4Ref].forEach((ref, index) => {
        if (ref.current) {
          gsap.fromTo(
            ref.current,
            {
              color: '#6B7280', // gray-500
            },
            {
              color: '#FFFFFF', // white
              ease: 'power2.inOut',
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 70%',
                end: 'top 30%',
                scrub: 1,
                id: `about-text-${index}`,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => {
        if (t.vars.id && t.vars.id.startsWith('about-text-')) {
          t.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center py-32 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-semibold text-gray-500 mb-12 uppercase tracking-wider">ABOUT ME</h2>
        
        <div className="space-y-8 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <p ref={text1Ref} className="transition-colors duration-300">
            I'm a full-stack developer who transforms ideas into elegant digital experiences.
          </p>
          
          <p ref={text2Ref} className="transition-colors duration-300">
            With expertise in React, React Native, Node.js, and modern web , app technologies, I build scalable applications that users love.
          </p>
          
          <p ref={text3Ref} className="transition-colors duration-300">
            Every line of code I write is crafted with attention to detail, performance, and user experience in mind.
          </p>
          
          <p ref={text4Ref} className="transition-colors duration-300">
            Let's create something amazing together.
          </p>
        </div>

        <div className="mt-16 flex gap-4">
          <a 
            href="#contact" 
            className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors"
          >
            Get in Touch
          </a>
          <a 
            href="#projects" 
            className="px-8 py-4 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-colors"
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  );
}
