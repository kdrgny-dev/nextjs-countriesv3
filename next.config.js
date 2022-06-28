/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['flagcdn.com', 'upload.wikimedia.org'],
  },
  env: {
    googleApiKey: process.env.GOOGLE_MAPS_API,
  },
}

module.exports = nextConfig
