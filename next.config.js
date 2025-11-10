/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },
  // Only enable these settings when building for production (GitHub Pages)
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',
  } : {})
}

module.exports = nextConfig