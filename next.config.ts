import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['heffe.app', 'heffe-landing.vercel.app'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
}

export default nextConfig
