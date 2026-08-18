"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { TimelineEntry } from "@/data/timeline";

interface TimelineEntryCardProps {
  entry: TimelineEntry;
  index: number;
  isLeft: boolean;
  onImageClick: () => void;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function TimelineEntryCard({
  entry,
  index,
  isLeft,
  onImageClick,
}: TimelineEntryCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([observerEntry]) => {
        if (observerEntry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animationClass = isVisible
    ? isLeft
      ? "animate-fade-in-left"
      : "animate-fade-in-right"
    : "opacity-0";

  return (
    <article
      ref={ref}
      className={`relative flex flex-col md:flex-row md:items-start ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Date marker on the timeline */}
      <div
        className="absolute left-6 top-0 z-10 md:left-1/2 md:-translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex h-3 w-3 items-center justify-center rounded-full border-2 border-gold bg-cream shadow-sm" />
      </div>

      {/* Mobile date */}
      <time
        className="mb-3 ml-14 block font-sans text-xs font-medium uppercase tracking-[0.15em] text-warm-gray md:hidden"
        dateTime={entry.date}
      >
        {formatDate(entry.date)}
      </time>

      {/* Content card */}
      <div
        className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${animationClass} ${
          isLeft ? "md:pr-8" : "md:pl-8"
        }`}
        style={!isVisible ? {} : { animationDelay: `${index * 80}ms` }}
      >
        {/* Desktop date */}
        <time
          className="mb-3 hidden font-sans text-xs font-medium uppercase tracking-[0.15em] text-warm-gray md:block"
          dateTime={entry.date}
        >
          {formatDate(entry.date)}
        </time>

        {/* Photo */}
        {entry.image && (
          <button
            onClick={onImageClick}
            className="group relative mb-4 w-full cursor-pointer overflow-hidden rounded-sm bg-cream-dark shadow-lg transition-shadow duration-300 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            aria-label={`View full size: ${entry.alt || entry.title}`}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
              {entry.image.endsWith('.mp4') ? (
                <video
                  src={entry.image}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <Image
                  src={entry.image}
                  alt={entry.alt || entry.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                  sizes="(max-width: 768px) 85vw, 400px"
                />
              )}
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-burgundy/0 transition-colors duration-300 group-hover:bg-burgundy/10" />
          </button>
        )}

        {/* Text content */}
        <div className="space-y-1.5">
          <h3 className="font-serif text-xl font-semibold text-burgundy">
            {entry.title}
          </h3>
          <p className="font-sans text-sm leading-relaxed text-charcoal/80">
            {entry.caption}
          </p>
          {entry.location && (
            <p className="flex items-center gap-1 font-sans text-xs text-warm-gray">
              <svg
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z"
                />
              </svg>
              {entry.location}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
