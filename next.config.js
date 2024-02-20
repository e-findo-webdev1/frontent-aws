/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  logging: {
    fetches: {
      fullUrl: true, // console fetching url logging
    }
  }
}

module.exports = nextConfig

