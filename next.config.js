/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  logging: {
    fetches: {
      fullUrl: true, // console fetching url logging
    }
  }
}

module.exports = nextConfig

