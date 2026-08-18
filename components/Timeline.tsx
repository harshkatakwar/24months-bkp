"use client";

import { useMemo, useState } from "react";
import { timelineEntries } from "@/data/timeline";
import TimelineEntryCard from "./TimelineEntry";
import Lightbox from "./Lightbox";

export default function Timeline() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Sort entries by date descending (newest first)
  const sortedEntries = useMemo(
    () =>
      [...timelineEntries].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    []
  );

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToPrev = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  const goToNext = () => {
    if (lightboxIndex !== null && lightboxIndex < sortedEntries.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  return (
    <section
      id="timeline"
      className="relative px-6 py-20 md:py-32"
      aria-label="Our timeline of memories"
    >
      {/* Section header */}
      <div className="mx-auto mb-16 max-w-2xl text-center md:mb-24">
        <p className="mb-3 font-sans text-sm font-medium uppercase tracking-[0.3em] text-gold">
          Our Journey
        </p>
        <h2 className="font-serif text-3xl font-bold text-burgundy sm:text-4xl md:text-5xl">
          Memories We&rsquo;ve Made
        </h2>
        <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>

      {/* Timeline container */}
      <div className="relative mx-auto max-w-5xl">
        {/* Vertical timeline line — visible on md+ */}
        <div
          className="absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-gold/0 via-gold/40 to-gold/0 md:block"
          aria-hidden="true"
        />

        {/* Mobile timeline line */}
        <div
          className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-gold/0 via-gold/40 to-gold/0 md:hidden"
          aria-hidden="true"
        />

        {/* Entries */}
        <div className="space-y-12 md:space-y-20">
          {sortedEntries.map((entry, index) => (
            <TimelineEntryCard
              key={entry.date}
              entry={entry}
              index={index}
              isLeft={index % 2 === 0}
              onImageClick={() => openLightbox(index)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          entries={sortedEntries}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
        />
      )}
    </section>
  );
}
