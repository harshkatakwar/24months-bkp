"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { TimelineEntry } from "@/data/timeline";

interface LightboxProps {
  entries: TimelineEntry[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  entries,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const current = entries[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < entries.length - 1;

  // Lock body scroll
  useEffect(() => {
    document.body.classList.add("lightbox-open");
    return () => document.body.classList.remove("lightbox-open");
  }, []);

  // Focus trap — focus the close button on mount
  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          if (hasPrev) onPrev();
          break;
        case "ArrowRight":
          if (hasNext) onNext();
          break;
      }
    },
    [onClose, onPrev, onNext, hasPrev, hasNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Touch / swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 60) {
      if (diff > 0 && hasNext) onNext();
      else if (diff < 0 && hasPrev) onPrev();
    }
    setTouchStart(null);
  };

  // Click backdrop to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo: ${current.alt || current.title}`}
      className="animate-lightbox-in fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 backdrop-blur-sm"
      onClick={handleBackdropClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button */}
      <button
        ref={closeButtonRef}
        onClick={onClose}
        className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 focus-visible:ring-2 focus-visible:ring-gold"
        aria-label="Close lightbox"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Previous button */}
      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 focus-visible:ring-2 focus-visible:ring-gold sm:left-6 sm:h-12 sm:w-12"
          aria-label="Previous photo"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      )}

      {/* Next button */}
      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 focus-visible:ring-2 focus-visible:ring-gold sm:right-6 sm:h-12 sm:w-12"
          aria-label="Next photo"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        className="relative mx-auto flex max-h-[85vh] max-w-[90vw] flex-col items-center sm:max-w-[80vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[70vh] w-full max-w-3xl flex items-center justify-center">
          {current.image ? (
            current.image.endsWith('.mp4') ? (
              <video
                src={current.image}
                controls
                autoPlay
                className="h-full w-full object-contain"
              />
            ) : (
              <Image
                src={current.image}
                alt={current.alt || current.title}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            )
          ) : (
            <div className="text-center p-8 bg-cream/5 rounded-lg border border-cream/10">
              <svg className="w-16 h-16 mx-auto text-cream/20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <p className="text-xl font-serif text-cream/60">A beautiful memory</p>
            </div>
          )}
        </div>

        {/* Caption */}
        <div className="mt-4 text-center">
          <p className="font-serif text-lg text-cream">{current.title}</p>
          <p className="mt-1 text-sm text-cream/60">{current.caption}</p>
          <p className="mt-2 text-xs text-cream/40">
            {currentIndex + 1} / {entries.length}
          </p>
        </div>
      </div>
    </div>
  );
}
