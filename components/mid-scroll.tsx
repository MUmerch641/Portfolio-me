"use client"

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MidScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const clientsRef = useRef<HTMLDivElement>(null);
  const parallaxBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const translateAmount = isMobile ? -50 : -100;
    const scaleStart = isMobile ? 0.9 : 0.85;

    const ctx = gsap.context(() => {
      // Clients section: slide in from left and scale up
      if (clientsRef.current) {
        gsap.fromTo(
          clientsRef.current,
          {
            x: translateAmount,
            scale: scaleStart,
            opacity: 0,
          },
          {
            x: 0,
            scale: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              end: 'top 30%',
              scrub: 1,
            },
          }
        );
      }

      // Parallax background: move slower than scroll
      if (parallaxBgRef.current) {
        gsap.to(parallaxBgRef.current, {
          y: 150,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative">
      {/* Parallax Background Pattern */}
      <div
        ref={parallaxBgRef}
        className="absolute inset-0 -z-10 opacity-10"
      >
        <div className="absolute left-1/4 top-20 h-64 w-64 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-3xl" />
        <div className="absolute right-1/3 top-1/2 h-96 w-96 rounded-full bg-gradient-to-tl from-gray-500/10 to-transparent blur-3xl" />
      </div>

      {/* This wraps your existing content sections with scroll animations */}
      <div ref={clientsRef}>
        {/* Your content sections will be passed as children */}
      </div>
    </div>
  );
}
