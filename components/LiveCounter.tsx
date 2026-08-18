"use client";

import { useEffect, useState } from "react";
import { RELATIONSHIP_START, timelineEntries } from "@/data/timeline";

/** Fixed start timestamp in milliseconds */
const START_MS = new Date(RELATIONSHIP_START).getTime();

interface CounterValues {
  days: string;
  seconds: string;
  moments: number;
}

function calculateValues(): CounterValues {
  const now = Date.now();
  const diffMs = now - START_MS;

  const totalSeconds = Math.floor(diffMs / 1000);
  const totalDays = Math.floor(diffMs / 86_400_000);

  const formatter = new Intl.NumberFormat("en-IN");

  return {
    days: formatter.format(totalDays),
    seconds: formatter.format(totalSeconds),
    moments: timelineEntries.length,
  };
}

export default function LiveCounter() {
  // Start with null to avoid hydration mismatch (server renders placeholder)
  const [values, setValues] = useState<CounterValues | null>(null);

  useEffect(() => {
    // Initial calculation on mount (client only)
    setValues(calculateValues());

    const interval = setInterval(() => {
      setValues(calculateValues());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const counters = [
    {
      value: values?.days ?? "—",
      label: "days together",
      id: "counter-days",
    },
    {
      value: values?.seconds ?? "—",
      label: "seconds together",
      id: "counter-seconds",
    },
    {
      value: values?.moments ?? "—",
      label: "memories we'll always keep",
      id: "counter-moments",
    },
  ];

  return (
    <section
      className="relative overflow-hidden px-6 py-20 md:py-32"
      aria-label="Live relationship counter"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-burgundy/[0.04] to-cream" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Section header */}
        <p className="mb-3 font-sans text-sm font-medium uppercase tracking-[0.3em] text-gold">
          And Counting
        </p>
        <h2 className="mb-4 font-serif text-3xl font-bold text-burgundy sm:text-4xl md:text-5xl">
          Every Second With You
        </h2>
        <div className="mx-auto mb-16 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />

        {/* Counter grid */}
        <div className="grid gap-8 sm:grid-cols-3 sm:gap-4 md:gap-8">
          {counters.map((counter) => (
            <div key={counter.id} className="flex flex-col items-center">
              <div
                id={counter.id}
                className="mb-3 font-serif text-4xl font-bold tabular-nums text-burgundy sm:text-3xl md:text-5xl lg:text-6xl"
                aria-live={counter.id === "counter-seconds" ? "polite" : undefined}
                aria-atomic={counter.id === "counter-seconds" ? "true" : undefined}
              >
                {counter.value}
              </div>
              <p className="font-sans text-sm font-medium uppercase tracking-[0.15em] text-warm-gray">
                {counter.label}
              </p>
            </div>
          ))}
        </div>

        {/* Noscript fallback */}
        <noscript>
          <div className="mt-8 rounded-sm bg-cream-dark p-6 text-center">
            <p className="font-serif text-lg text-burgundy">
              Since 18 August 2024 — counting every second together.
            </p>
            <p className="mt-2 text-sm text-warm-gray">
              Enable JavaScript to see the live counter.
            </p>
          </div>
        </noscript>

        {/* Decorative dot */}
        <div className="mx-auto mt-12 h-1.5 w-1.5 rounded-full bg-gold animate-pulse-soft" />
      </div>
    </section>
  );
}
