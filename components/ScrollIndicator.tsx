export default function ScrollIndicator() {
  return (
    <button
      onClick={() => {
        const timeline = document.getElementById("timeline");
        timeline?.scrollIntoView({ behavior: "smooth" });
      }}
      className="flex flex-col items-center gap-2 text-warm-gray transition-colors hover:text-burgundy focus-visible:text-burgundy"
      aria-label="Scroll down to timeline"
    >
      <span className="text-xs font-medium uppercase tracking-[0.2em]">
        Our Story
      </span>
      <svg
        className="animate-bounce-gentle h-5 w-5"
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
    </button>
  );
}
