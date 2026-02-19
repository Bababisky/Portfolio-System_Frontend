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
  // Allow self-signed certificates in development
  ...(process.env.NODE_ENV !== 'production' && {
    webpack: (config, { isServer }) => {
      if (isServer) {
        // Bypass SSL verification for development
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
      }
      return config;
    },
  }),
}

module.exports = nextConfig
