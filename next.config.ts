import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['heffe.app', 'heffe-landing.vercel.app'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false, // ponelo en true solo si querés ignorar errores de TS también
  },
}

export default nextConfig
