import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Explicitly set this project as its own root so Next.js doesn't get
  // confused by a parent-level lockfile.
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
