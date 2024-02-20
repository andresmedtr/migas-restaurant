/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    // config.experimental.webpackBuildWorker = true;

    return config;
  },
  experimental: { webpackBuildWorker: true },
};

module.exports = nextConfig;
