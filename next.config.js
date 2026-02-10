/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    unoptimized: false,
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'gsap'],
  },
}

module.exports = nextConfig
