// next.config.js
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // Required for static export (for GitHub Pages)
  // Only apply basePath/assetPrefix in production (for GitHub Pages).
  basePath: isProd ? "/portfolio25" : "",
  assetPrefix: isProd ? "/portfolio25/" : "",
  images: {
    unoptimized: true, // GitHub Pages doesn’t support Next.js image optimization
    domains: ["i.postimg.cc"],
  },
};

export default nextConfig;
