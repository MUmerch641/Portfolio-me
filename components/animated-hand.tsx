"use client"

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedHand() {
  const handRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!handRef.current) return;

    const isMobile = window.innerWidth < 768;

    // Timeline for hand movements as user scrolls
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        id: 'animated-hand',
      },
    });

    // Initial position: pointing up-right at hero
    tl.fromTo(
      handRef.current,
      {
        x: isMobile ? -50 : -100,
        y: isMobile ? 100 : 150,
        rotation: -45,
        scale: isMobile ? 0.6 : 1,
      },
      {
        x: isMobile ? 0 : 50,
        y: isMobile ? 150 : 200,
        rotation: 0,
        duration: 1,
      }
    )
    // Section 2: Rotate and point to center-right
    .to(handRef.current, {
      x: isMobile ? 100 : 200,
      y: isMobile ? 300 : 500,
      rotation: 45,
      duration: 1,
    })
    // Section 3: Point down-right
    .to(handRef.current, {
      x: isMobile ? 50 : 100,
      y: isMobile ? 500 : 800,
      rotation: 90,
      duration: 1,
    })
    // Section 4: Point left
    .to(handRef.current, {
      x: isMobile ? -80 : -150,
      y: isMobile ? 650 : 1100,
      rotation: 135,
      duration: 1,
    })
    // Section 5: Point down
    .to(handRef.current, {
      x: isMobile ? 20 : 50,
      y: isMobile ? 800 : 1400,
      rotation: 180,
      duration: 1,
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => {
        if (t.vars.id === 'animated-hand') {
          t.kill();
        }
      });
    };
  }, []);

  return (
    <div
      ref={handRef}
      className="fixed left-1/2 top-1/4 z-0 pointer-events-none will-change-transform"
      style={{ transform: 'translate(-50%, -50%)' }}
    >
      <svg
        width="140"
        height="140"
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-25 md:opacity-35 drop-shadow-lg"
      >
        {/* Geometric Triangle Design */}
        <g id="geometric-triangle">
          {/* Main triangle */}
          <path
            d="M70 20 L110 100 L30 100 Z"
            fill="#ffffff"
            stroke="#e5e5e5"
            strokeWidth="2"
            opacity="0.8"
          />
          
          {/* Inner triangle accent */}
          <path
            d="M70 35 L95 85 L45 85 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.5"
            opacity="0.6"
          />
          
          {/* Corner highlights */}
          <circle cx="70" cy="20" r="4" fill="#ffffff" opacity="0.9"/>
          <circle cx="110" cy="100" r="3" fill="#e5e5e5" opacity="0.7"/>
          <circle cx="30" cy="100" r="3" fill="#e5e5e5" opacity="0.7"/>
          
          {/* Subtle glow effect */}
          <path
            d="M70 15 L115 105 L25 105 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1"
            opacity="0.2"
          />
        </g>
      </svg>
    </div>
  );
}
