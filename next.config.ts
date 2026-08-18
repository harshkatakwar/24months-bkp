import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow SVG placeholders and local images
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
