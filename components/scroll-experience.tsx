"use client"

import HeroScroll from '@/components/hero-scroll';
import MidScroll from '@/components/mid-scroll';
import AnimatedHand from '@/components/animated-hand';

export default function ScrollExperience() {
  return (
    <>
      <noscript>
        <style>{`
          /* Fallback styles when JavaScript is disabled */
          .js-only {
            display: none !important;
          }
          .no-js-fallback {
            display: block !important;
          }
        `}</style>
      </noscript>
      
      <div className="js-only">
        <AnimatedHand />
        <HeroScroll />
        <MidScroll />
      </div>

      {/* Fallback content for no-JS */}
      <div className="no-js-fallback hidden">
        <section className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-white">
          <div className="max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <img
                src="/placeholder.svg"
                alt="Product"
                className="h-64 w-64 object-contain md:h-96 md:w-96"
              />
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              Introducing XYZ
            </h1>
            <p className="text-lg text-gray-300 md:text-xl">
              Experience the next generation of innovation. Crafted with precision,
              designed for the future.
            </p>
          </div>
        </section>

        <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black px-4 py-20">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-2xl bg-gray-800/50 p-8 md:p-12">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Designed for Excellence
              </h2>
              <div className="mb-6 h-64 overflow-hidden rounded-xl md:h-80">
                <img
                  src="/placeholder.svg"
                  alt="Feature Product"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mb-6 text-gray-400">
                Every detail matters. Our product combines cutting-edge
                technology with timeless design principles to deliver an
                unparalleled experience.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <span className="mr-3 h-2 w-2 rounded-full bg-white" />
                  Premium materials and craftsmanship
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-3 h-2 w-2 rounded-full bg-white" />
                  Innovative features that adapt to you
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-3 h-2 w-2 rounded-full bg-white" />
                  Sustainable and built to last
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
