# 24 Months With Stuti

A private, romantic anniversary website celebrating 24 months together.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Customize

### Replace Photos

1. Place your photos in `/public/photos/`.
2. Name them meaningfully — e.g., `2024-08-18.jpg`, `first-date.jpg`.
3. Both portrait and landscape orientations are fully supported.
4. Supported formats: JPG, PNG, WebP, AVIF.

### Edit Timeline Entries

Open [`data/timeline.ts`](data/timeline.ts) and edit the `timelineEntries` array.

Each entry has:

```ts
{
  date: "2025-02-14",           // Date in YYYY-MM-DD format
  title: "Our First Valentine", // Short title
  caption: "A lovely evening.", // Description (1–2 sentences)
  location: "Mumbai",           // Optional — leave empty string if none
  image: "/photos/2025-02-14.jpg", // Path to photo in /public/photos/
  alt: "Us at dinner"           // Accessible image description
}
```

- **Reorder entries**: Change the `date` values. The website sorts by date automatically (newest first).
- **Add/remove entries**: Add or remove objects from the array. The "moments together" counter updates automatically.
- **Placeholders**: Entries marked `[PLACEHOLDER]` should be replaced with your real memories.

### Change the Relationship Start Time

In [`data/timeline.ts`](data/timeline.ts), edit the `RELATIONSHIP_START` constant:

```ts
export const RELATIONSHIP_START = "2024-08-18T20:00:00+05:30";
```

This is an ISO 8601 timestamp with IST offset (+05:30). The live counter uses this exact moment.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css       # Design system, colors, animations
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── Hero.tsx          # Full-screen hero with featured photo
│   ├── ScrollIndicator.tsx # Animated scroll-down button
│   ├── Timeline.tsx      # Timeline container and lightbox state
│   ├── TimelineEntry.tsx # Individual memory card
│   ├── Lightbox.tsx      # Full-screen photo viewer
│   ├── LiveCounter.tsx   # Live seconds/days/moments counter
│   └── Closing.tsx       # Closing message and footer
├── data/
│   └── timeline.ts       # ← EDIT THIS FILE for all content
└── public/
    └── photos/           # ← PUT YOUR PHOTOS HERE
```

## Tech Stack

- **Next.js 15** with App Router
- **TypeScript**
- **Tailwind CSS v4**
- No database, no APIs, no analytics — fully private and self-contained.
