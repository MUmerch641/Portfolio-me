"use client"

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroScroll() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const rotationAmount = isMobile ? 3 : 5;
    const translateAmount = isMobile ? -30 : -50;

    // Hero Section Animations
    const ctx = gsap.context(() => {
      // Content container: subtle rotation and move up
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          rotation: rotationAmount,
          y: translateAmount,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            id: 'hero-content',
          },
        });
      }

      // Background color fade
      if (backgroundRef.current) {
        gsap.to(backgroundRef.current, {
          backgroundColor: '#1a1a1a',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            id: 'hero-bg',
          },
        });
      }

      // Headline subtle fade
      if (headlineRef.current) {
        gsap.to(headlineRef.current, {
          opacity: 0.3,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'center top',
            scrub: 1,
            id: 'hero-headline',
          },
        });
      }

      // Sub-text fade
      if (subTextRef.current) {
        gsap.to(subTextRef.current, {
          opacity: 0,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'center top',
            scrub: 1,
            id: 'hero-subtext',
          },
        });
      }
    }, heroRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => {
        if (t.vars.id && t.vars.id.startsWith('hero-')) {
          t.kill();
        }
      });
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-32 pb-20 px-6 flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 -z-10 bg-black transition-colors"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-800/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-gray-900/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Content Container */}
      <div ref={contentRef} className="max-w-4xl text-center">
        <h1 ref={headlineRef} className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="italic text-gray-400">Building</span> Modern Web & Mobile Apps with Clean Code
        </h1>

        <p ref={subTextRef} className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Full-stack developer specializing in React, Node.js, and MongoDB. Creating responsive, performant applications
          with beautiful UI and solid architecture.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-12 w-8 rounded-full border-2 border-white/30">
          <div className="mx-auto mt-2 h-2 w-2 animate-pulse rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  );
}
