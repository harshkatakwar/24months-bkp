/**
 * Timeline Data — 24 Months With Stuti
 *
 * HOW TO EDIT:
 * 1. Replace placeholder photos in /public/photos/ with your actual images.
 * 2. Update the entries below with real dates, titles, captions, locations, and alt text.
 * 3. Entries are displayed in descending date order (newest first) automatically.
 * 4. The "moments together" counter equals the number of entries in this array.
 * 5. To reorder, simply change the `date` values — the app sorts by date.
 */

export interface TimelineEntry {
  date: string;
  title: string;
  caption: string;
  location?: string;
  image: string;
  alt: string;
}

export const RELATIONSHIP_START = "2024-08-18T20:00:00+05:30";

export const timelineEntries: TimelineEntry[] = [
  {
    date: "2024-10-13",
    title: "A Beautiful Memory",
    caption: "",
    location: "",
    image: "/photos/20241013_190410-COLLAGE.jpg",
    alt: "Memory from Oct 13, 2024"
  },
  {
    date: "2024-11-27",
    title: "Short trip to Pune",
    caption: "Met in Pune for a short duration.",
    location: "Pune",
    image: "/photos/Snapchat-2122597157.jpg",
    alt: "Memory in Pune"
  },
  {
    date: "2025-01-25",
    title: "Beautiful Moments",
    caption: "you holding our heart",
    location: "",
    image: "/photos/20250125_221427.jpg",
    alt: "Memory from Jan 25, 2025"
  },
  {
    date: "2025-01-25",
    title: "More moments together at Coldplay",
    caption: "",
    location: "",
    image: "/photos/20250125_221639.jpg",
    alt: "Memory from Jan 25, 2025"
  },
  {
    date: "2025-01-25",
    title: "Our Special Time",
    caption: "",
    location: "",
    image: "/photos/20250125_222146.jpg",
    alt: "Memory from Jan 25, 2025"
  },
  {
    date: "2025-08-16",
    title: "August Memories",
    caption: "",
    location: "",
    image: "/photos/20250816_101249.jpg",
    alt: "Memory from Aug 16, 2025"
  },
  {
    date: "2025-08-16",
    title: "A Lovely Video",
    caption: "from Swaminarayan mandir",
    location: "",
    image: "/photos/20250816_165747.mp4",
    alt: "Video from Aug 16, 2025"
  },
  {
    date: "2025-08-16",
    title: "Another Memory",
    caption: "",
    location: "",
    image: "/photos/20250816_170051.jpg",
    alt: "Memory from Aug 16, 2025"
  },

  {
    date: "2025-08-17",
    title: "Fun Animation",
    caption: "",
    location: "",
    image: "/photos/20250817_152235-ANIMATION.gif",
    alt: "Memory from Aug 17, 2025"
  },
  {
    date: "2025-08-19",
    title: "Together in Youmee",
    caption: "having good food while you being sick",
    location: "",
    image: "/photos/20250819_170653.mp4",
    alt: "Video from Aug 19, 2025"
  },
  {
    date: "2025-08-19",
    title: "Joyful Video",
    caption: "",
    location: "",
    image: "/photos/20250819_193314.mp4",
    alt: "Video from Aug 19, 2025"
  }
];
