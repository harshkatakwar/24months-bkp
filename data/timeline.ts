/**
 * Timeline Data — 24 Months With Stuti
 *
 * HOW TO EDIT:
 * 1. Replace placeholder photos in /public/photos/ with your actual images.
 * 2. Update the entries below with real dates, titles, captions, locations, and alt text.
 * 3. Entries are displayed in descending date order (newest first) automatically.
 * 4. The "moments together" counter equals the number of entries in this array.
 * 5. To reorder, simply change the `date` values — the app sorts by date.
 *
 * IMAGE TIPS:
 * - Place images in /public/photos/
 * - Reference them as "/photos/your-image.jpg"
 * - Both portrait and landscape orientations are supported.
 */

export interface TimelineEntry {
  /** Date in YYYY-MM-DD format */
  date: string;
  /** Short title for this memory */
  title: string;
  /** A sentence or two describing the memory */
  caption: string;
  /** Optional location name */
  location?: string;
  /** Path to the image in /public/photos/ */
  image?: string;
  /** Accessible description of the photograph */
  alt?: string;
}

/**
 * RELATIONSHIP START TIMESTAMP
 *
 * This is the exact moment your relationship began.
 * Format: ISO 8601 with timezone offset for Asia/Kolkata (IST = +05:30)
 *
 * Change this to adjust the live counter.
 */
export const RELATIONSHIP_START = "2024-08-18T21:15:00+05:30";

/**
 * TIMELINE ENTRIES
 *
 * Add, remove, or edit entries below. The website automatically:
 * - Sorts entries by date (newest first)
 * - Updates the "moments together" count
 * - Renders each entry in the timeline
 */
export const timelineEntries: TimelineEntry[] = [
  {
    date: "2026-08-16",
    title: "With my Kuchu Puchu",
    caption: "A beautiful day together.",
    image: "/photos/20250816_101249.jpg",
    alt: "With my kuchu puchu"
  },
  {
    date: "2026-03-08",
    title: "Roka Ceremony",
    caption: "Your parents visited my parent in Bilaspur and we had our Roka.",
    location: "Bilaspur"
  },
  {
    date: "2026-02-08",
    title: "Parents Meet",
    caption: "My parents visited your parents in Raipur.",
    location: "Raipur"
  },
  {
    date: "2026-01-22",
    title: "Lollapalooza for Linkin Park",
    caption: "Attended Lollapalooza to see Linkin Park live!",
    location: "Mumbai"
  },
  {
    date: "2025-11-27",
    title: "Special Day",
    caption: "A memorable moment."
  },
  {
    date: "2025-02-08",
    title: "You Said Yes",
    caption: "The day you finally said yes!"
  },
  {
    date: "2025-01-25",
    title: "Coldplay Concert",
    caption: "Enjoying the Coldplay concert together.",
    image: "/photos/20250125_221427.jpg",
    alt: "Coldplay concert"
  },
  {
    date: "2025-01-24",
    title: "Ahmedabad Visit",
    caption: "Visiting Ahmedabad.",
    location: "Ahmedabad",
    image: "/photos/20250125_222146.jpg",
    alt: "Ahmedabad visit"
  },
  {
    date: "2024-11-11",
    title: "Second Meet",
    caption: "Our second time meeting each other.",
    location: "Raipur",
    image: "/photos/WhatsApp Image 2025-08-20 at 23.41.26.jpeg",
    alt: "Second meet"
  },
  {
    date: "2024-10-13",
    title: "Meeting For The First Time",
    caption: "Seeing you at 10:55 AM. The moment it all became real.",
    location: "Pune (18°33'12.7\"N 73°55'07.7\"E)",
    image: "/photos/20241013_190410-COLLAGE.jpg",
    alt: "First meeting"
  },
  {
    date: "2024-10-01",
    title: "First Phone Call",
    caption: "Hearing your voice over the phone for the first time."
  },
  {
    date: "2024-09-08",
    title: "First Google Meet",
    caption: "We had our first video call at 12:18 AM. (meet.google.com/wan-jsxp-dpd)"
  },
  {
    date: "2024-08-25",
    title: "Connected on Instagram",
    caption: "Taking our connection to the next platform."
  },
  {
    date: "2024-08-18",
    title: "First Chat on LinkedIn",
    caption: "09:15 PM - Where it all began. Our very first conversation."
  }
];
