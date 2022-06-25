/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['flagcdn.com', 'upload.wikimedia.org'],
  },
  env: {
    googleApiKey: 'AIzaSyAATFJ1k-0y2jIrNiLqkYjxmwgGdyEVbfg',
  },
}

module.exports = nextConfig
