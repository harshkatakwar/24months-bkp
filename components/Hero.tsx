"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Delay to allow page load, then animate in
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20"
      aria-label="Hero — 24 Months With Stuti"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream-dark to-cream" />

      {/* Decorative accent line */}
      <div className="absolute top-0 left-1/2 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-gold opacity-40" />

      {/* Content */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">


        {/* Main heading */}
        <h1
          className={`mb-6 font-serif text-5xl font-bold leading-tight text-burgundy transition-all duration-1000 delay-200 sm:text-6xl md:text-7xl lg:text-8xl ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          24 Months
          <br />
          <span className="text-rose">With Stuti</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`mb-12 max-w-xl font-serif text-lg leading-relaxed text-warm-gray italic transition-all duration-1000 delay-500 sm:text-xl ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          Two years, countless memories, one beautiful story.
        </p>

        {/* Featured photo */}
        <div
          className={`relative mb-16 w-full max-w-md transition-all duration-1200 delay-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="relative overflow-hidden rounded-sm border border-warm-gray-light/30 bg-cream-dark p-2 shadow-2xl">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/photos/20241013_190410-COLLAGE.jpg"
                alt="Our first photo together — 18 August 2024"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 90vw, 448px"
              />
            </div>
            {/* Photo caption */}
            <p className="mt-2 text-center font-serif text-xs italic text-warm-gray">
              Where it all began
            </p>
          </div>

          {/* Decorative border accent */}
          <div className="absolute -top-2 -left-2 h-12 w-12 border-t border-l border-gold/30" />
          <div className="absolute -right-2 -bottom-2 h-12 w-12 border-r border-b border-gold/30" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <ScrollIndicator />
      </div>
    </section>
  );
}
