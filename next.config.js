/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

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

module.exports = withBundleAnalyzer(nextConfig)

