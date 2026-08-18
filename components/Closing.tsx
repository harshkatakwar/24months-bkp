"use client";

export default function Closing() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      className="relative px-6 py-20 md:py-32"
      aria-label="Closing message"
    >
      <div className="mx-auto max-w-2xl text-center">
        {/* Decorative line */}
        <div className="mx-auto mb-12 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />

        {/* Main closing message */}
        <p className="mb-8 font-serif text-xl leading-relaxed text-charcoal/80 italic sm:text-2xl md:text-3xl">
          Here&rsquo;s to every moment behind us—
          <br className="hidden sm:block" />
          and everything still ahead.
        </p>

        {/* Anniversary message */}
        <p className="mb-16 font-serif text-2xl font-bold text-burgundy sm:text-3xl md:text-4xl">
          Happy 24 months, Stuti ❤️
        </p>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="group inline-flex flex-col items-center gap-2 text-warm-gray transition-colors hover:text-burgundy focus-visible:text-burgundy"
          aria-label="Back to top"
        >
          <svg
            className="h-5 w-5 rotate-180 transition-transform group-hover:-translate-y-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
          <span className="text-xs font-medium uppercase tracking-[0.2em]">
            Back to Top
          </span>
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-warm-gray-light/20 pt-8 text-center">
        <p className="font-sans text-xs text-warm-gray/60">
          Made with love · For Stuti
        </p>
      </footer>
    </section>
  );
}
