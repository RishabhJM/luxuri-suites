/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'standalone',
  reactStrictMode: true,
  images: {
    unoptimized:true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'luxurisuites.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
