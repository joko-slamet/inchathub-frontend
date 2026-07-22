import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      // Default is 1MB, too small for the image uploads that go through
      // Server Actions (promo/company-logo create & update) — the backend's
      // own multer limit is 2MB, so this needs headroom above that plus the
      // multipart boundary/field overhead Next.js counts against this limit.
      bodySizeLimit: "3mb",
    },
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4100/api/:path*',
      },
    ];
  },
};

export default nextConfig;
